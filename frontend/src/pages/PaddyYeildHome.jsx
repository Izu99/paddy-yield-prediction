import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const PaddyYieldHome = () => {
  const navigate = useNavigate();
  const [navbarHeight, setNavbarHeight] = useState(0);

  const cultivationDetails = [
    {
      title: "Field Preparation",
      description:
        "Ensure healthy growth with optimized soil health and irrigation.",
      image:
        "https://www.apnnews.com/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-31-at-3.19.55-PM.jpeg",
      link: "/field-preparation",
    },
    {
      title: "Seed Selection",
      description:
        "Choose high-quality seeds to maximize yield and crop health.",
      image:
        "https://static-01.daraz.lk/p/e475090e5e77c046ce2e754d6f3e5fce.jpg",
      link: "/seed-selection",
    },
    {
      title: "Crop Nurturing",
      description: "Monitor growth and adjust care for optimal results.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFEyhSBwvtqd5SnBUnpVare4l_DhGVyJOog&s",
      link: "/crop-nurturing",
    },
    {
      title: "Pest Control",
      description: "Implement strategies to manage pests effectively.",
      image:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhAlTh9ihdvB_UUB2_UHdincLl9xeu9CJYoLCxE9Yqvdo-I-A5Jl27VA7H-PbeU3cL5rgZXhdGq8hzuBk_PV_er2WPMTAIMFVcWTMUlWyRVxokcmo9gumMJVWWzn2JoJ1JCpkEMfA8A2Lc/s1600/4.jpg",
      link: "/pest-control",
    },
    {
      title: "Irrigation Management",
      description: "Plan efficient water usage to ensure consistent growth.",
      image: "https://www.iepsl.lk/wp-content/uploads/2023/09/R.jpg",
      link: "/irrigation-management",
    },
    {
      title: "Harvest Planning",
      description: "Plan harvests confidently with data-driven forecasts.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTN8r4kFT1s1oEQ-Mu41UZTVfE2hdRbSc5TxQ&s",
      link: "/harvest-planning",
    },
  ];

  useEffect(() => {
    const updateNavbarHeight = () => {
      const navbar = document.getElementById("navbar");
      if (navbar) {
        setNavbarHeight(navbar.offsetHeight);
      }
    };

    updateNavbarHeight();
    window.addEventListener("resize", updateNavbarHeight);

    return () => window.removeEventListener("resize", updateNavbarHeight);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div
        className="relative"
        style={{ height: `calc(100vh - ${navbarHeight}px)` }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('https://img.freepik.com/premium-photo/sunset-rice-field-with-tree-background_865967-1065935.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 bg-gradient-to-b from-white/10 to-black/90" />
        <div className="relative mx-auto px-4 sm:px-6 lg:py-16 flex flex-col h-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center m-auto space-y-6"
          >
            <h1 className="text-7xl font-bold text-white text-shadow-lg">
              Welcome to Rice Genie
            </h1>
            <p className="text-xl w-4/5 mx-auto text-gray-100/90 leading-relaxed mt-4">
              Empowering Sri Lankan farmers with advanced tools and sustainable
              practices to ensure a prosperous future for the rice industry.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/harvest-prediction")}
              className="bg-darkgreen text-white capitalize py-4 px-8 rounded-xl text-lg font-bold shadow-lg transition-all duration-300"
            >
              Start Harvest Prediction
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* History Section */}
      <div className="py-24">
        <h2 className="text-4xl text-center font-bold text-darkgreen p-10 bg-darkgreen/5">
          The Evolution of Paddy Cultivation in Sri Lanka
        </h2>
        <div className="grid max-w-7xl mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-8 rounded-2xl border border-green-700/20 shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-green-700 mb-4 text-shadow">
              Ancient Cultivation Legacy
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Sri Lanka's paddy cultivation history dates back to 543 BC, with
              the arrival of Prince Vijaya. The ancient irrigation systems,
              including tanks and canals, showcase our ancestors' engineering
              brilliance in water management and sustainable farming practices.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="p-8 rounded-2xl border border-green-700/20 shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-green-700 mb-4 text-shadow">
              Modern Agricultural Evolution
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Today, Sri Lanka combines traditional wisdom with modern
              technology, utilizing advanced farming techniques, improved seed
              varieties, and precision agriculture. This fusion ensures
              sustainable rice production while preserving our cultural
              heritage.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="p-8 rounded-2xl border border-green-700/20 shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-green-700 mb-4 text-shadow">
              Traditional Farming Methods
            </h3>
            <p className="text-gray-700 leading-relaxed">
              In Sri Lanka, traditional farming practices such as organic
              farming and the use of indigenous tools continue to play an
              important role in ensuring food security while promoting
              biodiversity and environmental sustainability.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="p-8 rounded-2xl border border-green-700/20 shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-green-700 mb-4 text-shadow">
              Future of Paddy Farming
            </h3>
            <p className="text-gray-700 leading-relaxed">
              The future of paddy farming in Sri Lanka involves embracing
              technology, climate-smart agriculture, and resilient farming
              systems. Innovations like AI, IoT, and data-driven decision-making
              promise to revolutionize the sector for improved yields and
              sustainability.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Paddy Cultivation Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center space-y-6 mb-12"
          >
            <h2 className="text-4xl font-semibold text-green-700">
              Paddy Cultivation - Key Insights
            </h2>
            <p className="text-lg text-gray-700">
              Preparing your fields, nurturing crops, and planning for harvest
              is an art. Rice Genie helps you make these steps smarter.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {cultivationDetails.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl border border-green-700/20 shadow-lg hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={card.image}
                  alt={card.title}
                  className="rounded-lg mb-4 h-48 w-full object-cover"
                />
                <h3 className="text-2xl font-semibold text-green-700 text-center mb-4">
                  {card.title}
                </h3>
                <p className="text-lg text-gray-700 text-center mb-6">
                  {card.description}
                </p>
                <div className="flex justify-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate(card.link)}
                    className="bg-green-700 hover:bg-green-800 text-white capitalize py-2 px-8 rounded-lg text-sm font-bold shadow-md transition-all duration-300"
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaddyYieldHome;
