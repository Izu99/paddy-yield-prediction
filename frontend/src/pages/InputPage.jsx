import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const InputPage = () => {
  const [formData, setFormData] = useState({
    area: '',
    rainfall: '',
    temperature: '',
    humidity: '',
    sunshine_hours: '',
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
    season: '',
    district: '',
    previous_yield_per_hectare: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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

  return (
    <div className="min-h-screen flex flex-col justify-between">
      {/* <Navbar /> */}
      <div className="flex pt-40 flex-grow items-center justify-center py-8 px-4" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1584773920278-4ada215dbe93?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, backgroundSize: 'cover' }}>
        <div className="bg-black bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-8">Enter Paddy Yield Data</h1>
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.keys(formData).map((key) => (
              <div key={key} className="mb-6">
                <label htmlFor={key} className="block text-white font-medium mb-2">{key.replace(/_/g, ' ')}:</label>
                {key === 'soil_type' || key === 'irrigation_type' || key === 'water_source' || key === 'paddy_variety' || key === 'pest_severity' || key === 'season' || key === 'district' ? (
                  <select name={key} id={key} value={formData[key]} onChange={handleChange} className="mt-1 block w-full p-3 border border-green-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500">
                    <option value="">Select {key.replace(/_/g, ' ')}</option>
                    {key === 'soil_type' && <>
                      <option value="Loam">Loam</option>
                      <option value="Sandy">Sandy</option>
                      <option value="Clay">Clay</option>
                    </>}
                    {key === 'irrigation_type' && <>
                      <option value="Rainfed">Rainfed</option>
                      <option value="Canal">Canal</option>
                      <option value="Tube Well">Tube Well</option>
                    </>}
                    {key === 'water_source' && <>
                      <option value="Well">Well</option>
                      <option value="River">River</option>
                      <option value="Rainwater">Rainwater</option>
                    </>}
                    {key === 'paddy_variety' && <>
                      <option value="BG 450">BG 450</option>
                      <option value="BG 250">BG 250</option>
                      <option value="BG 350">BG 350</option>
                      <option value="BG 360">BG 360</option>
                    </>}
                    {key === 'pest_severity' && <>
                      <option value="Low">Low</option>
                      <option value="Medium">Medium</option>
                      <option value="High">High</option>
                    </>}
                    {key === 'season' && <>
                      <option value="Maha">Maha</option>
                      <option value="Yala">Yala</option>
                    </>}
                    {key === 'district' && <>
                      <option value="Kandy">Kandy</option>
                      <option value="Colombo">Colombo</option>
                      <option value="Galle">Galle</option>
                    </>}
                  </select>
                ) : (
                  <input type={key === 'area' || key === 'rainfall' || key === 'temperature' || key === 'humidity' || key === 'sunshine_hours' || key === 'wind_speed' || key === 'fertilizer_usage' || key === 'soil_nitrogen' || key === 'soil_phosphorus' || key === 'soil_potassium' || key === 'previous_yield_per_hectare' ? 'number' : 'text'}
                    name={key} id={key} value={formData[key]} onChange={handleChange} step="any" className="mt-1 block w-full p-3 border border-green-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500" required />
                )}
              </div>
            ))}
            <button type="submit" className="col-span-1 md:col-span-2 w-full bg-green-600 text-white p-3 rounded-lg shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">Predict Yield</button>
          </form>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default InputPage;
