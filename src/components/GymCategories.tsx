import { Star, Crown, Award, Trophy } from "lucide-react";

const GymCategories = () => {
  const categories = [
    {
      title: "3-Star Gyms",
      description: "Affordable local gyms with essential equipment",
      icon: <Star className="text-yellow-500" size={40} />,
      price: "From ₹100/month",
      features: ["Basic Equipment", "Locker Rooms", "Free Weights"],
      gradient: "from-yellow-100 to-yellow-50",
      border: "border-yellow-200"
    },
    {
      title: "4-Star Gyms",
      description: "Well-equipped facilities with group classes",
      icon: <Award className="text-blue-500" size={40} />,
      price: "From ₹200/month",
      features: ["Modern Equipment", "Group Classes", "Personal Training"],
      gradient: "from-blue-100 to-blue-50",
      border: "border-blue-200"
    },
    {
      title: "5-Star Gyms",
      description: "Premium facilities with comprehensive amenities",
      icon: <Trophy className="text-purple-500" size={40} />,
      price: "From ₹500/month",
      features: ["Premium Equipment", "Spa Services", "Nutrition Coaching"],
      gradient: "from-purple-100 to-purple-50",
      border: "border-purple-200"
    },
    {
      title: "Premium Elite",
      description: "Luxury fitness centers with exclusive services",
      icon: <Crown className="text-fitstart-green" size={40} />,
      price: "From ₹1000/month",
      features: ["Luxury Amenities", "Personal Chef", "VIP Services"],
      gradient: "from-green-100 to-green-50",
      border: "border-green-200"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-fitstart-dark mb-4">
            Choose Your Fitness Level
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From budget-friendly local gyms to premium elite facilities, find the perfect fit for your fitness goals and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${category.gradient} ${category.border} border-2 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer`}
            >
              <div className="text-center mb-4">
                {category.icon}
              </div>
              
              <h3 className="text-xl font-bold text-fitstart-dark mb-2 text-center">
                {category.title}
              </h3>
              
              <p className="text-gray-600 mb-4 text-center text-sm">
                {category.description}
              </p>
              
              <div className="text-center mb-4">
                <span className="text-2xl font-bold text-fitstart-green">
                  {category.price}
                </span>
              </div>
              
              <ul className="space-y-2 mb-6">
                {category.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-fitstart-green rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-fitstart-green text-fitstart-dark py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105">
                Explore Gyms
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GymCategories;
