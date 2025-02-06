import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const steps = [
  {
    id: 1,
    title: "1. Site Selection",
    content: `Choose a flat or gently sloping land near a water source. Ensure the soil is fertile and has good water retention (loamy or clayey soils are ideal).`,
  },
  {
    id: 2,
    title: "2. Land Preparation",
    content: `Clear the field of debris, weeds, or stones. Plow the soil to a depth of 15–20 cm and puddle the field to create a soft, muddy bed. Build bunds and drainage channels to manage water.`,
  },
  {
    id: 3,
    title: "3. Seed Selection and Treatment",
    content: `Select certified seed varieties (e.g., BG 250 or BG 360). Soak seeds in water for 12–24 hours and treat them with fungicides or bio-control agents to protect against diseases.`,
  },
  {
    id: 4,
    title: "4. Sowing",
    content: `For direct seeding, broadcast pre-soaked seeds evenly. For transplanting, grow seedlings in a nursery for 20–25 days and transplant 2–3 seedlings per hill with 15 x 15 cm spacing.`,
  },
  {
    id: 5,
    title: "5. Water Management",
    content: `Maintain 2–5 cm of standing water during the vegetative stage. Use Alternate Wetting and Drying (AWD) to conserve water. Drain the field during the ripening stage.`,
  },
  {
    id: 6,
    title: "6. Fertilizer Application",
    content: `Apply phosphorus (DAP) and potassium (MOP) during field preparation. Use nitrogen (urea) in split doses at tillering, panicle initiation, and flowering stages. Incorporate organic fertilizers like compost.`,
  },
  {
    id: 7,
    title: "7. Weed Management",
    content: `Remove weeds manually at 20 and 40 days after sowing. Use pre-emergent herbicides like butachlor or post-emergent ones for effective weed control.`,
  },
  {
    id: 8,
    title: "8. Pest and Disease Management",
    content: `Monitor pests like brown planthoppers or stem borers weekly. Use neem-based biopesticides or targeted chemical pesticides when necessary. Prevent fungal diseases with proper drainage and resistant varieties.`,
  },
  {
    id: 9,
    title: "9. Harvesting",
    content: `Harvest when 80–85% of the grains turn golden yellow. Ensure grains have 20–22% moisture during harvest. Thresh and sun-dry grains to 14% moisture for storage.`,
  },
  {
    id: 10,
    title: "10. Post-Harvest Practices",
    content: `Store grains in clean, dry, and pest-free facilities. Use milling equipment to separate husk and bran layers for market-ready rice.`,
  },
];

const NewFarmerGuide = () => {
  const [expandedStep, setExpandedStep] = useState(null);

  const toggleStep = (id) => {
    setExpandedStep(expandedStep === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-green-50 flex flex-col items-center py-12 px-4">
      <h1 className="text-4xl font-bold text-green-700 mb-8 text-center">
        Step-by-Step Guide to Paddy Cultivation
      </h1>

      <div className="w-full max-w-4xl space-y-4">
        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <motion.div
              className="p-6 cursor-pointer flex justify-between items-center"
              onClick={() => toggleStep(step.id)}
              whileHover={{ backgroundColor: "#f0fdf4" }}
            >
              <h2 className="text-xl font-semibold text-green-700">
                {step.title}
              </h2>
              <motion.div
                animate={{ rotate: expandedStep === step.id ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </motion.div>
            </motion.div>

            <AnimatePresence>
              {expandedStep === step.id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6 text-gray-700"
                >
                  <p>{step.content}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewFarmerGuide;