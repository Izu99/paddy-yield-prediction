const SeedSelectionPage = () => {
    return (
      <div className="bg-gray-100 min-h-screen py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Title Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-darkgreen mb-4">
              Seed Selection and Sowing: The Key to Thriving Crops
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Discover how Sri Lankan farmers ensure quality through the careful
              selection of seeds and strategic sowing methods, combining tradition
              and innovation.
            </p>
          </div>
  
          {/* Image and Content Section */}
          <div className="bg-white shadow-lg rounded-xl p-8 mb-12">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFUJ933OTu0bOG5qSOTs6hx6vWJgI6gfm56g&s"
              alt="Selecting Paddy Seeds"
              className="rounded-lg w-full mb-6 object-cover h-72"
            />
            <h2 className="text-3xl font-semibold text-darkgreen mb-4">
              Selecting the Best Seeds
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              In Sri Lanka, seed selection is a critical process. Farmers often
              choose traditional paddy varieties like "Suwandel" or "Kalu Heenati"
              for their resilience and nutritional value. Modern hybrid seeds have
              also gained popularity for their high yields.
            </p>
          </div>
  
          {/* Another Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white shadow-lg rounded-xl p-8">
              <h2 className="text-3xl font-semibold text-darkgreen mb-4">
                Sowing Techniques in Sri Lanka
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Sowing methods range from broadcasting seeds to using direct
                seeding tools. In rain-fed regions, farmers adapt their techniques
                to ensure maximum water absorption and germination.
              </p>
            </div>
            <img
              src="https://i.ytimg.com/vi/oYiuCAO1XTc/sddefault.jpg"
              alt="Sowing Techniques"
              className="rounded-lg w-full h-72 object-cover"
            />
          </div>
  
          {/* Final Section */}
          <div className="bg-darkgreen text-white rounded-xl p-8 flex">
            <div className="flex-1 mr-8">
              <h2 className="text-3xl font-semibold mb-4">
                Traditional Wisdom Meets Modern Practices
              </h2>
              <p className="text-lg leading-relaxed mb-6">
                Sri Lankan farmers blend traditional seed treatments, like soaking
                seeds in cow dung for protection, with modern innovations such as
                precision seeding equipment. These practices enhance crop health
                and ensure sustainable farming.
              </p>
            </div>
            <img
              src="https://doa.gov.lk/wp-content/uploads/2021/02/RRDI_AgroTech2_3.jpg"
              alt="Seed Treatment"
              className="rounded-lg w-auto h-96 object-cover justify-center"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default SeedSelectionPage;
  