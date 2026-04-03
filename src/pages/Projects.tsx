import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '@/components/PageTransition';

const projects = [
  {
    title: 'Smart City Hub - Dubai',
    category: 'Smart City Parking',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1200',
    problem: 'High traffic congestion and lack of real-time parking data across the city center.',
    solution: 'Deployment of 5,000+ IoT sensors and a centralized command center for real-time monitoring.',
    outcome: '35% reduction in traffic congestion and 20% increase in parking revenue.'
  },
  {
    title: 'International Airport Terminal',
    category: 'Parking Guidance & Security',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109c0f3?auto=format&fit=crop&q=80&w=1200',
    problem: 'Complex parking layout leading to passenger stress and security vulnerabilities.',
    solution: 'Integrated parking guidance with LED indicators and advanced perimeter security barriers.',
    outcome: 'Average parking time reduced from 12 mins to 4 mins. Enhanced security compliance.'
  },
  {
    title: 'Global Tech Park',
    category: 'Perimeter Security & Access Control',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
    problem: 'Unauthorized access and slow employee entry during peak hours.',
    solution: 'AI-based ANPR systems and high-speed hydraulic bollards for seamless access.',
    outcome: 'Zero unauthorized entries reported. 50% faster entry for employees.'
  },
  {
    title: 'Luxury Retail Mall',
    category: 'Parking Management System',
    image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&q=80&w=1200',
    problem: 'Revenue leakage and poor visitor experience due to manual ticketing.',
    solution: 'Fully automated ticketing and mobile payment integration with RFID access.',
    outcome: 'Eliminated revenue leakage. 95% positive visitor feedback on parking.'
  }
];

export default function Projects() {
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
              Our <span className="text-primary">Success Stories</span>
            </motion.h1>
            <p className="text-white/60 text-lg leading-relaxed">
              Explore how we've helped organizations worldwide transform their infrastructure with smart technology and automation.
            </p>
          </div>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full z-0" />
      </section>

      {/* Projects List */}
      <section className="py-24 bg-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="space-y-24">
            {projects.map((project, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row gap-12 items-center ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image */}
                <div className="flex-1 relative group">
                  <div className="aspect-[16/10] rounded-[3rem] overflow-hidden border border-white/10">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 lg:bottom-10 lg:right-10 glass-morphism p-6 rounded-3xl shadow-2xl">
                    <span className="text-primary text-xs font-bold uppercase tracking-widest">{project.category}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-8">
                  <h2 className="text-3xl lg:text-5xl font-bold text-white">{project.title}</h2>
                  
                  <div className="space-y-6">
                    <div className="flex gap-6">
                      <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white/40 shrink-0">
                        <span className="font-bold">01</span>
                      </div>
                      <div>
                        <h4 className="text-primary font-bold uppercase text-xs tracking-widest mb-2">The Problem</h4>
                        <p className="text-white/60 text-sm leading-relaxed">{project.problem}</p>
                      </div>
                    </div>

                    <div className="flex gap-6">
                      <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-white/40 shrink-0">
                        <span className="font-bold">02</span>
                      </div>
                      <div>
                        <h4 className="text-primary font-bold uppercase text-xs tracking-widest mb-2">Our Solution</h4>
                        <p className="text-white/60 text-sm leading-relaxed">{project.solution}</p>
                      </div>
                    </div>

                    <div className="flex gap-6">
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-primary font-bold uppercase text-xs tracking-widest mb-2">The Outcome</h4>
                        <p className="text-white/90 text-sm font-semibold leading-relaxed">{project.outcome}</p>
                      </div>
                    </div>
                  </div>

                  <button className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all flex items-center gap-2">
                    View Case Study <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-dark-lighter">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-5xl font-bold mb-8">Have a Similar Project?</h2>
          <p className="text-white/60 text-lg mb-12 max-w-2xl mx-auto">
            Let's discuss how our technology can solve your infrastructure challenges and drive results.
          </p>
          <Link 
            to="/contact" 
            className="bg-primary text-dark px-10 py-5 rounded-full font-bold hover:bg-white transition-all neon-glow inline-flex items-center gap-2"
          >
            Start a Consultation <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </PageTransition>
  );
}
