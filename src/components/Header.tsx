import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import Logo from './Logo';

const solutions = [
  {
    title: 'Surveillance Systems',
    description: 'CCTV, DVR, NVR, PTZ, AI Analytics',
    href: '/solutions/surveillance-systems',
    icon: '📹'
  },
  {
    title: 'Access & Security',
    description: 'RFID, Biometrics, Smart Locks',
    href: '/solutions/access-security',
    icon: '🔐'
  },
  {
    title: 'Entrance & Traffic',
    description: 'Barriers, Bollards, Turnstiles',
    href: '/solutions/entrance-traffic-control',
    icon: '🚧'
  },
  {
    title: 'PA & Communication',
    description: 'Public Address, Voice Evacuation',
    href: '/solutions/pa-communication',
    icon: '📢'
  },
  {
    title: 'Automation & Time',
    description: 'Home Automation, Attendance',
    href: '/solutions/automation-time-systems',
    icon: '🏠'
  },
  {
    title: 'Industrial Networking',
    description: 'Switches, Fiber, Racks',
    href: '/solutions/industrial-networking',
    icon: '🔌'
  },
  {
    title: 'Safety & Detection',
    description: 'Fire Safety, Scanners, Sensors',
    href: '/solutions/safety-detection',
    icon: '🛡️'
  },
  {
    title: 'Parking Management',
    description: 'Ticketing, RFID, ANPR',
    href: '/solutions/parking-management',
    icon: '🅿️'
  },
  {
    title: 'Parking Guidance',
    description: 'Real-time slot monitoring',
    href: '/solutions/parking-guidance',
    icon: '📍'
  },
  {
    title: 'Smart City Parking',
    description: 'IoT, Centralized monitoring',
    href: '/solutions/smart-city',
    icon: '🏙️'
  },
  {
    title: 'Door Automation',
    description: 'Sliding & sensor-based doors',
    href: '/solutions/door-automation',
    icon: '🚪'
  }
];

const industries = [
  'Smart Cities', 'Commercial Complexes', 'Airports', 'Hospitals', 'Residential Societies', 'IT Parks'
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveMegaMenu(null);
  }, [location]);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'bg-dark/90 backdrop-blur-lg py-3 shadow-xl' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">Home</Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary transition-colors">About Us</Link>
            
            {/* Mega Menu Trigger */}
            <div 
              className="relative group"
              onMouseEnter={() => setActiveMegaMenu('solutions')}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button className="flex items-center gap-1 text-sm font-medium hover:text-primary transition-colors">
                Solutions <ChevronDown className="w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {activeMegaMenu === 'solutions' && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[800px] glass-morphism rounded-2xl p-6 grid grid-cols-3 gap-4"
                  >
                    {solutions.map((solution) => (
                      <Link 
                        key={solution.title}
                        to={solution.href}
                        className="p-4 rounded-xl hover:bg-white/5 transition-colors group/item"
                      >
                        <div className="flex items-start gap-4">
                          <span className="text-2xl">{solution.icon}</span>
                          <div>
                            <h4 className="text-white font-semibold group-hover/item:text-primary transition-colors">{solution.title}</h4>
                            <p className="text-xs text-white/50 mt-1">{solution.description}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/industries" className="text-sm font-medium hover:text-primary transition-colors">Industries</Link>
            <Link to="/projects" className="text-sm font-medium hover:text-primary transition-colors">Projects</Link>
            <Link to="/contact" className="text-sm font-medium hover:text-primary transition-colors">Contact</Link>
          </nav>

          {/* CTA & Search */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="p-2 hover:bg-white/5 rounded-full transition-colors">
              <Search className="w-5 h-5 text-white/70" />
            </button>
            <Link 
              to="/contact" 
              className="bg-primary text-dark px-6 py-2.5 rounded-full text-sm font-bold hover:bg-white transition-all neon-glow"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-dark-lighter border-t border-white/10 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-8 flex flex-col gap-6">
              <Link to="/" className="text-lg font-medium">Home</Link>
              <Link to="/about" className="text-lg font-medium">About Us</Link>
              
              <div className="flex flex-col gap-4">
                <span className="text-xs font-bold text-primary uppercase tracking-widest">Solutions</span>
                <div className="grid gap-4 pl-4">
                  {solutions.map((s) => (
                    <Link key={s.title} to={s.href} className="text-white/70 hover:text-primary">{s.title}</Link>
                  ))}
                </div>
              </div>

              <Link to="/industries" className="text-lg font-medium">Industries</Link>
              <Link to="/projects" className="text-lg font-medium">Projects</Link>
              <Link to="/contact" className="text-lg font-medium">Contact</Link>
              
              <Link 
                to="/contact" 
                className="bg-primary text-dark text-center py-4 rounded-xl font-bold"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
