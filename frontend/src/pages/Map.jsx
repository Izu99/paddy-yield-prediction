import React, { useState, useEffect, useRef } from 'react';
import { parse, stringify } from 'svgson'; // Import both parse and stringify
import SriLankaMap from '../assets/lk.svg'; // Adjust the path to your SVG file

const hoverTexts = {
  LK53: "Trincomalee - ත්‍රිකුණාමළය - Description for Trincomalee | 2024 Average Paddy Yield: 3.5 tons per hectare",
  LK45: "Mulativ - මුලතිව් - Description for Mulativ | 2024 Average Paddy Yield: 4.1 tons per hectare",
  LK41: "Jaffna - යාපනය - Description for Jaffna | 2024 Average Paddy Yield: 3.2 tons per hectare",
  LK42: "Kilinochchi - කිලිනොච්චිය - Description for Kilinochchi | 2024 Average Paddy Yield: 3.4 tons per hectare",
  LK43: "Mannar - මන්නාරම - Description for Mannar | 2024 Average Paddy Yield: 3.0 tons per hectare",
  LK62: "Puttalam - පුත්තලම - Description for Puttalam | 2024 Average Paddy Yield: 4.3 tons per hectare",
  LK12: "Gampaha - ගම්පහ - Description for Gampaha | 2024 Average Paddy Yield: 4.5 tons per hectare",
  LK11: "Colombo - කොළඹ - Description for Colombo | 2024 Average Paddy Yield: 4.7 tons per hectare",
  LK13: "Kalutara - කළුතර - Description for Kalutara | 2024 Average Paddy Yield: 4.6 tons per hectare",
  LK31: "Galle - ගාල්ල - Description for Galle | 2024 Average Paddy Yield: 4.0 tons per hectare",
  LK32: "Matara - මාතර - Description for Matara | 2024 Average Paddy Yield: 3.8 tons per hectare",
  LK33: "Hambantota - හම්බන්තොට - Description for Hambantota | 2024 Average Paddy Yield: 3.6 tons per hectare",
  LK52: "Ampara - අම්පාර - Description for Ampara | 2024 Average Paddy Yield: 3.9 tons per hectare",
  LK51: "Maddakalapuwa - මඩකලපුව - Description for Maddakalapuwa | 2024 Average Paddy Yield: 3.7 tons per hectare",
  LK91: "Ratnapura - රත්නපුර - Description for Ratnapura | 2024 Average Paddy Yield: 4.2 tons per hectare",
  LK82: "Monaragala - මොනරාගල - Description for Monaragala | 2024 Average Paddy Yield: 3.1 tons per hectare",
  LK92: "Kegalle - කෑගල්ල - Description for Kegalle | 2024 Average Paddy Yield: 4.4 tons per hectare",
  LK81: "Badulla - බදුල්ල - Description for Badulla | 2024 Average Paddy Yield: 3.3 tons per hectare",
  LK22: "Matale - මාතලේ - Description for Matale | 2024 Average Paddy Yield: 4.0 tons per hectare",
  LK72: "Pollonnaruwa - පොළොන්නරුව - Description for Pollonnaruwa | 2024 Average Paddy Yield: 3.8 tons per hectare",
  LK61: "Kurunegala - කුරුණෑගල - Description for Kurunegala | 2024 Average Paddy Yield: 4.2 tons per hectare",
  LK71: "Anuradhapura - අනුරාධපුර - Description for Anuradhapura | 2024 Average Paddy Yield: 3.7 tons per hectare",
  LK23: "Nuwara Eliya - නුවරඑලිය - Description for Nuwara Eliya | 2024 Average Paddy Yield: 3.5 tons per hectare",
  LK44: "Vavuniya - වව්නියාව - Description for Vavuniya | 2024 Average Paddy Yield: 3.6 tons per hectare",
  LK21: "Mahanuwara - මහනුවර - Description for Mahanuwara | 2024 Average Paddy Yield: 3.4 tons per hectare"
};

const Map = () => {
  const [hoveredDistrict, setHoveredDistrict] = useState(null);
  const [svgContent, setSvgContent] = useState('');
  const [scale, setScale] = useState(1); // State for zoom scale
  const containerRef = useRef(null); // Reference to the container

  useEffect(() => {
    fetch(SriLankaMap)
      .then(response => response.text())
      .then(data => {
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
      document.querySelectorAll('path').forEach((path) => {
        path.addEventListener('mouseenter', () => handleMouseEnter(path.id));
        path.addEventListener('mouseleave', handleMouseLeave);
      });
    }, 100);
  };

  const addEventHandlers = (svgObj) => {
    svgObj.children.forEach((node) => {
      if (node.name === 'path' && node.attributes.id) {
        node.attributes.onMouseEnter = `handleMouseEnter('${node.attributes.id}')`;
        node.attributes.onMouseLeave = 'handleMouseLeave()';
      }
    });
    return svgObj;
  };

  const handleMouseEnter = (districtId) => {
    setHoveredDistrict(districtId);
    // Change color of the hovered district
    const districtElement = document.getElementById(districtId);
    if (districtElement) {
      districtElement.style.fill = '#c98902'; // Set your desired hover color
    }
  };

  const handleMouseLeave = () => {
    setHoveredDistrict(null);
    // Reset color of the hovered district
    document.querySelectorAll('path').forEach((path) => {
      path.style.fill = ''; // Reset to original fill color
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
    document.addEventListener('wheel', handleScroll, { passive: false });

    return () => {
      document.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return ( 
    <div className="relative flex items-center overflow-hidden"    
      style={{ 
        width: '100%', 
        height: '80vh', 
        overflow: 'hidden' // Prevent page scroll
      }} 
    >
      <div className="svg-container shadow-2xl h-full overflow-hidden"
       ref={containerRef}       
       onWheel={(e) => { 
         if (containerRef.current && containerRef.current.contains(e.target)) {
           handleWheel(e); // Zoom map only if the event is inside the map container
         }
       }} // Bind mouse wheel zoom only within the container
       >
        <div 
          className="svg-content"
          dangerouslySetInnerHTML={{ __html: svgContent }}
          style={{
            transform: `scale(${scale})`,
            transformOrigin: 'center center', // Zoom from the center of the map
          }}
        />
      </div>

      {hoveredDistrict && (
        <div className="absolute w-96 right-20 top-10 p-2 bg-white text-black border border-gray-300 rounded shadow-lg">
          {hoverTexts[hoveredDistrict]}
        </div>
      )}
    </div>
  );
};

export default Map;
