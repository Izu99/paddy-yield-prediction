const FieldPreparationPage = () => {
  return (
    <div className="bg-primary/10 min-h-screen py-12 ">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 shadow-2xl p-10 rounded-lg">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-darkgreen mb-4">
            Field Preparation: The Foundation of a Successful Harvest
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Explore the essential steps to prepare your paddy fields for optimal
            yield, inspired by Sri Lanka's traditional and modern practices. 
            Field preparation not only sets the stage for better productivity but also minimizes crop loss.
          </p>
        </div>

        {/* Image and Content Section */}
        <div className="bg-white shadow-lg rounded-xl p-8 mb-12">
          <img
            src="https://i.ytimg.com/vi/u2W4DmcIFec/maxresdefault.jpg"
            alt="Field Preparation in Sri Lanka"
            className="rounded-lg w-full mb-6 object-cover h-72 transition-transform duration-500 hover:scale-105"
          />
          <h2 className="text-3xl font-semibold text-darkgreen mb-4">
            Importance of Field Preparation
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Field preparation is the first step towards a successful paddy
            harvest. In Sri Lanka, this process often begins with clearing the
            fields of debris and leveling the land. Proper preparation ensures
            efficient irrigation and optimal root development for healthy crop
            growth. 
            Additionally, it helps prevent weed infestation, which can
            significantly reduce the yield. With proper planning, farmers can
            create an environment that maximizes crop resilience to pests and diseases.
          </p>
        </div>

        {/* Another Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-3xl font-semibold text-darkgreen mb-4">
              Soil Preparation: Enhancing Fertility
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Farmers in Sri Lanka enrich the soil using organic methods,
              including adding compost and livestock manure. These traditional
              techniques help improve soil structure, ensuring water retention
              and nutrient availability. 
              Modern farmers also conduct soil testing to assess pH levels and nutrient deficiencies, allowing them to apply the right
              fertilizers and amendments for balanced growth.
            </p>
          </div>
          <img
            src="https://doa.gov.lk/wp-content/uploads/2020/06/RRDI_LandLeveling_300.jpg"
            alt="Soil Preparation in Paddy Fields"
            className="rounded-lg w-full h-72 object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Final Section */}
        <div className="bg-darkgreen text-white rounded-xl p-8">
          <h2 className="text-3xl font-semibold mb-4">
            Tools and Modern Practices
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Modern Sri Lankan farmers combine traditional tools like the mammoty
            with machinery such as tractors for efficient field preparation.
            Advanced irrigation techniques, including laser leveling, have also
            gained popularity, ensuring uniform water distribution across the
            fields. 
            In addition to this, drone technology is being explored for field
            mapping and monitoring, providing precise data for better management
            of resources. By blending tradition with innovation, farmers
            enhance productivity while reducing labor and time.
          </p>
          <img
            src="https://pub.mdpi-res.com/agronomy/agronomy-11-01264/article_deploy/html/images/agronomy-11-01264-g004.png?1625494334"
            alt="Modern Field Preparation in Sri Lanka"
            className="rounded-lg w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>
    </div>
  );
};

export default FieldPreparationPage;
