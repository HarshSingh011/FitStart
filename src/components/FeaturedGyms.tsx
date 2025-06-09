import { Star, MapPin, Clock } from "lucide-react";

const FeaturedGyms = () => {
  const gyms = [
    {      name: "PowerFlex Fitness Center",
      rating: 4.9,
      location: "Downtown District",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=300&fit=crop",
      category: "5-Star",
      price: "₹600/month",
      amenities: ["Pool", "Sauna", "Personal Training"]
    },
    {      name: "Elite Performance Gym",
      rating: 5.0,
      location: "Business District",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      category: "Premium",
      price: "₹1200/month",
      amenities: ["Spa", "Nutrition Bar", "VIP Lounge"]
    },
    {      name: "Community Fitness Hub",
      rating: 4.2,
      location: "Residential Area",
      image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=400&h=300&fit=crop",
      category: "3-Star",
      price: "₹200/month",
      amenities: ["Free Weights", "Cardio", "Locker Rooms"]
    },
    {      name: "Urban Athletic Club",
      rating: 4.7,
      location: "City Center",
      image: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=400&h=300&fit=crop",
      category: "4-Star",
      price: "₹500/month",
      amenities: ["Group Classes", "Modern Equipment", "Parking"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-fitstart-dark mb-4">
            Featured Gyms Near You
          </h2>
          <p className="text-xl text-gray-600">
            Top-rated fitness centers chosen by our community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {gyms.map((gym, index) => (            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer flex flex-col h-full"
            >
              <div className="relative">
                <img
                  src={gym.image}
                  alt={gym.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-fitstart-green text-fitstart-dark px-3 py-1 rounded-full text-sm font-semibold">
                    {gym.category}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white bg-opacity-90 px-2 py-1 rounded-lg flex items-center">
                    <Star className="text-yellow-500 mr-1" size={16} />
                    <span className="text-sm font-semibold">{gym.rating}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-fitstart-dark mb-2">
                  {gym.name}
                </h3>
                
                <div className="flex items-center text-gray-600 mb-2">
                  <MapPin size={16} className="mr-1" />
                  <span className="text-sm">{gym.location}</span>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-fitstart-green">
                    {gym.price}
                  </span>
                  <div className="flex items-center text-gray-500">
                    <Clock size={14} className="mr-1" />
                    <span className="text-xs">24/7</span>
                  </div>
                </div>                <div className="mb-4 flex-grow">
                  <div className="flex flex-wrap gap-1">
                    {gym.amenities.map((amenity, amenityIndex) => (
                      <span
                        key={amenityIndex}
                        className="bg-gray-100 text-gray-600 px-2 py-1 rounded-lg text-xs"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-fitstart-green text-fitstart-dark py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 mt-auto">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-fitstart-dark text-white px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105">
            View All Gyms
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedGyms;
