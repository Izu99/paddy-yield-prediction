import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaSeedling } from "react-icons/fa";

const InputPage = () => {
  const [formData, setFormData] = useState({
    district: "",
    season: "",
    temperature: "",
    rainfall: "",
    sunshine_hours: "",
    humidity: "",
    wind_speed: "",
    soil_type: "",
    irrigation_type: "",
    water_source: "",
    paddy_variety: "",
    fertilizer_usage: "",
    soil_nitrogen: "",
    soil_phosphorus: "",
    soil_potassium: "",
    pest_severity: "",
    area: "",
  });

  const navigate = useNavigate();

  const districts = ["Kandy", "Colombo", "Galle", "Hambantota"];
  const seasons = ["Maha", "Yala"];
  const soilTypes = ["Loam", "Sandy", "Clay"];
  const irrigationTypes = ["Rainfed", "Canal", "Tube Well"];
  const waterSources = ["Well", "River", "Rainwater"];
  const paddyVarieties = ["BG 450", "BG 250", "BG 350", "BG 360"];
  const pestSeverities = ["Low", "Medium", "High"];

  const fetchWeatherData = async (district, season) => {
    if (district && season) {
      const response = await fetch(
        `http://127.0.0.1:8000/weather?district=${district}&season=${season}`
      );
      const data = await response.json();
      setFormData((prevData) => ({
        ...prevData,
        temperature: data.average_temperature,
        rainfall: data.average_rainfall,
        sunshine_hours: data.average_sunshine_hours,
        humidity: data.average_humidity,
        wind_speed: data.average_windspeed,
      }));
    }
  };

  const handleDistrictSeasonChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  useEffect(() => {
    fetchWeatherData(formData.district, formData.season);
  }, [formData.district, formData.season]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://127.0.0.1:8000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    navigate("/result", { state: { predictionResult: result } });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = name === "soil_phosphorus" && value < 0 ? 0 : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: sanitizedValue,
    }));
  };

  return (
    <div
      className="min-h-screen flex flex-col bg-cover text-white"
      style={{
        backgroundImage:
          "url('https://lh3.googleusercontent.com/HQ9WPPhQdBRcJ3jh-cQiYeNXFxLjV3SSERuc5Qf81tDOx37dWD4JRzDGuIO45QE8j6hy98aOHWVMfcxT2N-EgjsHuLSq5g7uvGIQ2pr1R1D0RScdB_hPeEiR9ABpvaezlxLDa2xwBuYs3H_lP83S5iQ')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex pt-20 m-4 flex-grow items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-darkblack/80 border border-darkgreen p-8 rounded-lg shadow-lg w-full max-w-4xl"
        >
         <h1 className="text-4xl bg-gradient-to-r from-primary to-darkgreen bg-clip-text text-transparent text-center font-bold mb-6">
  Enter Paddy Yield Data
</h1>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {/* District */}
            <div className="col-span-2">
              <label
                htmlFor="district"
                className="block font-medium text-gray-100 mb-2"
              >
                District
              </label>
              <select
                name="district"
                id="district"
                value={formData.district}
                onChange={handleDistrictSeasonChange}
                className="w-full p-3 border border-darkgreen rounded bg-darkblack text-white"
              >
                <option value="">Select District</option>
                {districts.map((district) => (
                  <option key={district} value={district}>
                    {district}
                  </option>
                ))}  
              </select>
            </div>
            {/* Season */}
            <div className="col-span-2">
              <label
                htmlFor="season"
                className="block font-medium text-gray-100 mb-2"
              >
                Season
              </label>
              <select
                name="season"
                id="season"
                value={formData.season}
                onChange={handleDistrictSeasonChange}
                className="w-full p-3 border border-darkgreen rounded bg-darkblack text-white"
              >
                <option value="">Select Season</option>
                {seasons.map((season) => (
                  <option key={season} value={season}>
                    {season}
                  </option>
                ))}
              </select>
            </div>
            {/* Form Fields */}
            {Object.keys(formData).map((key) => {
              if (key === "district" || key === "season") return null;

              let options = [];
              switch (key) {
                case "soil_type":
                  options = soilTypes;
                  break;
                case "irrigation_type":
                  options = irrigationTypes;
                  break;
                case "water_source":
                  options = waterSources;
                  break;
                case "paddy_variety":
                  options = paddyVarieties;
                  break;
                case "pest_severity":
                  options = pestSeverities;
                  break;
                default:
                  options = [];
              }

              return (
                <div key={key} className="col-span-1">
                  <label
                    htmlFor={key}
                    className="block font-medium text-gray-100 mb-2"
                  >
                    {key.replace(/_/g, " ")}
                  </label>
                  {options.length > 0 ? (
                    <select
                      name={key}
                      id={key}
                      value={formData[key]}
                      onChange={handleChange}
                      className="w-full p-3 border border-darkgreen rounded bg-darkblack text-white"
                    >
                      <option value="">Select {key.replace(/_/g, " ")}</option>
                      {options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={
                        [
                          "area",
                          "rainfall",
                          "temperature",
                          "humidity",
                          "sunshine_hours",
                          "wind_speed",
                          "soil_phosphorus",
                        ].includes(key)
                          ? "number"
                          : "text"
                      }
                      name={key}
                      id={key}
                      value={formData[key]}
                      onChange={handleChange}
                      step="any"
                      className="w-full p-3 border border-darkgreen rounded bg-darkblack text-white"
                      required
                    />
                  )}
                </div>
              );
            })}
            <div className="mt-16 flex col-span-2 justify-center">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative overflow-hidden px-12 py-4 bg-gradient-to-r from-primary to-darkgreen
                     rounded-xl text-white font-bold text-xl shadow-xl
                     hover:shadow-primary/50 transition-all duration-300"
              >
                <div
                  className="absolute inset-0  transform scale-x-0 group-hover:scale-x-100 
                          transition-transform origin-left duration-300">
                </div>
                <span className="relative flex items-center gap-3">
                  <FaSeedling className="text-2xl" />
                  <span>Generate Prediction</span>
                </span>
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default InputPage;
