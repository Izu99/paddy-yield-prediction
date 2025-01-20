const IrrigationManagementPage = () => {
    return (
      <div className="bg-gray-100 min-h-screen py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-darkgreen mb-4">
              Irrigation Management: Efficient Water Usage
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Plan efficient water usage to ensure consistent growth and optimal yields.
            </p>
          </div>
  
          {/* Image and Content Section */}
          <div className="bg-white shadow-lg rounded-xl p-8 mb-12">
            <img
              src="https://cdn.prod.website-files.com/600ad47aac6ecfe2136e551a/600fb01a00ce6a84cc3f3b15_image%20(8)%201%20(1)-min.png"
              alt="Irrigation Management"
              className="rounded-lg w-full mb-6 object-cover h-72"
            />
            <h2 className="text-3xl font-semibold text-darkgreen mb-4">
              Optimal Irrigation Strategies
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Utilize modern irrigation techniques such as drip and sprinkler systems for efficient water usage and crop health.
            </p>
          </div>
  
          {/* Another Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white shadow-lg rounded-xl p-8">
              <h2 className="text-3xl font-semibold text-darkgreen mb-4">
                Traditional Irrigation Methods
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Learn about traditional methods such as canal irrigation and their benefits.
              </p>
            </div>
            <img
              src="https://imgs.mongabay.com/wp-content/uploads/sites/20/2023/04/22142124/Cover-photo-Cascade-tank-system-c-IUCN-Sri-Lanka.jpg"
              alt="Traditional Irrigation"
              className="rounded-lg w-full h-72 object-cover"
            />
          </div>
  
          {/* Final Section */}
          <div className="bg-darkgreen text-white rounded-xl p-8 flex">
            <div className="flex-1 mr-8">
              <h2 className="text-3xl font-semibold mb-4">
                Innovative Water Management Techniques
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Explore new technologies like smart irrigation systems that use sensors to optimize water usage.
              </p>
            </div>
            <img
              src="https://t4.ftcdn.net/jpg/08/47/55/45/360_F_847554506_QBKpjM91OSckV90gX8IgwI4DQOOP7z6d.jpg"
              alt="Innovative Irrigation"
              className="rounded-lg w-auto h-96 object-cover justify-center"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default IrrigationManagementPage;
  