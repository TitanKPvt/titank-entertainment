import { Target, Eye, Users, Zap } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Target className="h-8 w-8 text-red-500" />,
      title: "Our Mission",
      description: "To curate and execute high-quality concerts featuring renowned artists and emerging talent, providing seamless event experiences with state-of-the-art production."
    },
    {
      icon: <Eye className="h-8 w-8 text-red-400" />,
      title: "Our Vision",
      description: "To be the leading name in the concert and live entertainment industry, bringing top-tier artists and unmatched production quality to audiences across the country."
    },
    {
      icon: <Users className="h-8 w-8 text-red-600" />,
      title: "Our Commitment",
      description: "As a startup, we are committed to delivering tailored consulting services that meet the unique needs of each client, helping them achieve their strategic objectives."
    },
    {
      icon: <Zap className="h-8 w-8 text-red-300" />,
      title: "Innovation",
      description: "We provide innovative, data-driven solutions that drive growth, efficiency, and sustainable success for our clients in an increasingly competitive environment."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">Us</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-300 mx-auto mb-8"></div>
        </div>
        
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Titank Entertainment is a premier event management company specializing in hosting world-class concerts and live entertainment experiences.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Based in Bengaluru, we are committed to delivering high-energy, immersive, and unforgettable events that captivate audiences and elevate the live music industry in India.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                As a forward-thinking consulting firm, Titank Entertainment is dedicated to empowering businesses and organizations to navigate the complexities of the modern market.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Concert Experience"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800/50 p-6 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 group">
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;