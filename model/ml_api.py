from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np

app = Flask(__name__)
CORS(app)

# Load model
model = joblib.load("saved_model/crop_model.pkl")


@app.route("/predict", methods=["POST"])
def predict():

    data = request.json

    features = np.array([[
        data["nitrogen"],
        data["phosphorus"],
        data["potassium"],
        data["temperature"],
        data["humidity"],
        data["rainfall"]
    ]])

    prediction = model.predict(features)[0]

    return jsonify({
        "crop": prediction
    })


if __name__ == "__main__":
    app.run(port=5001, debug=True)