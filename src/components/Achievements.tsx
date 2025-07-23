import React from 'react';
import { Star, Users, Calendar, Trophy } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Star className="h-8 w-8 text-red-400" />,
      number: "10,000+",
      label: "Concert Attendees",
      description: "Successfully hosted Anuv Jain's concert with over 10,000 attendees"
    },
    {
      icon: <Calendar className="h-8 w-8 text-red-500" />,
      number: "2025",
      label: "Yaari Jam",
      description: "Anuv Jain's concert in Hyderabad on 25th January 2025"
    },
    {
      icon: <Users className="h-8 w-8 text-red-600" />,
      number: "95%",
      label: "Artist Network",
      description: "Direct access to 95% of artists in India through exclusive partnerships"
    },
    {
      icon: <Trophy className="h-8 w-8 text-red-300" />,
      number: "100%",
      label: "Success Rate",
      description: "Strong reputation for delivering high-energy, immersive events"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-300 mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center bg-gray-800/50 p-8 rounded-xl backdrop-blur-sm border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 group">
              <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {achievement.icon}
              </div>
              <div className="text-4xl font-bold text-white mb-2">{achievement.number}</div>
              <div className="text-lg font-semibold text-red-400 mb-3">{achievement.label}</div>
              <p className="text-gray-400 text-sm leading-relaxed">{achievement.description}</p>
            </div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src={`${import.meta.env.BASE_URL}anuv.jpg`}
              alt="Concert Performance"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-6">Key Highlights</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                <p className="text-gray-300">Successfully hosted Anuv Jain's concert in Hyderabad on 25th January 2025 (Yaari Jam)</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2"></div>
                <p className="text-gray-300">Over 10,000 attendees participated in this concert, highlighting significant impact and widespread appeal</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                <p className="text-gray-300">Partnered with leading brands, venues, and artists to elevate India's live entertainment scene</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-300 rounded-full mt-2"></div>
                <p className="text-gray-300">Built a strong reputation for delivering high-energy, immersive events</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;