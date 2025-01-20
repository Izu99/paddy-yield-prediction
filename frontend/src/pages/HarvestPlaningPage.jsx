const HarvestPlanningPage = () => {
    return (
        <div className="bg-gray-100 min-h-screen py-12" style={{ background: 'url(https://d1hjkbq40fs2x4.cloudfront.net/2020-07-21/files/15953286160.jpg) no-repeat center center/cover', width: 'auto', height: 'max-content' }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-darkgreen mb-4">
              Harvest Planning: Data-Driven Forecasts
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Plan harvests confidently with data-driven forecasts and efficient resource allocation.
            </p>
          </div>
  
          {/* Image and Content Section */}
          <div className="bg-white shadow-lg rounded-xl p-8 mb-12">
            <img
              src="https://araliyarice.com/wp-content/uploads/2017/12/harvesting.jpg"
              alt="Harvest Planning"
              className="rounded-lg w-full mb-6 object-cover h-72"
            />
            <h2 className="text-3xl font-semibold text-darkgreen mb-4">
              Efficient Harvest Planning
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Use data-driven insights to forecast yields and allocate resources effectively for a successful harvest.
            </p>
          </div>
  
          {/* Another Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white shadow-lg rounded-xl p-8">
              <h2 className="text-3xl font-semibold text-darkgreen mb-4">
                Modern Harvesting Techniques
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Implement advanced harvesting techniques to maximize efficiency and minimize losses.
              </p>
            </div>
            <img
              src="https://island.lk/wp-content/uploads/2023/08/harvesting.jpg"
              alt="Modern Harvesting"
              className="rounded-lg w-full h-72 object-cover"
            />
          </div>
  
          {/* Final Section */}
          <div className="bg-darkgreen text-white rounded-xl p-8 flex">
            <div className="flex-1 mr-8">
              <h2 className="text-3xl font-semibold mb-4">
                Combining Tradition with Technology
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Blend traditional harvesting methods with modern technology to achieve the best results and sustainability.
              </p>
            </div>
            <img
              src="https://www.agrimin.gov.lk/web/images/pictures/News/2022.02.24-4/image_agc_01.jpeg"
              alt="Harvesting Traditions"
              className="rounded-lg w-auto h-96 object-cover justify-center"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default HarvestPlanningPage;
  