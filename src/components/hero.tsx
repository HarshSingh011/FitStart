import { Search, MapPin } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [searchLocation, setSearchLocation] = useState("");

  return (
    <section className="relative bg-gradient-to-br from-fitstart-light to-gray-50 py-20 overflow-hidden">
      {}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-fitstart-green rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-fitstart-green rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-fitstart-green rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-fitstart-dark mb-6 leading-tight">
            Find Your Perfect
            <span className="text-fitstart-green block">Fitness Journey</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover top-rated gyms near you. From 3-star local favorites to premium fitness centers, 
            start your fitness transformation today.
          </p>

          {}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative flex items-center bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="flex items-center px-4 py-3 border-r border-gray-200">
                <MapPin className="text-gray-400 mr-2" size={20} />
                <input
                  type="text"
                  placeholder="Enter your location"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  className="border-0 outline-none text-fitstart-dark placeholder-gray-400 w-full"
                />
              </div>
              <button className="bg-fitstart-green text-fitstart-dark px-8 py-3 font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105 flex items-center">
                <Search className="mr-2" size={20} />
                Search Gyms
              </button>
            </div>
          </div>

          {}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-fitstart-green mb-2">500+</div>
              <div className="text-gray-600">Partner Gyms</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-fitstart-green mb-2">50K+</div>
              <div className="text-gray-600">Happy Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-fitstart-green mb-2">4.8★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
