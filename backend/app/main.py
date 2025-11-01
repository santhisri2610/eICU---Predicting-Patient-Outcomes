from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow React frontend to talk to FastAPI
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Input schema
class PatientData(BaseModel):
    age: int
    gender: str
    blood_pressure: str
    heart_rate: int
    oxygen_saturation: int
    temperature: float
    diagnosis: str
    medications: str

@app.post("/predict")
def predict(data: PatientData):
    # Mock logic (replace with ML model prediction)
    predicted_los = 4
    in_hospital_mortality = 18  

    return {
        "predicted_los": predicted_los,
        "in_hospital_mortality": in_hospital_mortality,
        "patient_id": 12345,
        "prev_ihm": 15
    }
