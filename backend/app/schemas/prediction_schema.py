from pydantic import BaseModel

class FarmData(BaseModel):
    area: float
    rainfall: float
    temperature: float
    humidity: float
    sunshine_hours: float
    wind_speed: float
    soil_type: str
    irrigation_type: str
    water_source: str
    paddy_variety: str
    fertilizer_usage: float
    soil_nitrogen: float
    soil_phosphorus: float
    soil_potassium: float
    pest_severity: str
    season: str
    district: str
    previous_yield_per_hectare: float
