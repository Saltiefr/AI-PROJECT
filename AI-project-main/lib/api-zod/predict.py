import pickle
import numpy as np

# Load model
with open("fatty_liver_model.pkl", "rb") as file:
    model = pickle.load(file)

# Example input
sample = np.array([[45, 30, 6, 2, 70, 65, 250, 150]])

prediction = model.predict(sample)[0]
probability = model.predict_proba(sample)[0][1]

risk = "High Risk" if prediction == 1 else "Low Risk"

print("Prediction:", risk)
print("Probability:", round(probability * 100, 2), "%")