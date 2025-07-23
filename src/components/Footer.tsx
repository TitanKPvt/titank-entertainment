import React from 'react';
import { Music, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={`${import.meta.env.BASE_URL}tkicon.png`}
                alt="TitanK Logo"
                className="h-10 w-10 object-contain"
              />
              <span className="text-2xl font-bold text-white">TITANK ENTERTAINMENT</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Premier Event Management for World-Class Concerts & Live Entertainment. 
              Delivering unforgettable experiences and innovative business solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/titank.ent?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-red-400 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-red-400 transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('#home')}
                  className="text-gray-400 hover:text-red-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#about')}
                  className="text-gray-400 hover:text-red-400 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#services')}
                  className="text-gray-400 hover:text-red-400 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#achievements')}
                  className="text-gray-400 hover:text-red-400 transition-colors"
                >
                  Achievements
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('#contact')}
                  className="text-gray-400 hover:text-red-400 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-400">
              <p>Bengaluru, India</p>
              <p>
                <a href="mailto:titank.entertainment@gmail.com" className="hover:text-red-400 transition-colors">
                  titank.entertainment@gmail.com
                </a>
              </p>
              <p>
                <a href="tel:9101177118" className="hover:text-red-400 transition-colors">
                  +91 9101177118
                </a>
              </p>
            </div>
          </div>
        </div>
          {/* Map Column */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Our Location</h4>
            <div className="h-48 md:h-56 w-full rounded overflow-hidden border border-gray-700">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.543885647869!2d77.74049197704002!3d13.06467925440821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0ffffe50ce95%3A0xe4fa239e1d6450e3!2sPrestige%20Tranquility%20Club%20house!5e0!3m2!1sen!2sin!4v1753252270115!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} TitanK Entertainment. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;