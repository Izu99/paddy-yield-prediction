import React, { useState, useEffect, useRef } from "react";
import { parse, stringify } from "svgson"; // Import both parse and stringify
import SriLankaMap from "../assets/lk.svg"; // Adjust the path to your SVG file

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

const Map = () => {
  const [hoveredDistrict, setHoveredDistrict] = useState(null);
  const [hoverText, setHoverText] = useState("");
  const [svgContent, setSvgContent] = useState("");
  const [scale, setScale] = useState(1); // State for zoom scale
  const containerRef = useRef(null); // Reference to the container

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
    const svgString = stringify(svgWithEvents); // Convert back to string
    setSvgContent(svgString);

    // Add event listeners after rendering the SVG
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
    // Change color of the hovered district
    const districtElement = document.getElementById(districtId);
    if (districtElement) {
      districtElement.style.fill = "#c98902"; // Set your desired hover color
    }
  };

  const handleMouseLeave = () => {
    setHoveredDistrict(null);
    setHoverText("");
    // Reset color of the hovered district
    document.querySelectorAll("path").forEach((path) => {
      path.style.fill = ""; // Reset to original fill color
    });
  };

  // Handle mouse scroll for zooming
  const handleWheel = (e) => {
    e.preventDefault(); // Prevent default scroll behavior
    if (e.deltaY < 0) {
      // Scroll up = zoom in
      setScale((prevScale) => Math.min(prevScale + 0.1, 2)); // Limit max zoom
    } else {
      // Scroll down = zoom out
      setScale((prevScale) => Math.max(prevScale - 0.1, 0.5)); // Limit min zoom
    }
  };

  // Add event listeners to prevent page scroll when inside svg-container
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
    <div className="">
      <div className="flex">
        <div
          className="relative w-2/6 items-center overflow-hidden"
          style={{
            height: "80vh",
            overflow: "hidden", // Prevent page scroll
          }}
        >
          <div
            className="svg-container shadow-2xl h-full overflow-hidden bg-gray-200/40 rounded-2xl"
            ref={containerRef}
            onWheel={(e) => {
              if (
                containerRef.current &&
                containerRef.current.contains(e.target)
              ) {
                handleWheel(e); // Zoom map only if the event is inside the map container
              }
            }} // Bind mouse wheel zoom only within the container
          >
            <div
              className="svg-content"
              dangerouslySetInnerHTML={{ __html: svgContent }}
              style={{
                transform: `scale(${scale})`,
                transformOrigin: "center center", // Zoom from the center of the map
              }}
            />
          </div>
          {hoveredDistrict && (
            <div className="absolute w-96 right-20 top-10 p-2 bg-gray-800/40 text-white border border-gray-300 rounded shadow-lg">
              {hoverText}
            </div>
          )}
        </div>
        <div className="container p-4">
          <h1 className="text-3xl font-bold text-center">
            Paddy Cultivation in Sri Lanka
          </h1>
          <p className="text-lg mt-4">
            Sri Lanka is renowned for its rich paddy cultivation, which is
            deeply ingrained in the country’s agricultural heritage. The
            island's diverse climate and fertile soils make it an ideal location
            for rice farming. Paddy farming is practiced throughout the island,
            with major regions spanning both the dry and wet zones.
          </p>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold">Climate and Soil</h2>
            <p className="mt-2 text-lg">
              The tropical climate of Sri Lanka, with its varied rainfall and
              temperature, supports paddy cultivation. The country has both dry
              and wet zones, each offering unique conditions for rice farming.
              Paddy fields are often found in the moist regions, while
              irrigation systems in the dry zones ensure rice cultivation can
              thrive year-round.
            </p>
            <p className="mt-2 text-lg">
              The soil types vary across the island but include alluvial, clay,
              and loamy soils, which are rich in nutrients and perfect for paddy
              farming. Farmers in the wet zone benefit from high rainfall, while
              those in the dry zone rely on irrigation techniques.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold">Irrigation Systems</h2>
            <p className="mt-2 text-lg">
              Sri Lanka's farmers rely heavily on both traditional and modern
              irrigation systems. The dry zone, in particular, has an extensive
              network of tanks, canals, and reservoirs that supply water to
              paddy fields. Farmers in the wet zone generally rely on natural
              rainfall, with supplemental irrigation systems during dry periods
              to optimize yield.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold">Rice Varieties</h2>
            <p className="mt-2 text-lg">
              Various rice varieties are cultivated in Sri Lanka, each adapted
              to the specific climate and soil conditions of the region. Some of
              the most commonly grown varieties include:
            </p>
            <ul className="list-disc pl-5 mt-2 text-lg">
              <li>
                <strong>Samba:</strong> Known for its fragrant aroma and long
                grain, grown mainly in the wet zone.
              </li>
              <li>
                <strong>Kekulu:</strong> A short-grain rice variety commonly
                grown in the dry zone.
              </li>
              <li>
                <strong>Red Rice:</strong> A highly nutritious, traditional
                variety grown in organic farming systems.
              </li>
              <li>
                <strong>Thivanka:</strong> A popular variety in certain
                districts known for its high yield and resistance to pests.
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold">Farming Techniques</h2>
            <p className="mt-2 text-lg">
              Paddy cultivation in Sri Lanka blends both traditional and modern
              farming practices. In many rural areas, farmers still rely on
              manual labor and traditional tools like plows and sickles.
              However, modern mechanization is gradually being adopted,
              especially for planting and harvesting.
            </p>
            <p className="mt-2 text-lg">
              Additionally, many farmers are turning to organic farming
              techniques, focusing on sustainable practices to reduce the use of
              chemical fertilizers and pesticides. Crop rotation and water
              management are key to ensuring healthy soils and maintaining high
              yields.
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold">Challenges</h2>
            <p className="mt-2 text-lg">
              Despite the favorable conditions for rice farming, there are
              challenges such as climate change, pests, and irregular rainfall
              patterns. The dry zones face issues of water scarcity, while the
              wet zones sometimes experience flooding, making water management
              critical to success.
            </p>
            <p className="mt-2 text-lg">
              Additionally, maintaining soil health and ensuring proper
              irrigation during off-seasons are challenges that farmers need to
              overcome to sustain rice production.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
