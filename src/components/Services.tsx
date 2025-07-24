import { Calendar, Users, Mic, Megaphone, MapPin, TrendingUp, Database, Lightbulb } from 'lucide-react';

const Services = () => {
  const eventServices = [
    {
      icon: <Calendar className="h-8 w-8 text-red-500" />,
      title: "Concert Planning & Execution",
      description: "Full-scale event management, from concept to execution, ensuring a flawless experience."
    },
    {
      icon: <Users className="h-8 w-8 text-red-400" />,
      title: "Artist Booking & Management",
      description: "Securing top national and international artists for electrifying live performances."
    },
    {
      icon: <Mic className="h-8 w-8 text-red-600" />,
      title: "Production & Technical Support",
      description: "High-end audio, lighting, video, and stage design to enhance every concert experience."
    },
    {
      icon: <Megaphone className="h-8 w-8 text-red-300" />,
      title: "Sponsorship & Marketing",
      description: "Strategic brand partnerships and marketing campaigns to maximize event reach and engagement."
    },
    {
      icon: <MapPin className="h-8 w-8 text-red-700" />,
      title: "Venue & Logistics Management",
      description: "Handling all aspects of venue selection, crowd control, and operational logistics."
    }
  ];

  const consultingServices = [
    {
      icon: <TrendingUp className="h-8 w-8 text-red-500" />,
      title: "Digital Transformation",
      description: "Empowering businesses to navigate modern market complexities with innovative solutions."
    },
    {
      icon: <Database className="h-8 w-8 text-red-400" />,
      title: "Data-Driven Solutions",
      description: "Providing actionable insights that drive growth, efficiency, and sustainable success."
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-red-600" />,
      title: "Strategic Consulting",
      description: "Tailored consulting services to help clients achieve their strategic objectives."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">Do</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-300 mx-auto mb-8"></div>
        </div>
        
        {/* Event Management Services */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Event Management Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-red-900/20 to-gray-900/20 p-8 rounded-xl border border-red-500/20 hover:border-red-500/50 transition-all duration-300 group hover:transform hover:-translate-y-2">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-semibold text-white mb-4">{service.title}</h4>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Digital Transformation Consulting */}
        <div>
          <h3 className="text-3xl font-bold text-white mb-6 text-center">Digital Transformation Consulting</h3>
          <div className="text-center mb-12">
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Titank Entertainment is a forward-thinking consulting firm dedicated to empowering businesses and organizations to navigate the complexities of the modern market. Our mission is to provide innovative, data-driven solutions that drive growth, efficiency, and sustainable success for our clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {consultingServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-red-900/20 to-gray-900/20 p-8 rounded-xl border border-red-500/20 hover:border-red-500/50 transition-all duration-300 group hover:transform hover:-translate-y-2">
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h4 className="text-xl font-semibold text-white mb-4">{service.title}</h4>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;