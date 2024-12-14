from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.weather_route import router as weather_router
from app.routes.prediction_route import router as predict_router

app = FastAPI()

# CORS middleware configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # The URL of your Vite frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(weather_router, prefix="/weather")
app.include_router(predict_router, prefix="/predict")
