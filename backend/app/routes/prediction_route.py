from fastapi import APIRouter
from app.controllers.prediction_controller import predict_harvest
from app.schemas.prediction_schema import FarmData

router = APIRouter()

# Define the prediction route
@router.post("/predict/")
async def predict(data: FarmData):
    return await predict_harvest(data)
