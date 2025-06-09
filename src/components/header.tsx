import { Search, Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../logo.png"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {}
          <div className="flex items-center space-x-2">
            <img 
              src={logo} 
              alt="FitStart"
              className="h-10 w-auto"
            />
          </div>

          {}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-fitstart-dark hover:text-fitstart-green transition-colors">
              Find Gyms
            </a>
            <a href="#" className="text-fitstart-dark hover:text-fitstart-green transition-colors">
              Categories
            </a>
            <a href="#" className="text-fitstart-dark hover:text-fitstart-green transition-colors">
              About
            </a>
            <a href="#" className="text-fitstart-dark hover:text-fitstart-green transition-colors">
              Contact
            </a>
          </nav>

          {}
          <div className="hidden md:flex items-center">
            <button className="bg-fitstart-green text-fitstart-dark px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all transform hover:scale-105">
              Get Started
            </button>
          </div>

          {}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-fitstart-dark hover:text-fitstart-green transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#" className="block px-3 py-2 text-fitstart-dark hover:text-fitstart-green transition-colors">
                Find Gyms
              </a>
              <a href="#" className="block px-3 py-2 text-fitstart-dark hover:text-fitstart-green transition-colors">
                Categories
              </a>
              <a href="#" className="block px-3 py-2 text-fitstart-dark hover:text-fitstart-green transition-colors">
                About
              </a>
              <a href="#" className="block px-3 py-2 text-fitstart-dark hover:text-fitstart-green transition-colors">
                Contact
              </a>
              <button className="w-full bg-fitstart-green text-fitstart-dark px-6 py-2 rounded-full font-semibold hover:bg-opacity-90 transition-all mt-4">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
