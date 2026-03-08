from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
import os

app = Flask(__name__)
CORS(app)

MODEL_PATH = os.path.join("saved_model", "crop_model.pkl")

model = joblib.load(MODEL_PATH)


@app.route("/predict", methods=["POST"])
def predict():
    data = request.json

    nitrogen = data["nitrogen"]
    phosphorus = data["phosphorus"]
    potassium = data["potassium"]
    temperature = data["temperature"]
    humidity = data["humidity"]
    rainfall = data["rainfall"]

    features = np.array([[nitrogen, phosphorus, potassium,
                          temperature, humidity, rainfall]])

    prediction = model.predict(features)[0]

    return jsonify({"crop": prediction})


if __name__ == "__main__":
    app.run(port=5001, debug=True)