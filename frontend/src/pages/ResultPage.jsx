import React, { useState } from 'react'; // Import useState from React
import { useLocation, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ResultPage = () => {
  const location = useLocation();
  const { predictionResult } = location.state || {}; // Get the prediction result from the state

  const [previousYield, setPreviousYield] = useState('');
  const [comparisonResult, setComparisonResult] = useState('');

  // Handle input for previous yield per hectare
  const handlePreviousYieldChange = (e) => {
    setPreviousYield(e.target.value);
  };

  // Handle the comparison logic
  const handleCompare = () => {
    const previousYieldPerHectare = parseFloat(previousYield);
    if (isNaN(previousYieldPerHectare) || previousYieldPerHectare <= 0) {
      setComparisonResult('Please enter a valid previous yield per hectare.');
      return;
    }

    const predictedYieldPerHectare = predictionResult.predicted_yield_per_hectare;
    if (predictedYieldPerHectare > previousYieldPerHectare) {
      setComparisonResult('Predicted yield is higher than previous yield');
    } else if (predictedYieldPerHectare < previousYieldPerHectare) {
      setComparisonResult('Predicted yield is lower than previous yield');
    } else {
      setComparisonResult('Predicted yield is the same as the previous yield');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-8 px-4" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1692366727566-ba9b0a2c76a0?q=80&w=1542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, backgroundSize: 'cover' }}>
      <Navbar />
      <div className="bg-black bg-opacity-80 p-8 rounded-lg shadow-2xl w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-8">Prediction Results</h1>
        {predictionResult ? (
          <div className="p-8 rounded-lg w-full max-w-2xl">
            <p className="text-xl mb-4 text-white">
              Total Predicted Yield: {predictionResult.total_predicted_yield.toFixed(2)} kg
            </p>
            <p className="text-xl mb-4 text-white">
              Predicted Yield per Hectare: {predictionResult.predicted_yield_per_hectare.toFixed(2)} kg
            </p>
            <p className="text-xl mb-4 text-white">
              Previous Yield per Hectare:
              <input
                type="number"
                value={previousYield}
                onChange={handlePreviousYieldChange}
                className="ml-2 p-2 rounded-md bordery text-md border-gray-300 text-gray-800"
                placeholder="Enter previous yield per hectare"
              />
            </p>
            <button
              onClick={handleCompare}
              className="mt-4 py-2 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
            >
              Compare Yield
            </button>

            {comparisonResult && (
              <p
                className={`mt-4 text-2xl font-bold ${
                  comparisonResult.includes('higher') ? 'text-green-500' : 'text-red-600'
                }`}
              >
                {comparisonResult}
              </p>
            )}
          </div>
        ) : (
          <p className="text-xl text-red-600">No prediction result found</p>
        )}
        <Link to="/" className="mt-8 text-white hover:underline">Go back to input page</Link>
      </div>
      <Footer />
    </div>
  );
};

export default ResultPage;
