# fatty_liver_model.py

# Import libraries
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score, classification_report
import pickle

# Step 1: Create synthetic dataset (fake but realistic)
np.random.seed(42)

data_size = 500

data = pd.DataFrame({
    "Age": np.random.randint(20, 70, data_size),
    "BMI": np.random.uniform(18, 35, data_size),
    "Alcohol": np.random.randint(0, 10, data_size),
    "PhysicalActivity": np.random.randint(1, 5, data_size),
    "ALT": np.random.uniform(10, 100, data_size),
    "AST": np.random.uniform(10, 100, data_size),
    "Cholesterol": np.random.uniform(150, 300, data_size),
    "Glucose": np.random.uniform(70, 180, data_size)
})

# Fake target logic (just for demo)
data["FattyLiverRisk"] = (
    (data["BMI"] > 28) |
    (data["Alcohol"] > 5) |
    (data["ALT"] > 60) |
    (data["Cholesterol"] > 240)
).astype(int)

# Step 2: Split data
X = data.drop("FattyLiverRisk", axis=1)
y = data["FattyLiverRisk"]

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Step 3: Train model
model = RandomForestClassifier(n_estimators=100)
model.fit(X_train, y_train)

# Step 4: Evaluate
y_pred = model.predict(X_test)

print("Accuracy:", accuracy_score(y_test, y_pred))
print("\nClassification Report:\n", classification_report(y_test, y_pred))

# Step 5: Save model
with open("fatty_liver_model.pkl", "wb") as file:
    pickle.dump(model, file)

print("\nModel trained and saved successfully!")