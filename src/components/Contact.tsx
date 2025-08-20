import React, { useState } from 'react';
import { Mail, Phone, Send, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    access_key: '0313fc15-72c6-4556-a9fb-f896dec7cec3'
  });

  const [showSuccessPopup, setShowSuccessPopup] = useState(false); // ✅ added

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();

      if (result.success) {
        // ✅ show popup instead of alert
        setShowSuccessPopup(true);
        setTimeout(() => setShowSuccessPopup(false), 3000);

        setFormData({
          name: '',
          email: '',
          message: '',
          access_key: '0313fc15-72c6-4556-a9fb-f896dec7cec3'
        });
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Reach <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">Out</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-300 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-red-500 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">General Inquiries</h4>
                    <p className="text-gray-400 mb-2">For general inquiries, partnership opportunities, and service requests. We aim to respond to all emails within 24 hours.</p>
                    <a href="mailto:titank.entertainment@gmail.com" className="text-red-400 hover:text-red-300 transition-colors">
                      titank.entertainment@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-red-400 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Contact</h4>
                    <p className="text-gray-400 mb-2">Call us at:</p>
                    <a href="tel:8494924909" className="text-red-400 hover:text-red-300 transition-colors">
                      +91 84949 24909
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-red-600 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Location</h4>
                    <p className="text-gray-400">Bengaluru, India</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-red-300 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">Response Time</h4>
                    <p className="text-gray-400">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700/50 relative">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200 resize-none"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-red-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-red-700 hover:to-red-600 transition-all duration-300 flex items-center justify-center space-x-2 group"
              >
                <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                <span>Send Message</span>
              </button>
            </form>

            {/* ✅ Success Popup goes here */}
            {showSuccessPopup && (
              <div className="fixed top-6 right-6 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center justify-between space-x-4 z-50">
                <span>✅ Message sent successfully!</span>
                <button onClick={() => setShowSuccessPopup(false)}>
                  <span className="text-white font-bold text-lg">&times;</span>
                </button>
              </div>
            )}
            {/* ✅ End popup */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
