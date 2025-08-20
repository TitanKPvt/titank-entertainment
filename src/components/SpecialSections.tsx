import {TrendingUp, Award, Lightbulb, Users } from 'lucide-react';

const SpecialSections = () => {
  const whyChooseUs = [
    {
      icon: <Award className="h-8 w-8 text-red-500" />,
      title: "Expertise",
      description: "Our team comprises seasoned professionals with deep expertise across various industries, ensuring that our clients receive the highest level of service and insight."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-red-400" />,
      title: "Innovation",
      description: "We stay ahead of the curve by continuously exploring new technologies, methodologies, and market trends to provide cutting-edge solutions."
    },
    {
      icon: <Users className="h-8 w-8 text-red-600" />,
      title: "Client-Centric",
      description: "We prioritize our clients' needs, working collaboratively to deliver solutions that are not only effective but also aligned with their strategic goals."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4">
        {/* Artist Booking Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">Artist Booking</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-300 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="recording-studio.webp"
                alt="Recording Studio"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <img src={`${import.meta.env.BASE_URL}tkmod3.webp`} alt="Artist Network" className="h-16 w-16 object-contain" />
                <h3 className="text-2xl font-bold text-white">Exclusive Artist Network</h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                Through our exclusive partnership with a leading talent agency that represents 95% of artists in India, we have direct access to top-tier performers.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                For the remaining 5%, our extensive industry network enables us to secure any artist, ensuring a seamless and unparalleled entertainment experience.
              </p>
            </div>
          </div>
        </div>
        
        {/* Market Research Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Market <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">Research</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-300 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <TrendingUp className="h-8 w-8 text-red-500" />
                <h3 className="text-2xl font-bold text-white">Deep Market Insights</h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed">
                We provide deep market insights through comprehensive research and analytics.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Our team delivers actionable data that helps clients understand market trends, customer behaviour, and competitive dynamics, enabling them to make informed decisions and stay ahead of the curve.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Market Research"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
        
        {/* Why Choose Us Section */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">Us?</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-300 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 group hover:transform hover:-translate-y-2">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold text-white mb-4">{item.title}</h4>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialSections;