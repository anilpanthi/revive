
import { GraduationCap, Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">Reviveeducare Network</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Nepal's most trusted educational consultancy, helping students achieve 
              their dreams of studying abroad since 2008.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Study Destinations</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">United States</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Canada</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Australia</a></li>
              <li><a href="#" className="hover:text-white transition-colors">United Kingdom</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Germany</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Japan</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">University Selection</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Application Processing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Visa Assistance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Scholarship Guidance</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pre-Departure Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Post-Arrival Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>+977-9860323992</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>info@reviveeducare.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 flex-shrink-0 mt-0.5">📍</div>
                <span>Putalisadak, Kathmandu, Nepal</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Reviveeducare Network. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
