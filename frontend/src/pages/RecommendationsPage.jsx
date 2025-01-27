import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const RecommendationsPage = () => {
  const [soilRecommendations, setSoilRecommendations] = useState([]);
  const [pestRecommendations, setPestRecommendations] = useState([]);
  const [waterRecommendations, setWaterRecommendations] = useState([]);
  const [districtRecommendations, setDistrictRecommendations] = useState({});
  const [inputData, setInputData] = useState({});

  useEffect(() => {
    const savedSoilRecommendations = JSON.parse(
      sessionStorage.getItem("soilRecommendations")
    );
    const savedPestRecommendations = JSON.parse(
      sessionStorage.getItem("pestRecommendations")
    );
    const savedWaterRecommendations = JSON.parse(
      sessionStorage.getItem("waterRecommendations")
    );
    const savedDistrictRecommendations = JSON.parse(
      sessionStorage.getItem("districtRecommendations")
    );
    const savedInputData = JSON.parse(sessionStorage.getItem("essentialData"));

    if (savedSoilRecommendations)
      setSoilRecommendations(savedSoilRecommendations);
    if (savedPestRecommendations)
      setPestRecommendations(savedPestRecommendations);
    if (savedWaterRecommendations)
      setWaterRecommendations(savedWaterRecommendations);
    if (savedDistrictRecommendations)
      setDistrictRecommendations(savedDistrictRecommendations);
    if (savedInputData) setInputData(savedInputData);
  }, []);

  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <div className="relative h-screen flex justify-center items-center ">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed "
          style={{
            backgroundImage: `url('https://static.vecteezy.com/system/resources/thumbnails/035/540/306/small_2x/ai-generated-green-rice-fields-in-the-rainy-season-beautiful-natural-scenery-photo.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 bg-gradient-to-b from-white/10 to-black/90" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-center space-y-6 p-6"
        >
          <motion.h1
            className="text-5xl font-bold tracking-wide text-white"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
          >
            Tailored Agricultural Recommendations
          </motion.h1>
          <motion.p
            className="text-lg mx-auto w-4/5 text-gray-200/90 leading-relaxed mt-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Unlock insights to improve soil health, manage pests, and optimize
            water usage. Our region-specific recommendations empower you to make
            informed decisions, boosting your harvest for a sustainable future.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => console.log("Button Clicked!")}
            className="bg-yellow-500 text-black py-4 px-8 rounded-lg text-lg font-semibold transition-all duration-300 transform"
          >
            Get Personalized Recommendations
          </motion.button>
        </motion.div>
      </div>

      <div className="container mx-auto mt-12 p-6 bg-white rounded-lg shadow-lg">
        {/* Soil Recommendations */}
        <section className="mb-16 p-8 bg-green-50 rounded-xl">
          <h2 className="text-4xl font-semibold text-green-700 text-center mb-6">
            Soil Recommendations
          </h2>
          <motion.img
            src="https://images.pexels.com/photos/18620459/pexels-photo-18620459.jpeg"
            alt="Soil Recommendations"
            className="w-full max-w-3xl mx-auto rounded-lg shadow-xl mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
          <div className="space-y-6">
            {soilRecommendations.length > 0 ? (
              soilRecommendations.map((rec, index) => (
                <div
                  key={index}
                  className="p-6 rounded-lg bg-white shadow-md border-l-4 border-green-500"
                >
                  <h3 className="text-xl font-semibold text-green-700">
                    {rec.nutrient} - {rec.level}
                  </h3>
                  <p className="text-gray-700 mt-2">
                    {rec.detailed_recommendation}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-gray-500">
                No soil recommendations available.
              </p>
            )}
          </div>
        </section>

        {/* Pest Recommendations */}
        <section className="mb-16 flex flex-col-reverse lg:flex-row items-center gap-10 bg-gray-100 p-10 rounded-xl">
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-semibold text-green-700 mb-6">
              Pest Recommendations ({inputData.pest_severity})
            </h2>
            {pestRecommendations.length > 0 ? (
              <ul className="list-disc pl-6">
                {pestRecommendations.map((rec, index) => (
                  <li key={index} className="m-2 text-gray-700">
                    <p>{rec.recommendation}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">
                No pest recommendations available.
              </p>
            )}
          </div>
          <motion.img
            src="https://thumbs.dreamstime.com/b/farmer-spraying-pesticide-rice-field-protect-pest-64897815.jpg"
            alt="Pest Recommendations"
            className="lg:w-1/2 w-full rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
        </section>

        {/* Water Recommendations */}
        <section className="mb-16 flex flex-col items-center gap-10">
          <div className="w-full">
            <h2 className="text-4xl font-semibold text-primary text-shadow mb-6">
              Water Supply Recommendations
            </h2>
            <div className="p-8 bg-darkblack/0 rounded-lg text-gray-800">
              <p>
                <em>water sources (rainwater, river, irrigation)</em> and{" "}
                <em>supply methods (rainfed, tubewell, canal)</em> impact paddy
                cultivation in Sri Lanka's districts, the following
                comprehensive details can be provided for each district.
              </p>
              <div className="flex gap-4">
                <div className="bg-gray-100 my-10 rounded-lg shadow-2xl p-5">
                  <h3 className="text-3xl text-darkgreen text-shadow mt-8 mb-4 text-center">
                    General Impact of Water Sources
                  </h3>
                  <ul className="list-disc list-inside ml-6 mb-6">
                    <li className="mb-2">
                      <strong>Rainwater:</strong>
                      <ul className="list-disc list-inside ml-6">
                        <li>Relies on seasonal rainfall patterns.</li>
                        <li>
                          Requires good water-holding soil (clayey or loamy).
                        </li>
                        <li>
                          May lead to water shortages during dry spells (Yala).
                        </li>
                      </ul>
                    </li>
                    <li className="mb-2">
                      <strong>River Water:</strong>
                      <ul className="list-disc list-inside ml-6">
                        <li>
                          Provides a consistent and reliable water source if
                          managed properly.
                        </li>
                        <li>
                          Best suited for regions with access to perennial
                          rivers.
                        </li>
                      </ul>
                    </li>
                    <li className="mb-2">
                      <strong>Irrigation Supply:</strong>
                      <ul className="list-disc list-inside ml-6">
                        <li>Offers flexibility in water management.</li>
                        <li>
                          Includes systems like canals, tubewells, and tanks.
                        </li>
                        <li>
                          Reduces dependency on rainfall, ensuring crop
                          security.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-100 my-10 rounded-lg shadow-2xl p-5">
                  <h3 className="text-3xl text-darkgreen text-shadow mt-8 mb-4 text-center">
                    General Impact of Water Supply Methods
                  </h3>
                  <ul className="list-disc list-inside ml-6">
                    <li className="mb-2">
                      <strong>Rainfed:</strong>
                      <ul className="list-disc list-inside ml-6">
                        <li>
                          Highly dependent on monsoon timing and intensity.
                        </li>
                        <li>Suited for Maha season with adequate rainfall.</li>
                        <li>
                          Risk of crop failure during erratic or insufficient
                          rains.
                        </li>
                      </ul>
                    </li>
                    <li className="mb-2">
                      <strong>Tubewell:</strong>
                      <ul className="list-disc list-inside ml-6">
                        <li>Provides controlled and reliable water supply.</li>
                        <li>
                          Effective for water-scarce districts with good
                          groundwater availability.
                        </li>
                        <li>May lead to soil salinity if overused.</li>
                      </ul>
                    </li>
                    <li className="mb-2">
                      <strong>Canal:</strong>
                      <ul className="list-disc list-inside ml-6">
                        <li>Efficient for large-scale irrigation systems.</li>
                        <li>
                          Requires proper maintenance to prevent water loss.
                        </li>
                        <li>
                          Works best in districts with established irrigation
                          infrastructure.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row gap-10 mt-10">
            <motion.img
              src="https://png.pngtree.com/thumb_back/fw800/background/20240716/pngtree-water-flows-out-of-the-pipes-into-green-rice-fields-image_16007479.jpg"
              alt="Water Recommendations"
              className="w-1/2 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            />
            <div className="w-1/2 shadow-2xl p-10">
              <h2 className="text-2xl font-semibold text-primary mb-1">
                Water Supply Recommendations For You
              </h2>
              {waterRecommendations.length > 0 ? (
                waterRecommendations.map((rec, index) => (
                  <div
                    key={index}
                    className="text-gray-800 rounded-lg mb-4"
                  >
                    <p className="py-3">
                      <span className="font-semibold"> Rainwater: </span>
                      {rec.rainwater}
                    </p>
                    <p className="py-3">
                      <span className="font-semibold"> River Water: </span>
                      {rec.river_water}
                    </p>
                    <p className="py-3">
                      <span className="font-semibold"> Irrigation:</span>{" "}
                      {rec.irrigation}
                    </p>
                    <p className="py-3">
                      <span className="font-semibold">Supply Methods:</span>{" "}
                      {rec.supply_methods}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500 text-center">
                  No water recommendations available.
                </p>
              )}
            </div>
          </div>
        </section>

        {/* District Recommendations */}
        <section>
          <h2 className="text-4xl font-semibold text-green-700 text-center mb-6">
            District Recommendations for {inputData.district} (
            {inputData.season})
          </h2>
          <motion.img
            src="https://ipad.fas.usda.gov/countrysummary/images/CE/cropprod/SriLanka_Rice.png"
            alt="District Recommendations"
            className="w-96 h-auto rounded-lg shadow-lg mb-6 mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
          {districtRecommendations ? (
            Object.keys(districtRecommendations).map(
              (key, index) =>
                key.startsWith("recommendation") && (
                  <div
                    key={index}
                    className="p-6 mb-4 bg-gray-200 rounded-lg shadow-md"
                  >
                    <p className="text-gray-800">
                      {districtRecommendations[key]}
                    </p>
                  </div>
                )
            )
          ) : (
            <p className="text-gray-500 text-center">
              No district recommendations available.
            </p>
          )}
        </section>
      </div>
    </div>
  );
};

export default RecommendationsPage;
