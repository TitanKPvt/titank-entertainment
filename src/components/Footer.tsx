import { FaFacebook, FaInstagram, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import { Link, useNavigate } from "react-router-dom";
import { useCallback } from "react";


const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();

  const handleNavigation = useCallback((sectionId: string) => {
    if (window.location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        const element = document.querySelector(sectionId);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.querySelector(sectionId);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  }, [navigate]);

  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img
                src={`${import.meta.env.BASE_URL}tkmod3.webp`}
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
              <a href="https://www.facebook.com/people/TitanK-Entertainment/61578719460814" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-red-400 transition">
                <FaFacebook size={24} />
              </a>
              <a href="https://instagram.com/titank.ent" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-red-400 transition">
                <FaInstagram size={24} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"  aria-label="LinkedIn" className="text-gray-400 hover:text-red-400 transition">
                <FaLinkedin size={24} />
              </a>
              <a href="https://x.com/TitanK_Ent" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-400 hover:text-red-400 transition">
                <FaXTwitter size={24} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleNavigation('#home')}
                  className="text-gray-400 hover:text-red-400 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-red-400 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('#services')}
                  className="text-gray-400 hover:text-red-400 transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('#achievements')}
                  className="text-gray-400 hover:text-red-400 transition-colors"
                >
                  Achievements
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('#contact')}
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
                <a href="tel:8494924909" className="hover:text-red-400 transition-colors">
                  +91 84949 24909
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242.9090000812091!2d77.74523949984685!3d13.064671907329695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae0f001b8588a7%3A0xdec3d7059b20ed68!2sTitanK%20Entertainment!5e0!3m2!1sen!2sin!4v1766220497358!5m2!1sen!2sin"
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