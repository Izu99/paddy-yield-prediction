import { useLocation, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ResultPage = () => {
  const location = useLocation();
  const { predictionResult } = location.state || {}; // Get the prediction result from the state

  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-8 px-4" style={{ backgroundImage: `url('https://images.unsplash.com/photo-1692366727566-ba9b0a2c76a0?q=80&w=1542&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, backgroundSize: 'cover' }}>
        <Navbar />
      <div className="bg-black bg-opacity-80 p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="text-4xl font-bold text-white mb-8">Prediction Results</h1>
        {predictionResult ? (
          <div className=" p-8 rounded-lg shadow-lg w-full max-w-2xl">
            <p className="text-xl mb-4 text-white">Total Predicted Yield: {predictionResult.total_predicted_yield.toFixed(2)} kg</p>
            <p className="text-xl mb-4 text-white">Predicted Yield per Hectare: {predictionResult.predicted_yield_per_hectare.toFixed(2)} kg</p>
            <h3 className="text-2xl font-semibold mt-4 text-white">Recommendations:</h3>
            <ul className="list-disc list-inside mt-2 text-white">
              {predictionResult.recommendations.map((rec, index) => (
                <li key={index} className="text-lg">{rec}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-xl text-red-600">No prediction result found</p>
        )}
        <Link to="/" className="mt-8 text-white hover:underline">Back to Home</Link>
      </div>
      <Footer />
    </div>
  );
};

export default ResultPage;
