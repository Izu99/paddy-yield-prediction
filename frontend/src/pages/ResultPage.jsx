import React, { useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { predictionResult } = location.state || {}; // Get the prediction result from the state

  const [previousYield, setPreviousYield] = useState("");
  const [comparisonResult, setComparisonResult] = useState("");

  // Handle input for previous yield per hectare
  const handlePreviousYieldChange = (e) => {
    setPreviousYield(e.target.value);
  };

  // Handle the comparison logic
  const handleCompare = () => {
    const previousYieldPerHectare = parseFloat(previousYield);
    if (isNaN(previousYieldPerHectare) || previousYieldPerHectare <= 0) {
      setComparisonResult("Please enter a valid previous yield per hectare.");
      return;
    }

    const predictedYieldPerHectare =
      predictionResult.predicted_yield_per_hectare;
    if (predictedYieldPerHectare > previousYieldPerHectare) {
      setComparisonResult("Predicted yield is higher than previous yield");
    } else if (predictedYieldPerHectare < previousYieldPerHectare) {
      setComparisonResult("Predicted yield is lower than previous yield");
    } else {
      setComparisonResult("Predicted yield is the same as the previous yield");
    }
  };

  // Handle navigation to Recommendations page
  const handleRecommendations = () => {
    navigate("/recommendations");
  };
  return (
    <div
      className="min-h-screen relative"
      style={{
        backgroundImage:
          "url('https://lh3.googleusercontent.com/HQ9WPPhQdBRcJ3jh-cQiYeNXFxLjV3SSERuc5Qf81tDOx37dWD4JRzDGuIO45QE8j6hy98aOHWVMfcxT2N-EgjsHuLSq5g7uvGIQ2pr1R1D0RScdB_hPeEiR9ABpvaezlxLDa2xwBuYs3H_lP83S5iQ')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 container mx-auto px-4 py-16"
      >
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="bg-black/80 rounded-3xl shadow-2xl overflow-hidden border border-primary/20"
            whileHover={{
              boxShadow: "0 25px 50px -12px rgba(54, 168, 54, 0.25)",
            }}
          >
            <div className="p-8 sm:p-12">
              <h1 className="text-5xl font-bold bg-gradient-to-r from-primary to-darkyellow bg-clip-text text-transparent mb-12">
                Prediction Results
              </h1>

              {predictionResult ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-darkblack/40 p-6 rounded-2xl border border-primary/30"
                    >
                      <p className="text-primary/80 mb-2">
                        Total Predicted Yield
                      </p>
                      <p className="text-3xl font-bold text-white">
                        {predictionResult.total_predicted_yield.toFixed(2)} kg
                      </p>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="bg-darkblack/40 p-6 rounded-2xl border border-primary/30"
                    >
                      <p className="text-primary/80 mb-2">Yield per Hectare</p>
                      <p className="text-3xl font-bold text-white">
                        {predictionResult.predicted_yield_per_hectare.toFixed(
                          2
                        )}{" "}
                        kg
                      </p>
                    </motion.div>
                  </div>

                  <div className="bg-darkblack/30 p-8 rounded-2xl space-y-6">
                    <p className="text-lg text-white">
                      Previous Yield per Hectare:
                    </p>
                    <div className="flex gap-4">
                      <input
                        type="number"
                        value={previousYield}
                        onChange={handlePreviousYieldChange}
                        className="flex-1 bg-darkblack/50 border-2 border-primary/50 text-white rounded-xl px-4 py-3 
                        focus:border-darkyellow focus:ring-2 focus:ring-darkyellow/50 transition-all
                        outline-none"
                        placeholder="Enter previous yield..."
                      />
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleCompare}
                        className="bg-primary hover:bg-darkyellow text-white px-8 py-3 rounded-xl
                        font-semibold transition-colors duration-300 shadow-lg"
                      >
                        Compare
                      </motion.button>
                    </div>

                    {comparisonResult && (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`text-xl font-semibold ${
                          comparisonResult.includes("higher")
                            ? "text-primary"
                            : "text-red-800"
                        }`}
                      >
                        {comparisonResult}
                      </motion.p>
                    )}
                  </div>                 
                  <div className="flex justify-center items-center gap-4 mt-12">
                    <a href="/" className="inline-block border border-darkgreen bg-darkblack/50 hover:bg-primary/80 text-white px-8 py-3 rounded-xl">
                      ← Back to Input Page
                    </a>
                    <a href="/recommendations" onClick={handleRecommendations} className="bg-darkgreen hover:bg-primary text-white px-8 py-3 rounded-xl">
                      Get Recommendations →
                    </a>
                  </div>
                </motion.div>
              ) : null}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ResultPage;
