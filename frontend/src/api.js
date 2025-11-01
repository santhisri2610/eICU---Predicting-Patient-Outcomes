// frontend/src/api.js
import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000", // FastAPI backend
  timeout: 5000,
});

export const predictPatientOutcome = async (patientData) => {
  try {
    const response = await API.post("/predict", patientData);
    return response.data;
  } catch (error) {
    // rethrow so the UI can decide fallback behavior
    throw error;
  }
};