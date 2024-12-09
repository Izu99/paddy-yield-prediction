import pandas as pd
from fastapi import HTTPException
from app.utils.model_loader import load_model
from app.schemas.prediction_schema import FarmData

# Load the model
model = load_model("app/train_model/rice_yield_random_forest_model.pkl")

# Prediction controller function
async def predict_harvest(data: FarmData):
    try:
        # Create a DataFrame with the input data
        new_data = pd.DataFrame([{
            'Rainfall (mm)': data.rainfall,
            'Temperature (°C)': data.temperature,
            'Relative Humidity (%)': data.humidity,
            'Sunshine Hours (hrs)': data.sunshine_hours,
            'Wind Speed (km/h)': data.wind_speed,
            'Soil Type': data.soil_type,
            'Irrigation Type': data.irrigation_type,
            'Water Source': data.water_source,
            'Paddy Variety': data.paddy_variety,
            'Fertilizer Usage (kg)': data.fertilizer_usage,
            'Area (hectare)': data.area,
            'Soil Nitrogen (mg/kg)': data.soil_nitrogen,
            'Soil Phosphorus (mg/kg)': data.soil_phosphorus,
            'Soil Potassium (mg/kg)': data.soil_potassium,
            'Pest Severity': data.pest_severity,
            'Season': data.season,
            'District': data.district
        }])

        # Predict the yield
        total_predicted_yield = model.predict(new_data)[0]
        predicted_yield_per_hectare = total_predicted_yield / data.area

        recommendations = []

        # Generate recommendations based on the predicted yield
        if data.previous_yield_per_hectare > predicted_yield_per_hectare:
            recommendations.append("Optimize fertilizer usage based on soil tests.")
            recommendations.append("Improve irrigation practices to ensure consistent water supply.")
            recommendations.append("Consider pest control measures to minimize yield loss.")
            recommendations.append("Use high-yield paddy varieties suitable for the district.")
            recommendations.append("Apply balanced soil nutrients and organic matter.")
        elif predicted_yield_per_hectare > data.previous_yield_per_hectare:
            recommendations.append("Continue current agricultural practices.")
            recommendations.append("Monitor soil health regularly and apply nutrients accordingly.")
            recommendations.append("Use precision farming tools to track crop progress.")
            recommendations.append("Plan for seasonal crop rotation to maintain soil fertility.")
            recommendations.append("Use modern harvesting techniques to minimize post-harvest losses.")
        else:
            recommendations.append("Keep up the current practices!")

        return {
            "total_predicted_yield": total_predicted_yield,
            "predicted_yield_per_hectare": predicted_yield_per_hectare,
            "recommendations": recommendations
        }
    
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Prediction failed: {str(e)}")
