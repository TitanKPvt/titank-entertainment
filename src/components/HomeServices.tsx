import { Calendar, Users, Mic, Megaphone, MapPin } from 'lucide-react';

const HomeServices = () => {
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

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What We <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">Do</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-300 mx-auto mb-8"></div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-white mb-12 text-center">Event Management Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventServices.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-red-900/20 to-gray-900/20 p-8 rounded-xl border border-red-500/20 hover:border-red-500/50 transition-all duration-300 group hover:transform hover:-translate-y-2"
              >
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

export default HomeServices;
