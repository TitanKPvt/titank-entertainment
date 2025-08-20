import { useState, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

// Types
export type NavItem =
  | { name: string; type: 'scroll'; href: string }
  | { name: string; type: 'route'; path: string };

// --- MobileMenu rendered via React Portal so it's NOT constrained by any parent/stacking context ---
function MobileMenu({
  open,
  onClose,
  navItems,
  onScrollNav,
}: {
  open: boolean;
  onClose: () => void;
  navItems: NavItem[];
  onScrollNav: (href: string) => void;
}) {
  // Create container once
  const container = useMemo(() => {
    const el = document.createElement('div');
    el.setAttribute('data-portal', 'mobile-menu');
    return el;
  }, []);

  useEffect(() => {
    document.body.appendChild(container);
    return () => {
      try {
        document.body.removeChild(container);
      } catch (_) {
        /* no-op */
      }
    };
  }, [container]);

  // Lock background scroll while open
  useEffect(() => {
    if (!open) return;
    const { body, documentElement: html } = document;
    const prevBodyOverflow = body.style.overflow;
    const prevHtmlOverflow = html.style.overflow;
    const prevTouchAction = body.style.touchAction;

    body.style.overflow = 'hidden';
    html.style.overflow = 'hidden';
    body.style.touchAction = 'none';

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);

    return () => {
      body.style.overflow = prevBodyOverflow;
      html.style.overflow = prevHtmlOverflow;
      body.style.touchAction = prevTouchAction;
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  const content = (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            className="fixed inset-0 z-[9998] bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          />

          {/* Menu Sheet */}
          <motion.div
            className="fixed inset-0 z-[9999] md:hidden flex flex-col items-center justify-center space-y-6 select-none"
            style={{
              minHeight: '100dvh',
              paddingTop: 'env(safe-area-inset-top)',
              paddingBottom: 'env(safe-area-inset-bottom)',
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-white hover:text-red-400"
              aria-label="Close menu"
            >
              <X size={30} />
            </button>

            {navItems.map((item) =>
              item.type === 'scroll' ? (
                <button
                  key={item.name}
                  onClick={() => onScrollNav(item.href)}
                  className="text-white text-2xl hover:text-red-400"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={onClose}
                  className="text-white text-2xl hover:text-red-400"
                >
                  {item.name}
                </Link>
              )
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );

  return createPortal(content, container);
}

// --- Header ---
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu automatically on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navItems: NavItem[] = [
    { name: 'Home', type: 'scroll', href: '#home' },
    { name: 'About', type: 'route', path: '/about' },
    { name: 'Services', type: 'route', path: '/services' },
    { name: 'Achievements', type: 'route', path: '/achievements' },
    { name: 'Contact', type: 'route', path: '/contact' },
  ];

  const handleScrollNav = (href: string) => {
    const close = () => setIsMenuOpen(false);

    if (location.pathname !== '/') {
      navigate('/');
      // Smooth-scroll after navigation settles
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 120);
      close();
      return;
    }

    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    close();
  };

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={handleLogoClick}
          >
            <img
              src={`${import.meta.env.BASE_URL}tkmod3.webp`}
              alt="TitanK Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="text-2xl font-bold text-white">TITANK ENTERTAINMENT</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) =>
              item.type === 'scroll' ? (
                <button
                  key={item.name}
                  onClick={() => handleScrollNav(item.href)}
                  className="text-white hover:text-red-400 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </button>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className="text-white hover:text-red-400 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </Link>
              )
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Open menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu via Portal */}
      <MobileMenu
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        navItems={navItems}
        onScrollNav={handleScrollNav}
      />
    </header>
  );
}
