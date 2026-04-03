import React from 'react';
import { motion } from 'motion/react';
import { Target, Eye, Award, Users, ShieldCheck, Zap } from 'lucide-react';
import PageTransition from '@/components/PageTransition';

const values = [
  { icon: <Target className="w-8 h-8" />, title: 'Our Mission', text: 'To provide innovative, reliable, and sustainable smart parking and security solutions that enhance urban living and operational efficiency.' },
  { icon: <Eye className="w-8 h-8" />, title: 'Our Vision', text: 'To be the global leader in smart infrastructure automation, setting new standards for safety, convenience, and technology integration.' },
  { icon: <Award className="w-8 h-8" />, title: 'Our Expertise', text: 'With over 15 years in the industry, we bring deep technical knowledge and a proven track record of successful large-scale implementations.' }
];

const timeline = [
  { year: '2010', title: 'Company Founded', desc: 'Started with a focus on basic parking management systems.' },
  { year: '2014', title: 'Smart City Expansion', desc: 'Launched IoT-integrated solutions for urban parking.' },
  { year: '2018', title: 'Security Integration', desc: 'Added advanced perimeter security and surveillance systems.' },
  { year: '2022', title: 'AI & Automation', desc: 'Pioneered AI-driven parking guidance and door automation.' },
  { year: '2026', title: 'Global Presence', desc: 'Serving 50+ cities across 10 countries with 500+ projects.' }
];

export default function About() {
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
              Innovating the Future of <br />
              <span className="text-primary">Smart Infrastructure</span>
            </motion.h1>
            <p className="text-white/60 text-lg leading-relaxed">
              K3 Technologies FZC is a leading technology provider specializing in automated parking management and perimeter security. We combine cutting-edge hardware with intelligent software to create seamless, secure environments for modern cities and businesses.
            </p>
          </div>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full z-0" />
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-dark-lighter">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, idx) => (
              <div key={idx} className="glass-morphism p-10 rounded-3xl border-white/5 hover:border-primary/30 transition-all group">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-dark transition-all duration-500">
                  {v.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{v.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Our Journey</h2>
            <p className="text-white/60">A decade and a half of innovation and excellence.</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-white/10 hidden md:block" />
            
            <div className="space-y-12">
              {timeline.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="flex-1 text-center md:text-left">
                    <div className={`glass-morphism p-8 rounded-3xl ${idx % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <span className="text-primary font-bold text-2xl mb-2 block">{item.year}</span>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-white/50 text-sm">{item.desc}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-primary rounded-full relative z-10 hidden md:block shadow-[0_0_15px_rgba(0,255,102,0.8)]" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-24 bg-dark-lighter">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-5xl font-bold mb-8">Why We Are Different</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: <ShieldCheck className="w-6 h-6" />, title: 'Certified Security', desc: 'All our systems meet international security standards.' },
                  { icon: <Zap className="w-6 h-6" />, title: 'Rapid Innovation', desc: 'Continuous R&D to stay ahead of infrastructure trends.' },
                  { icon: <Users className="w-6 h-6" />, title: 'Client-Centric', desc: 'Solutions tailored to your specific operational needs.' },
                  { icon: <Award className="w-6 h-6" />, title: 'Global Standards', desc: 'Adhering to the highest quality benchmarks globally.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                      {item.icon}
                    </div>
                    <h4 className="text-lg font-bold">{item.title}</h4>
                    <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" 
                alt="Expertise" 
                className="rounded-3xl shadow-2xl border border-white/10"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary p-8 rounded-3xl text-dark font-bold shadow-2xl">
                <span className="text-4xl block">15+</span>
                <span className="text-sm uppercase tracking-widest">Years of Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
