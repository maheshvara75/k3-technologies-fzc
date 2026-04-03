import React from 'react';
import { motion } from 'motion/react';
import { Building2, Plane, Hospital, Home, Laptop, ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';

const industries = [
  {
    name: 'Smart Cities',
    icon: <Building2 className="w-10 h-10" />,
    description: 'City-wide integrated parking and security networks for urban optimization.',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=1200'
  },
  {
    name: 'Airports',
    icon: <Plane className="w-10 h-10" />,
    description: 'High-security perimeter control and large-scale parking guidance for travelers.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?auto=format&fit=crop&q=80&w=1200'
  },
  {
    name: 'Hospitals',
    icon: <Hospital className="w-10 h-10" />,
    description: 'Priority parking for emergency vehicles and seamless access for patients.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1200'
  },
  {
    name: 'Residential Societies',
    icon: <Home className="w-10 h-10" />,
    description: 'Secure access control and visitor management for gated communities.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200'
  },
  {
    name: 'IT Parks & Offices',
    icon: <Laptop className="w-10 h-10" />,
    description: 'Employee parking management and high-tech security for corporate hubs.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200'
  },
  {
    name: 'Commercial Malls',
    icon: <ShoppingBag className="w-10 h-10" />,
    description: 'Revenue-optimized parking and guidance systems for retail centers.',
    image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&q=80&w=1200'
  }
];

export default function Industries() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="py-24 bg-dark relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl lg:text-6xl font-bold mb-8"
            >
              Tailored Solutions for <br />
              <span className="text-primary">Every Industry</span>
            </motion.h1>
            <p className="text-white/60 text-lg leading-relaxed">
              We understand that every sector has unique challenges. Our modular systems are designed to adapt to the specific needs of your facility.
            </p>
          </div>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full z-0" />
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative overflow-hidden rounded-[3rem] glass-morphism border-white/5 hover:border-primary/30 transition-all"
              >
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={industry.image} 
                    alt={industry.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent" />
                  <div className="absolute top-6 right-6 w-16 h-16 bg-primary/90 backdrop-blur-md rounded-2xl flex items-center justify-center text-dark shadow-2xl">
                    {industry.icon}
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{industry.name}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-8">
                    {industry.description}
                  </p>
                  <Link 
                    to="/contact" 
                    className="inline-flex items-center gap-2 text-primary font-bold hover:underline group/link"
                  >
                    Discuss Your Project <ArrowRight className="w-5 h-5 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-dark-lighter">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-8">Global Impact Across Sectors</h2>
              <p className="text-white/60 mb-12 text-lg">
                Our solutions are deployed in some of the most challenging environments, providing reliability and security where it matters most.
              </p>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { label: 'Smart Cities', value: '50+' },
                  { label: 'Airports', value: '25+' },
                  { label: 'Hospitals', value: '100+' },
                  { label: 'Commercial Hubs', value: '300+' }
                ].map((stat, idx) => (
                  <div key={idx} className="glass-morphism p-6 rounded-3xl">
                    <h4 className="text-3xl font-bold text-primary mb-1">{stat.value}</h4>
                    <p className="text-xs text-white/50 uppercase tracking-widest font-semibold">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" 
                alt="Impact" 
                className="rounded-[3rem] shadow-2xl border border-white/10"
              />
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
