import React, { useState, useEffect } from 'react';
import { Menu, X, Music } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src={`${import.meta.env.BASE_URL}tkicon.png`}
              alt="TitanK Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="text-2xl font-bold text-white">TITANK ENTERTAINMENT</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-white hover:text-red-400 transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              if (!isMenuOpen) {
                window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top when opening menu
                setTimeout(() => {
                  setIsMenuOpen(true);
                }, 500);
              } else {
                setIsMenuOpen(false);
              }
            }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
{isMenuOpen && (
  <>
    {/* Prevent page scroll */}
    <style>{`body { overflow: hidden; }`}</style>

    {/* Background overlay */}
    <div className="fixed inset-0 bg-black/90 z-40 transition-opacity duration-300" />

    {/* Slide-in Menu */}
    <nav className="fixed inset-0 z-50 flex flex-col items-center justify-center space-y-6 md:hidden transition-all duration-300 animate-fade-in">
      {/* Close (X) button */}
      <button
        onClick={() => setIsMenuOpen(false)}
        className="absolute top-6 right-6 text-white hover:text-red-400 transition-colors"
      >
        <X size={30} />
      </button>

      {navItems.map((item) => (
        <button
          key={item.name}
          onClick={() => {
            scrollToSection(item.href);
            setIsMenuOpen(false);
          }}
          className="text-white text-2xl hover:text-red-400 transition-colors duration-200"
        >
          {item.name}
        </button>
      ))}
    </nav>
  </>
)}


      </div>
    </header>
  );
};

export default Header;