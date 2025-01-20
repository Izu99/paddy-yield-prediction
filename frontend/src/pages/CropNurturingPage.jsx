const CropNurturingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-darkgreen mb-4">
            Crop Nurturing: Growing Healthy Paddy Fields
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Monitor growth and adjust care for optimal results, using both
            traditional and modern techniques.
          </p>
        </div>

        {/* Image and Content Section */}
        <div className="bg-white shadow-lg rounded-xl p-8 mb-12">
          <img
            src="https://www.ips.lk/talkingeconomics/wp-content/uploads/2021/10/wilsan-u-BCATbA86WAw-unsplash-640x416.jpg"
            alt="Crop Nurturing"
            className="rounded-lg w-full mb-6 object-cover h-72"
          />
          <h2 className="text-3xl font-semibold text-darkgreen mb-4">
            Importance of Crop Nurturing
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Regularly monitoring crop growth and adjusting care based on weather
            and soil conditions is essential for a healthy harvest.
          </p>
        </div>

        {/* Another Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white shadow-lg rounded-xl p-8">
            <h2 className="text-3xl font-semibold text-darkgreen mb-4">
              Techniques for Crop Nurturing
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Utilize methods like mulching, fertilizing, and proper irrigation
              to ensure optimal crop growth.
            </p>
          </div>
          <img
            src="https://araliyarice.com/wp-content/uploads/2017/12/health-managment.jpg"
            alt="Crop Nurturing Techniques"
            className="rounded-lg w-full h-72 object-cover"
          />
        </div>

        {/* Final Section */}
        <div className="bg-darkgreen text-white rounded-xl p-8 flex">
          <div className="flex-1 mr-8">
            <h2 className="text-3xl font-semibold mb-4">
              Combining Traditional and Modern Practices
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              Incorporate traditional wisdom with modern technology, such as
              using drones for monitoring and automated irrigation systems.
            </p>
          </div>
          <img
            src="https://archives1.sundayobserver.lk/sites/default/files/styles/large/public/news/2019/08/23/z_JUN-p11-Paddy-cultivation.jpg?itok=EMMSrtSU"
            alt="Combining Practices"
            className="rounded-lg w-auto h-96 object-cover justify-center"
          />
        </div>
      </div>
    </div>
  );
};

export default CropNurturingPage;
