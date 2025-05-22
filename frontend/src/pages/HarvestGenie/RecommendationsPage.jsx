import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { jsPDF } from "jspdf";
import "jspdf-autotable";

const RecommendationsPage = () => {
  const [soilRecommendations, setSoilRecommendations] = useState([]);
  const [pestRecommendations, setPestRecommendations] = useState([]);
  const [waterRecommendations, setWaterRecommendations] = useState([]);
  const [districtRecommendations, setDistrictRecommendations] = useState({});
  const [inputData, setInputData] = useState({});
  const sectionRef = useRef(null);

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

  const handleClick = () => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica");
    doc.setTextColor(34, 139, 34);

    doc.setFontSize(22);
    doc.text("Agricultural Recommendations", 20, 20);

    doc.setFontSize(16);
    doc.text("Soil Recommendations", 20, 30);
    const soilData = soilRecommendations.map((rec, index) => [
      index + 1,
      rec.nutrient,
      rec.level,
      rec.detailed_recommendation,
    ]);
    doc.autoTable({
      startY: 35,
      head: [["#", "Nutrient", "Level", "Recommendation"]],
      body: soilData,
      theme: "grid",
      styles: { fillColor: [220, 220, 220] },
      headStyles: { fillColor: [0, 128, 0], textColor: [255, 255, 255] },
    });

    doc.addPage();
    doc.text("Pest Recommendations", 20, 20);
    const pestData = pestRecommendations.map((rec, index) => [
      index + 1,
      rec.pest_severity,
      rec.recommendation,
    ]);
    doc.autoTable({
      startY: 25,
      head: [["#", "Severity", "Recommendation"]],
      body: pestData,
      theme: "grid",
      styles: { fillColor: [220, 220, 220] },
      headStyles: { fillColor: [0, 128, 0], textColor: [255, 255, 255] },
    });

    doc.addPage();
    doc.text("Water Supply Recommendations", 20, 20);
    const waterData = waterRecommendations.map((rec, index) => [
      index + 1,
      rec.rainwater,
      rec.river_water,
      rec.irrigation,
      rec.supply_methods,
    ]);
    doc.autoTable({
      startY: 25,
      head: [["#", "Rainwater", "River Water", "Irrigation", "Supply Methods"]],
      body: waterData,
      theme: "grid",
      styles: { fillColor: [220, 220, 220] },
      headStyles: { fillColor: [0, 128, 0], textColor: [255, 255, 255] },
    });

    doc.addPage();
    doc.text(
      `District Recommendations for ${inputData.district} (${inputData.season})`,
      20,
      20
    );
    const districtData = [
      ["1", districtRecommendations.recommendation_1 || "N/A"],
      ["2", districtRecommendations.recommendation_2 || "N/A"],
      ["3", districtRecommendations.recommendation_3 || "N/A"],
      ["4", districtRecommendations.recommendation_4 || "N/A"],
      ["5", districtRecommendations.recommendation_5 || "N/A"],
      ["6", districtRecommendations.recommendation_6 || "N/A"],
      ["7", districtRecommendations.recommendation_7 || "N/A"],
      ["8", districtRecommendations.recommendation_8 || "N/A"],
      ["9", districtRecommendations.recommendation_9 || "N/A"],
      ["10", districtRecommendations.recommendation_10 || "N/A"],
    ];
    doc.autoTable({
      startY: 25,
      head: [["#", "Recommendation"]],
      body: districtData,
      theme: "grid",
      styles: { fillColor: [220, 220, 220] },
      headStyles: { fillColor: [0, 128, 0], textColor: [255, 255, 255] },
    });

    doc.save("recommendations.pdf");
  };

  return (
    <div className="min-h-screen text-white">
      {/* Hero Section */}
      <div className="relative h-screen flex justify-center items-center">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('https://static.vecteezy.com/system/resources/thumbnails/035/540/306/small_2x/ai-generated-green-rice-fields-in-the-rainy-season-beautiful-natural-scenery-photo.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" /> {/* Changed from 30 to 50 for more opacity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative text-center space-y-6 p-6"
        >
          <motion.h1
            className="text-5xl py-5 font-bold tracking-wide text-white"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
          >
            Tailored Agricultural Recommendations
          </motion.h1>
          <motion.p
            className="text-lg py-2 mx-auto w-4/5 text-gray-200/90 leading-relaxed mt-4"
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
            onClick={handleClick}
            className="bg-yellow-500 text-black py-4 px-8 rounded-lg text-lg font-semibold transition-all duration-300 transform"
          >
            Get Personalized Recommendations
          </motion.button>
        </motion.div>
      </div>

      <div
        ref={sectionRef}
        className="container mx-auto mt-12 p-6 bg-white rounded-lg shadow-lg"
        id="soil-recommendation"
      >
        {/* Soil Recommendations */}
        <section className="mb-16 p-8 bg-green-50 rounded-xl">
          <h2 className="text-4xl font-semibold text-green-700 text-center mb-6">
            Soil Recommendations
          </h2>
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
              <p className="text-gray-500">No soil recommendations available.</p>
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
              <p className="text-gray-500">No pest recommendations available.</p>
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
        <section className="mb-16 lg:flex-row items-center gap-10 bg-gray-100 p-10 rounded-xl">
          <h2 className="text-4xl font-semibold text-green-700 mb-6">
            Water Supply Recommendations
          </h2>
          <div className="">
            <div className="bg-darkblack/0 rounded-lg text-gray-800">
              <p>
                <em>water sources (rainwater, river, irrigation)</em> and{" "}
                <em>supply methods (rainfed, tubewell, canal)</em> impact paddy
                cultivation in Sri Lanka's districts, the following
                comprehensive details can be provided for each district.
              </p>
              <div className="flex flex-row gap-10 mt-10">
                <motion.img
                  src="https://png.pngtree.com/thumb_back/fw800/background/20240716/pngtree-water-flows-out-of-the-pipes-into-green-rice-fields-image_16007479.jpg"
                  alt="Water Recommendations"
                  className="w-1/2 shadow-2xl rounded-lg"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                />
                <div className="w-1/2 shadow-2xl p-10 bg-primary/10 rounded-xl min-h-[400px] flex-1">
                  <h2 className="text-2xl font-semibold italic text-primary mb-6 relative flex">
                    Water Supply Recommendations
                    <span className="block text-2xl font-bold text-darkyellow ms-2">
                      For You
                    </span>
                  </h2>
                  {waterRecommendations.length > 0 ? (
                    waterRecommendations.map((rec, index) => (
                      <div
                        key={index}
                        className="text-gray-800 bg-white rounded-lg mb-4 p-4 shadow-sm border border-primary/30"
                      >
                        <ul className="list-disc pl-6 space-y-3">
                          <li className="leading-relaxed">
                            <span className="font-semibold">Rainwater:</span>{" "}
                            {rec.rainwater}
                          </li>
                          <li className="leading-relaxed">
                            <span className="font-semibold">River Water:</span>{" "}
                            {rec.river_water}
                          </li>
                          <li className="leading-relaxed">
                            <span className="font-semibold">Irrigation:</span>{" "}
                            {rec.irrigation}
                          </li>
                          <li className="leading-relaxed">
                            <span className="font-semibold">Supply Methods:</span>{" "}
                            {rec.supply_methods}
                          </li>
                        </ul>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500 text-center">
                      No water recommendations available.
                    </p>
                  )}
                </div>
              </div>
              <div className="flex gap-10">
                <div className="bg-gray-100 my-10 rounded-lg shadow-2xl p-5 min-h-[400px] flex-1">
                  <h3 className="text-3xl text-darkgreen text-shadow mt-8 mb-4 text-center">
                    General Impact of Water Sources
                  </h3>
                  <ul className="list-disc list-inside ml-6 mb-6">
                    <li className="mb-2">
                      <strong>Rainwater:</strong>
                      <ul className="list-disc list-inside ml-6">
                        <ol>Relies on seasonal rainfall patterns.</ol>
                        <ol>
                          Requires good water-holding soil (clayey or loamy).
                        </ol>
                        <ol>
                          May lead to water shortages during dry spells (Yala).
                        </ol>
                      </ul>
                    </li>
                    <li className="mb-2">
                      <strong>River Water:</strong>
                      <ul className="list-disc list-inside ml-6">
                        <ol>
                          Provides a consistent and reliable water source if
                          managed properly.
                        </ol>
                        <ol>
                          Best suited for regions with access to perennial
                          rivers.
                        </ol>
                      </ul>
                    </li>
                    <li className="mb-2">
                      <strong>Irrigation Supply:</strong>
                      <ul className="list-disc list-inside ml-6">
                        <ol>Offers flexibility in water management.</ol>
                        <ol>
                          Includes systems like canals, tubewells, and tanks.
                        </ol>
                        <ol>
                          Reduces dependency on rainfall, ensuring crop
                          security.
                        </ol>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="bg-gray-100 my-10 rounded-lg shadow-2xl p-5 min-h-[400px] flex-1">
                  <h3 className="text-3xl text-darkgreen text-shadow mt-8 mb-4 text-center">
                    General Impact of Water Supply Methods
                  </h3>
                  <ul className="list-disc list-inside ml-6">
                    <li className="mb-2">
                      <strong>Rainfed:</strong>
                      <ul className="list-disc list-inside ml-6">
                        <ol>
                          Highly dependent on monsoon timing and intensity.
                        </ol>
                        <ol>Suited for Maha season with adequate rainfall.</ol>
                        <ol>
                          Risk of crop failure during erratic or insufficient
                          rains.
                        </ol>
                      </ul>
                    </li>
                    <li className="mb-2">
                      <strong>Tubewell:</strong>
                      <ul className="list-disc list-inside ml-6">
                        <ol>Provides controlled and reliable water supply.</ol>
                        <ol>
                          Effective for water-scarce districts with good
                          groundwater availability.
                        </ol>
                        <ol>May lead to soil salinity if overused.</ol>
                      </ul>
                    </li>
                    <li className="mb-2">
                      <strong>Canal:</strong>
                      <ul className="list-disc list-inside ml-6">
                        <ol>Efficient for large-scale irrigation systems.</ol>
                        <ol>
                          Requires proper maintenance to prevent water loss.
                        </ol>
                        <ol>
                          Works best in districts with established irrigation
                          infrastructure.
                        </ol>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* District Recommendations */}
        <section>
          <h2 className="text-4xl font-semibold text-green-700 text-center mb-6">
            District Recommendations for {inputData.district} (
            {inputData.season})
          </h2>
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
      <div className="p-6 bg-green-100 flex justify-center">
        <button
          onClick={generatePDF}
          className="mt-4 bg-green-500 text-white px-40 py-2 rounded shadow-lg hover:bg-green-600"
        >
          Download PDF
        </button>
      </div>
      <div className="flex justify-end">
        <h2 className="text-darkgreen text-xl py-4 pe-10">
          <a href="/new-farmer">Are you a New Farmer?</a>
        </h2>
      </div>
    </div>
  );
};

export default RecommendationsPage;