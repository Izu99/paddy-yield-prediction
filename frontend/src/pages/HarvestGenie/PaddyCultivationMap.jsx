import React, { useState, useEffect, useRef } from "react";
import { parse, stringify } from "svgson";
import SriLankaMap from "../../assets/lk.svg";

const districtPaddyData = {
  LK53: { name: "Trincomalee - ත්‍රිකුණාමළය", harvest: 4500 },
  LK45: { name: "Mulativ - මුලතිව්", harvest: 4700 },
  LK41: { name: "Jaffna - යාපනය", harvest: 4300 },
  LK42: { name: "Kilinochchi - කිලිනොච්චිය", harvest: 4800 },
  LK43: { name: "Mannar - මන්නාරම", harvest: 4600 },
  LK62: { name: "Puttalam - පුත්තලම", harvest: 4400 },
  LK12: { name: "Gampaha - ගම්පහ", harvest: 5000 },
  LK11: { name: "Colombo - කොළඹ", harvest: 5200 },
  LK13: { name: "Kalutara - කළුතර", harvest: 5100 },
  LK31: { name: "Galle - ගාල්ල", harvest: 5300 },
  LK32: { name: "Matara - මාතර", harvest: 5400 },
  LK33: { name: "Hambantota - හම්බන්තොට", harvest: 5500 },
  LK52: { name: "Ampara - අම්පාර", harvest: 5600 },
  LK51: { name: "Batticaloa - මඩකලපුව", harvest: 5700 },
  LK91: { name: "Ratnapura - රත්නපුර", harvest: 5800 },
  LK82: { name: "Monaragala - මොනරාගල", harvest: 5900 },
  LK92: { name: "Kegalle - කෑගල්ල", harvest: 6000 },
  LK81: { name: "Badulla - බදුල්ල", harvest: 6100 },
  LK22: { name: "Matale - මාතලේ", harvest: 6200 },
  LK72: { name: "Polonnaruwa - පොළොන්නරුව", harvest: 6300 },
  LK61: { name: "Kurunegala - කුරුණෑගල", harvest: 6400 },
  LK71: { name: "Anuradhapura - අනුරාධපුර", harvest: 6500 },
  LK23: { name: "Nuwara Eliya - නුවරඑලිය", harvest: 6600 },
  LK44: { name: "Vavuniya - වව්නියාව", harvest: 6700 },
  LK21: { name: "Kandy - මහනුවර", harvest: 6800 },
};

const PaddyCultivationMap = () => {
  const [hoveredDistrict, setHoveredDistrict] = useState(null);
  const [hoverText, setHoverText] = useState("");
  const [svgContent, setSvgContent] = useState("");
  const [scale, setScale] = useState(1);
  const containerRef = useRef(null);

  useEffect(() => {
    fetch(SriLankaMap)
      .then((response) => response.text())
      .then((data) => {
        parseSVG(data);
      });
  }, []);

  const parseSVG = async (svgText) => {
    const svgObj = await parse(svgText);
    const svgWithEvents = addEventHandlers(svgObj);
    const svgString = stringify(svgWithEvents);
    setSvgContent(svgString);

    setTimeout(() => {
      document.querySelectorAll("path").forEach((path) => {
        path.addEventListener("mouseenter", () => handleMouseEnter(path.id));
        path.addEventListener("mouseleave", handleMouseLeave);
      });
    }, 100);
  };

  const addEventHandlers = (svgObj) => {
    svgObj.children.forEach((node) => {
      if (node.name === "path" && node.attributes.id) {
        node.attributes.onMouseEnter = `handleMouseEnter('${node.attributes.id}')`;
        node.attributes.onMouseLeave = "handleMouseLeave()";
      }
    });
    return svgObj;
  };

  const handleMouseEnter = async (districtId) => {
    setHoveredDistrict(districtId);
    const districtData = districtPaddyData[districtId];
    if (districtData) {
      setHoverText(`${districtData.name} - Harvest: ${districtData.harvest}kg`);
    }
    const districtElement = document.getElementById(districtId);
    if (districtElement) {
      districtElement.style.fill = "#4CAF50"; // Green hover color
    }
  };

  const handleMouseLeave = () => {
    setHoveredDistrict(null);
    setHoverText("");
    document.querySelectorAll("path").forEach((path) => {
      path.style.fill = "";
    });
  };

  const handleWheel = (e) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      setScale((prevScale) => Math.min(prevScale + 0.1, 2));
    } else {
      setScale((prevScale) => Math.max(prevScale - 0.1, 0.5));
    }
  };

  useEffect(() => {
    const handleScroll = (e) => {
      if (containerRef.current && containerRef.current.contains(e.target)) {
        e.preventDefault();
      }
    };
    document.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      document.removeEventListener("wheel", handleScroll);
    };
  }, []);

  return (
    <div
      className="min-h-screen py-16"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1559234938-7ee334981519?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`, // Rice paddy terraces background
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        position: "relative",
      }}
    >
      {/* Overlay to improve text readability */}
      <div 
        className="absolute inset-0" 
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          backdropFilter: "blur(2px)",
        }}
      ></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-green-400 rounded-full filter blur-3xl opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-300 rounded-full filter blur-3xl opacity-10 translate-x-1/3 translate-y-1/3"></div>

        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold text-green-900 mb-4">
              Paddy Cultivation in Sri Lanka
            </h1>
            <div className="h-1 w-32 bg-green-500 mx-auto rounded-full"></div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div
              className="relative md:w-1/2 items-center overflow-hidden"
              style={{
                height: "80vh",
                overflow: "hidden",
              }}
            >
              <div
                className="svg-container shadow-2xl h-full overflow-hidden bg-white/90 rounded-2xl border border-green-200"
                ref={containerRef}
                onWheel={(e) => {
                  if (
                    containerRef.current &&
                    containerRef.current.contains(e.target)
                  ) {
                    handleWheel(e);
                  }
                }}
              >
                <div
                  className="svg-content"
                  dangerouslySetInnerHTML={{ __html: svgContent }}
                  style={{
                    transform: `scale(${scale})`,
                    transformOrigin: "center center",
                  }}
                />
              </div>
              {hoveredDistrict && (
                <div className="absolute w-96 left-10 top-10 p-4 bg-white/90 text-green-800 border border-green-300 rounded-lg shadow-lg backdrop-blur-sm">
                  {hoverText}
                </div>
              )}
            </div>
            <div className="md:w-1/2 bg-white/80 p-10 rounded-2xl shadow-xl border border-green-100 backdrop-blur-md">
              <h1 className="text-3xl font-bold text-green-800 text-center py-4 border-b border-green-100">
                Paddy Cultivation in Sri Lanka
              </h1>
              <p className="text-lg mt-4 text-gray-800">
                Sri Lanka is renowned for its rich paddy cultivation, which is
                deeply ingrained in the country's agricultural heritage. The
                island's diverse climate and fertile soils make it an ideal
                location for rice farming. Paddy farming is practiced throughout
                the island, with major regions spanning both the dry and wet
                zones.
              </p>

              <div className="mt-8">
                <h2 className="text-2xl font-semibold text-green-700">Climate and Soil</h2>
                <p className="mt-2 text-lg text-gray-800">
                  The tropical climate of Sri Lanka, with its varied rainfall and
                  temperature, supports paddy cultivation. The country has both
                  dry and wet zones, each offering unique conditions for rice
                  farming. Paddy fields are often found in the moist regions,
                  while irrigation systems in the dry zones ensure rice
                  cultivation can thrive year-round.
                </p>
                <p className="mt-2 text-lg text-gray-800">
                  The soil types vary across the island but include alluvial,
                  clay, and loamy soils, which are rich in nutrients and perfect
                  for paddy farming. Farmers in the wet zone benefit from high
                  rainfall, while those in the dry zone rely on irrigation
                  techniques.
                </p>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-semibold text-green-700">Irrigation Systems</h2>
                <p className="mt-2 text-lg text-gray-800">
                  Sri Lanka's farmers rely heavily on both traditional and modern
                  irrigation systems. The dry zone, in particular, has an
                  extensive network of tanks, canals, and reservoirs that supply
                  water to paddy fields. Farmers in the wet zone generally rely
                  on natural rainfall, with supplemental irrigation systems
                  during dry periods to optimize yield.
                </p>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-semibold text-green-700">Farming Techniques</h2>
                <p className="mt-2 text-lg text-gray-800">
                  Paddy cultivation in Sri Lanka blends both traditional and
                  modern farming practices. In many rural areas, farmers still
                  rely on manual labor and traditional tools like plows and
                  sickles. However, modern mechanization is gradually being
                  adopted, especially for planting and harvesting.
                </p>
                <p className="mt-2 text-lg text-gray-800">
                  Additionally, many farmers are turning to organic farming
                  techniques, focusing on sustainable practices to reduce the
                  use of chemical fertilizers and pesticides. Crop rotation and
                  water management are key to ensuring healthy soils and
                  maintaining high yields.
                </p>
              </div>

              <div className="mt-8">
                <h2 className="text-2xl font-semibold text-green-700">Challenges</h2>
                <p className="mt-2 text-lg text-gray-800">
                  Despite the favorable conditions for rice farming, there are
                  challenges such as climate change, pests, and irregular
                  rainfall patterns. The dry zones face issues of water scarcity,
                  while the wet zones sometimes experience flooding, making water
                  management critical to success.
                </p>
                <p className="mt-2 text-lg text-gray-800">
                  Additionally, maintaining soil health and ensuring proper
                  irrigation during off-seasons are challenges that farmers need
                  to overcome to sustain rice production.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaddyCultivationMap;