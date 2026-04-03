import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Shield, Zap, Cpu, BarChart3, Globe, Users, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';

const solutions = [
  {
    title: 'Surveillance Systems',
    icon: <Globe className="w-8 h-8" />,
    description: 'Advanced CCTV, DVR, NVR, and AI-powered video analytics for 24/7 security.',
    href: '/solutions/surveillance-systems'
  },
  {
    title: 'Access & Security',
    icon: <Shield className="w-8 h-8" />,
    description: 'Biometric, RFID, and smart lock systems for comprehensive access control.',
    href: '/solutions/access-security'
  },
  {
    title: 'Entrance & Traffic',
    icon: <Zap className="w-8 h-8" />,
    description: 'Automatic boom barriers, bollards, and turnstiles for efficient traffic flow.',
    href: '/solutions/entrance-traffic-control'
  },
  {
    title: 'PA & Communication',
    icon: <Globe className="w-8 h-8" />,
    description: 'Professional public address and voice evacuation systems for clear communication.',
    href: '/solutions/pa-communication'
  },
  {
    title: 'Automation & Time',
    icon: <Zap className="w-8 h-8" />,
    description: 'Smart home automation and advanced time & attendance tracking solutions.',
    href: '/solutions/automation-time-systems'
  },
  {
    title: 'Industrial Networking',
    icon: <Cpu className="w-8 h-8" />,
    description: 'Robust networking infrastructure including switches, fiber, and server racks.',
    href: '/solutions/industrial-networking'
  },
  {
    title: 'Safety & Detection',
    icon: <Shield className="w-8 h-8" />,
    description: 'Fire safety, metal detectors, and baggage scanners for public safety.',
    href: '/solutions/safety-detection'
  },
  {
    title: 'Parking Management',
    icon: <BarChart3 className="w-8 h-8" />,
    description: 'Complete revenue control and efficiency with ticketing and ANPR integration.',
    href: '/solutions/parking-management'
  }
];

const industries = [
  { name: 'Smart Cities', image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=800' },
  { name: 'Airports', image: 'https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?auto=format&fit=crop&q=80&w=800' },
  { name: 'Malls', image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&q=80&w=800' },
  { name: 'Hospitals', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800' },
  { name: 'Residential', image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800' }
];

const stats = [
  { label: 'Projects Completed', value: '500+' },
  { label: 'Cities Covered', value: '50+' },
  { label: 'Satisfied Clients', value: '200+' },
  { label: 'Years Experience', value: '15+' }
];

export default function Home() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=1920" 
            alt="Smart City" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest rounded-full border border-primary/20 mb-6">
                Next-Gen Infrastructure
              </span>
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
                Smart Parking & <br />
                <span className="text-primary">Security Solutions</span> <br />
                for Modern Cities
              </h1>
              <p className="text-lg text-white/70 mb-10 leading-relaxed max-w-xl">
                Transforming infrastructure with AI-powered parking management and perimeter security automation. Efficiency, safety, and seamless integration at your fingertips.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/contact" 
                  className="bg-primary text-dark px-8 py-4 rounded-full font-bold hover:bg-white transition-all neon-glow flex items-center gap-2"
                >
                  Get a Quote <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  to="/solutions/parking-management" 
                  className="bg-white/5 backdrop-blur-md border border-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all"
                >
                  Explore Solutions
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Floating Stats */}
        <div className="absolute bottom-10 left-0 w-full hidden lg:block">
          <div className="container mx-auto px-8">
            <div className="grid grid-cols-4 gap-8 glass-morphism p-8 rounded-3xl">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center border-r last:border-0 border-white/10">
                  <h3 className="text-3xl font-bold text-primary mb-1">{stat.value}</h3>
                  <p className="text-xs text-white/50 uppercase tracking-widest font-semibold">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24 bg-dark relative">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Our Advanced Solutions</h2>
            <p className="text-white/60">Comprehensive technology stack designed to optimize space, enhance security, and improve user experience.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((solution, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-morphism p-8 rounded-3xl group hover:border-primary/50 transition-all"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-dark transition-all duration-500">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{solution.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  {solution.description}
                </p>
                <Link to={solution.href} className="text-primary text-sm font-bold flex items-center gap-2 group/link">
                  Learn More <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-dark-lighter">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col lg:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">Industries We Serve</h2>
              <p className="text-white/60">Tailored solutions for diverse sectors, ensuring maximum ROI and operational excellence.</p>
            </div>
            <Link to="/industries" className="text-primary font-bold flex items-center gap-2 hover:underline">
              View All Industries <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {industries.map((industry, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative h-80 rounded-3xl overflow-hidden group cursor-pointer"
              >
                <img 
                  src={industry.image} 
                  alt={industry.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <h4 className="text-xl font-bold text-white">{industry.name}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1000" 
                  alt="Technology" 
                  className="w-full h-full object-cover opacity-60"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-primary/20 blur-[100px] rounded-full z-0" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center">
                <div className="glass-morphism p-8 rounded-3xl max-w-xs text-center">
                  <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="text-xl font-bold mb-2">Fast Deployment</h4>
                  <p className="text-white/50 text-sm">Rapid implementation with minimal disruption to operations.</p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-8">Why Choose K3 Technologies?</h2>
              <div className="space-y-8">
                {[
                  { title: 'Proven Expertise', desc: 'Over 15 years of experience in smart infrastructure and automation.' },
                  { title: 'Cutting-Edge Tech', desc: 'We use the latest AI and IoT technologies for superior performance.' },
                  { title: '24/7 Support', desc: 'Dedicated support team ensuring your systems run smoothly around the clock.' },
                  { title: 'Scalable Solutions', desc: 'Our systems grow with your needs, from single lots to city-wide networks.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-dark-lighter overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">What Our Clients Say</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Michael Chen', role: 'Smart City Director', text: 'K3 Technologies transformed our urban parking management. Revenue increased by 30% in the first quarter.' },
              { name: 'Sarah Johnson', role: 'Mall Operations Manager', text: 'The parking guidance system has significantly improved customer satisfaction. No more circling for spots!' },
              { name: 'David Miller', role: 'Security Head, IT Park', text: 'Their perimeter security solutions are top-notch. The integration with our existing systems was seamless.' }
            ].map((t, idx) => (
              <div key={idx} className="glass-morphism p-8 rounded-3xl relative">
                <div className="text-primary text-5xl font-serif absolute top-4 right-8 opacity-20">"</div>
                <p className="text-white/70 italic mb-8 relative z-10 leading-relaxed">
                  {t.text}
                </p>
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-primary text-xs font-semibold uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="bg-primary rounded-[3rem] p-12 lg:p-20 relative overflow-hidden text-center">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl lg:text-6xl font-bold text-dark mb-8">Ready to Automate Your Infrastructure?</h2>
              <p className="text-dark/70 text-lg mb-10 font-medium">
                Join hundreds of organizations that trust K3 Technologies for their parking and security needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link 
                  to="/contact" 
                  className="bg-dark text-white px-10 py-5 rounded-full font-bold hover:bg-dark/90 transition-all shadow-2xl flex items-center gap-2"
                >
                  Get Started Now <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  to="/solutions/parking-management" 
                  className="bg-transparent border-2 border-dark/20 text-dark px-10 py-5 rounded-full font-bold hover:bg-dark/10 transition-all"
                >
                  View Solutions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
