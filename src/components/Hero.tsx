import { ChevronRight, Play } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={`${import.meta.env.BASE_URL}cover-page.webp`}
          alt="Concert Background"
          className="w-full h-full object-cover opacity-69"
          loading="eager"
          fetchPriority='high'
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          TITANK
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-300">
            ENTERTAINMENT
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Premier Event Management for World-Class Concerts & Live Entertainment
        </p>
        
        <div className="mb-12">
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Welcome to TitanK Entertainment, your gateway to unforgettable live experiences and innovative business solutions. We specialize in curating high-energy concerts and empowering businesses through strategic digital transformation.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            onClick={() => scrollToSection('#achievements')}
            className="group bg-gradient-to-r from-red-600 to-red-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-red-700 hover:to-red-600 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span>Explore Our Events</span>
            <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
          
          <button 
            onClick={() => scrollToSection('#services')}
            className="group border-2 border-red-500 text-red-500 px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-500 hover:text-white transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Play size={20} />
            <span>Our Services</span>
          </button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-red-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-red-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;