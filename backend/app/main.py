from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.weather_route import router as weather_router
from app.routes.prediction_route import router as predict_router
from app.routes.user_route import router as user_route

app = FastAPI()

# CORS middleware configuration
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # The URL of your Vite frontend
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

import sqlite3
print(sqlite3.sqlite_version)

app.include_router(weather_router, prefix="/weather")
app.include_router(predict_router, prefix="/predict")
app.include_router(user_route, prefix="/auth", tags=["auth"])

