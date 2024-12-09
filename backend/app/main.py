from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes.prediction_route import router

# Initialize FastAPI app
app = FastAPI()

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Allow your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include the prediction route
app.include_router(router)
