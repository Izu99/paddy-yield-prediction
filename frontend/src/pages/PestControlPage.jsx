const PestControlPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-darkgreen mb-4">
            Pest Control: Protecting Your Paddy Fields
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Implement strategies to manage pests effectively and ensure a
            healthy crop.
          </p>
        </div>

        {/* Image and Content Section */}
        <div className="bg-white shadow-lg rounded-xl p-8 mb-12">
          <img
            src="https://english.mathrubhumi.com/image/contentid/policy:1.8040600:1668230850/pesticide.jpg?$p=d669481&f=16x10&w=852&q=0.8"
            alt="Pest Control"
            className="rounded-lg w-full mb-6 object-cover h-72"
          />
          <h2 className="text-3xl font-semibold text-darkgreen mb-4">
            Effective Pest Control Techniques
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Use integrated pest management techniques to control pests while
            minimizing harm to the environment.
          </p>
        </div>

        {/* Another Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white shadow-lg rounded-xl p-8">
            <h2 className="text-3xl font-semibold text-darkgreen mb-4">
              Natural Pest Control Methods
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Implement organic methods such as companion planting and using
              beneficial insects.
            </p>
          </div>
          <img
            src="https://doa.gov.lk/wp-content/uploads/2020/05/5-1-1024x768-1.jpg"
            alt="Natural Pest Control"
            className="rounded-lg w-full h-72 object-cover"
          />
        </div>

        {/* Final Section */}
        <div className="bg-darkgreen text-white rounded-xl p-8 flex">
          <div className="flex-1 mr-8">
            <h2 className="text-3xl font-semibold mb-4">
              Advanced Pest Control Technologies
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              Pheromone traps are devices that use synthetic copies of natural
              chemicals (pheromones) released by insects to attract them. These
              traps are highly effective in monitoring and controlling pest
              populations1. In Sri Lanka, pheromone traps are used to manage
              pests like the Black rat and other agricultural pests.
            </p>
          </div>
          <img
            src="https://www.mdpi.com/agronomy/agronomy-13-01851/article_deploy/html/images/agronomy-13-01851-g001-550.jpg"
            alt="Pest Control Technologies"
            className="rounded-lg w-[30rem] h-auto object-cover justify-center"
          />
        </div>
      </div>
    </div>
  );
};

export default PestControlPage;
