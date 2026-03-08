import pandas as pd
import pickle
import matplotlib.pyplot as plt
import numpy as np

from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score

from sklearn.ensemble import RandomForestClassifier, GradientBoostingClassifier
from sklearn.tree import DecisionTreeClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.svm import SVC


# -------------------------------
# 1. Load Dataset
# -------------------------------
data = pd.read_csv("dataset/Crop_recommendation.csv")

print("Dataset Loaded\n")

# -------------------------------
# 2. Select Features (NO PH)
# -------------------------------
X = data[['N','P','K','temperature','humidity','rainfall']]
y = data['label']

# -------------------------------
# 3. Train Test Split
# -------------------------------
X_train, X_test, y_train, y_test = train_test_split(
    X, y,
    test_size=0.2,
    random_state=42
)

print("Training samples:", X_train.shape)
print("Testing samples:", X_test.shape)
print()

# -------------------------------
# 4. Models to Train
# -------------------------------
models = {

    "Random Forest": RandomForestClassifier(),

    "Decision Tree": DecisionTreeClassifier(),

    "KNN": KNeighborsClassifier(),

    "SVM": SVC(),

    "Gradient Boosting": GradientBoostingClassifier()
}

best_accuracy = 0
best_model = None
best_model_name = ""

print("Training Models...\n")

# -------------------------------
# 5. Train and Evaluate Models
# -------------------------------
for name, model in models.items():

    model.fit(X_train, y_train)

    train_predictions = model.predict(X_train)
    train_accuracy = accuracy_score(y_train, train_predictions)

    test_predictions = model.predict(X_test)
    test_accuracy = accuracy_score(y_test, test_predictions)

    print(name)
    print("Training Accuracy:", train_accuracy)
    print("Testing Accuracy:", test_accuracy)
    print()

    if test_accuracy > best_accuracy:
        best_accuracy = test_accuracy
        best_model = model
        best_model_name = name


# -------------------------------
# 6. Best Model
# -------------------------------
print("Best Model:", best_model_name)
print("Best Model Accuracy:", best_accuracy)

# -------------------------------
# 7. Save Model
# -------------------------------
pickle.dump(best_model, open("saved_model/crop_model.pkl", "wb"))

print("\nBest model saved successfully!")

# -------------------------------
# 8. Feature Importance Graph
# -------------------------------
if best_model_name in ["Random Forest", "Gradient Boosting", "Decision Tree"]:

    importances = best_model.feature_importances_
    features = X.columns

    print("\nFeature Importance:\n")

    for feature, importance in zip(features, importances):
        print(feature, ":", importance)

    indices = np.argsort(importances)

    plt.figure(figsize=(8,5))
    plt.title("Feature Importance")

    plt.barh(range(len(indices)), importances[indices])
    plt.yticks(range(len(indices)), [features[i] for i in indices])

    plt.xlabel("Importance Score")
    plt.ylabel("Feature")

    plt.show()