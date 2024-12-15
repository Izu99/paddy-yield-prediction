import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const InputPage = () => {
  const [formData, setFormData] = useState({
    district: '',
    season: '',
    temperature: '',
    rainfall: '',
    sunshine_hours: '',
    humidity: '',
    wind_speed: '',
    soil_type: '',
    irrigation_type: '',
    water_source: '',
    paddy_variety: '',
    fertilizer_usage: '',
    soil_nitrogen: '',
    soil_phosphorus: '',
    soil_potassium: '',
    pest_severity: '',
    area: ''
  });

  const navigate = useNavigate();

  // Predefined options for select fields
  const districts = ['Kandy', 'Colombo', 'Galle'];
  const seasons = ['Maha', 'Yala'];
  const soilTypes = ['Loam', 'Sandy', 'Clay'];
  const irrigationTypes = ['Rainfed', 'Canal', 'Tube Well'];
  const waterSources = ['Well', 'River', 'Rainwater'];
  const paddyVarieties = ['BG 450', 'BG 250', 'BG 350', 'BG 360'];
  const pestSeverities = ['Low', 'Medium', 'High'];

  // Fetch data based on selected district and season
  const fetchWeatherData = async (district, season) => {
    if (district && season) {
      const response = await fetch(`http://127.0.0.1:8000/weather/getWeatherData?district=${district}&season=${season}`);
      const data = await response.json();
      
      // Set the fetched weather data, including windspeed
      setFormData((prevData) => ({
        ...prevData,
        temperature: data.average_temperature,
        rainfall: data.average_rainfall,
        sunshine_hours: data.average_sunshine_hours,
        humidity: data.average_humidity,
        wind_speed: data.average_windspeed // Added windspeed data
      }));
  
      // Log fetched data to the console
      console.log('Fetched Data:', data);
    }
  };
  

  // Update the form data on district and season change
  const handleDistrictSeasonChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  useEffect(() => {
    fetchWeatherData(formData.district, formData.season);
  }, [formData.district, formData.season]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Call the backend prediction API
    const response = await fetch('http://127.0.0.1:8000/predict', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();

    // Redirect to the result page with prediction data
    navigate('/result', { state: { predictionResult: result } });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = name === 'soil_phosphorus' && value < 0 ? 0 : value;  // Ensure no negative value for soil_phosphorus
    setFormData((prevData) => ({
      ...prevData,
      [name]: sanitizedValue,
    }));
  };

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* <Navbar /> */}
      <div className="flex pt-40 flex-grow items-center justify-center py-8 px-4 bg-cover bg-center bg-gray-800" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1584773920278-4ada215dbe93?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')` }}>
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }}
          className="bg-black bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-4xl"
        >
          <h1 className="text-4xl font-bold text-white mb-8">Enter Paddy Yield Data</h1>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* District and Season Selectors at the top */}
            <div className="mb-6 col-span-1 md:col-span-2">
              <label htmlFor="district" className="block text-white font-medium mb-2">District:</label>
              <select name="district" id="district" value={formData.district} onChange={handleDistrictSeasonChange} className="mt-1 block w-full p-3 border border-green-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500">
                <option value="">Select District</option>
                {districts.map((district) => (
                  <option key={district} value={district}>{district}</option>
                ))}
              </select>
            </div>
            <div className="mb-6 col-span-1 md:col-span-2">
              <label htmlFor="season" className="block text-white font-medium mb-2">Season:</label>
              <select name="season" id="season" value={formData.season} onChange={handleDistrictSeasonChange} className="mt-1 block w-full p-3 border border-green-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500">
                <option value="">Select Season</option>
                {seasons.map((season) => (
                  <option key={season} value={season}>{season}</option>
                ))}
              </select>
            </div>

            {/* Other form fields */}
            {Object.keys(formData).map((key) => {
  if (key === 'district' || key === 'season') return null; // Skip district and season fields

  let options = [];
  switch (key) {
    case 'soil_type':
      options = soilTypes;
      break;
    case 'irrigation_type':
      options = irrigationTypes;
      break;
    case 'water_source':
      options = waterSources;
      break;
    case 'paddy_variety':
      options = paddyVarieties;
      break;
    case 'pest_severity':
      options = pestSeverities;
      break;
    default:
      options = [];
  }

  return (
    <div key={key} className="mb-6">
      <label htmlFor={key} className="block text-white font-medium mb-2">{key.replace(/_/g, ' ')}:</label>
      {options.length > 0 ? (
        <select name={key} id={key} value={formData[key]} onChange={handleChange} className="mt-1 block w-full p-3 border border-green-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500">
          <option value="">Select {key.replace(/_/g, ' ')}</option>
          {options.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      ) : (
        <input
          type={key === 'area' || key === 'rainfall' || key === 'temperature' || key === 'humidity' || key === 'sunshine_hours' || key === 'wind_speed' || key === 'soil_phosphorus' ? 'number' : 'text'}
          name={key} id={key} value={formData[key]} onChange={handleChange} step="any" className="mt-1 block w-full p-3 border border-green-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" required />
      )}
    </div>
  );
})}

            <button type="submit" className="col-span-1 md:col-span-2 w-full bg-green-600 text-white p-3 rounded-lg shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">Predict Yield</button>
          </form>
        </motion.div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default InputPage;
