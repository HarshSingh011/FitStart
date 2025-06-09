import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-fitstart-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/7793ec15-91c6-4ed0-9cdd-5c361dbbc553.png" 
                alt="FitStart"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              FitStart connects fitness enthusiasts with the perfect gym for their journey. 
              From budget-friendly options to premium facilities, we help you find your ideal workout space.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-gray-300">
                <Phone size={16} className="mr-2" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail size={16} className="mr-2" />
                <span className="text-sm">hello@fitstart.com</span>
              </div>
            </div>
          </div>

          {}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>            <ul className="space-y-2">
              <li><a href="/gyms" className="text-gray-300 hover:text-fitstart-green transition-colors">Find Gyms</a></li>
              <li><a href="/categories" className="text-gray-300 hover:text-fitstart-green transition-colors">Categories</a></li>
              <li><a href="/pricing" className="text-gray-300 hover:text-fitstart-green transition-colors">Pricing</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-fitstart-green transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-fitstart-green transition-colors">Contact</a></li>
            </ul>
          </div>

          {}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>            <ul className="space-y-2">
              <li><a href="/help" className="text-gray-300 hover:text-fitstart-green transition-colors">Help Center</a></li>
              <li><a href="/safety" className="text-gray-300 hover:text-fitstart-green transition-colors">Safety</a></li>
              <li><a href="/community" className="text-gray-300 hover:text-fitstart-green transition-colors">Community</a></li>
              <li><a href="/terms" className="text-gray-300 hover:text-fitstart-green transition-colors">Terms of Service</a></li>
              <li><a href="/privacy" className="text-gray-300 hover:text-fitstart-green transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 FitStart. All rights reserved. Built with 💚 for fitness enthusiasts.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
