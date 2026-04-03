import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowRight } from 'lucide-react';
import Logo from './Logo';

const solutions = [
  { title: 'Surveillance Systems', href: '/solutions/surveillance-systems' },
  { title: 'Access & Security', href: '/solutions/access-security' },
  { title: 'Entrance & Traffic', href: '/solutions/entrance-traffic-control' },
  { title: 'PA & Communication', href: '/solutions/pa-communication' },
  { title: 'Automation & Time', href: '/solutions/automation-time-systems' },
  { title: 'Industrial Networking', href: '/solutions/industrial-networking' },
  { title: 'Safety & Detection', href: '/solutions/safety-detection' },
  { title: 'Parking Management', href: '/solutions/parking-management' },
  { title: 'Door Automation', href: '/solutions/door-automation' }
];

const quickLinks = [
  { title: 'Home', href: '/' },
  { title: 'About Us', href: '/about' },
  { title: 'Industries', href: '/industries' },
  { title: 'Projects', href: '/projects' },
  { title: 'Contact', href: '/contact' }
];

export default function Footer() {
  return (
    <footer className="bg-dark-lighter border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2 group">
              <Logo />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Leading provider of smart infrastructure, security automation, and advanced technology solutions.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-dark transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-dark transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-dark transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-dark transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-0.5 after:bg-primary">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-4">
              {quickLinks.map((link) => (
                <li key={link.title}>
                  <Link to={link.href} className="text-white/60 text-sm hover:text-primary hover:translate-x-1 transition-all inline-flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-0.5 after:bg-primary">
              Our Solutions
            </h4>
            <ul className="flex flex-col gap-4">
              {solutions.map((link) => (
                <li key={link.title}>
                  <Link to={link.href} className="text-white/60 text-sm hover:text-primary hover:translate-x-1 transition-all inline-flex items-center gap-2 group">
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 relative inline-block after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-1/2 after:h-0.5 after:bg-primary">
              Contact Us
            </h4>
            <ul className="flex flex-col gap-6">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white/60 text-sm">Business Centre, Sharjah Publishing City Free Zone,</span>
                  <span className="text-white/60 text-sm">Sharjah, United Arab Emirates</span>
                </div>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white/60 text-sm">+971 52 152 2409</span>
                </div>
              </li>
              <li className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white/60 text-sm">info@k3-technologies.com</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs text-center md:text-left">
            © 2026 K3 Technologies FZC. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <Link to="/privacy" className="text-white/40 text-xs hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-white/40 text-xs hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
