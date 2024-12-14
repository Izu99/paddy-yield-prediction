from pydantic import BaseModel

class WeatherData(BaseModel):
    district: str
    season: str
    average_temperature: float
    average_rainfall: float
    average_sunshine_hours: float
    average_humidity: float

    class Config:
        from_attributes = True
