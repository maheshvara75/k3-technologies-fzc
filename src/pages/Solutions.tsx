import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Shield, Zap, Cpu, BarChart3, Globe, Smartphone, Lock, Settings } from 'lucide-react';
import PageTransition from '@/components/PageTransition';

const solutionsData: Record<string, any> = {
  'surveillance-systems': {
    title: 'Surveillance Systems',
    description: 'Advanced video monitoring solutions including CCTV, DVR, NVR, and AI-powered analytics for comprehensive security.',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1200',
    features: [
      'High-Definition CCTV Cameras',
      'DVR & NVR Recording Systems',
      'PTZ (Pan-Tilt-Zoom) Cameras',
      'Mobile Surveillance Units',
      'Body-Worn Cameras',
      'AI Video Analytics'
    ],
    benefits: [
      '24/7 Real-time Monitoring',
      'Evidence Collection & Storage',
      'Remote Access via Mobile/Web',
      'Deterrence of Criminal Activity',
      'Automated Threat Detection'
    ],
    icon: <Globe className="w-12 h-12" />
  },
  'access-security': {
    title: 'Access & Security',
    description: 'Sophisticated access control and security systems to manage entry points and protect sensitive areas.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&fit=crop&q=80&w=1200',
    features: [
      'Biometric Access Control',
      'RFID Card Systems',
      'Smart Digital Locks',
      'Intrusion Alarm Systems',
      'Video Door Phones',
      'Digital & Fireproof Safes'
    ],
    benefits: [
      'Restricted Area Management',
      'Audit Trails of Entry/Exit',
      'Keyless Convenience',
      'Instant Security Alerts',
      'Enhanced Asset Protection'
    ],
    icon: <Lock className="w-12 h-12" />
  },
  'entrance-traffic-control': {
    title: 'Entrance & Traffic Control',
    description: 'Robust physical barriers and traffic management systems for secure and efficient vehicle and pedestrian flow.',
    image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&q=80&w=1200',
    features: [
      'Automatic Boom Barriers',
      'Hydraulic Bollards',
      'Road Blockers & Tyre Killers',
      'Pedestrian Turnstiles',
      'Automatic Sliding Gates',
      'Integrated Parking Systems'
    ],
    benefits: [
      'Controlled Vehicle Access',
      'High-Impact Physical Security',
      'Efficient Traffic Management',
      'Pedestrian Flow Control',
      'Seamless Integration with Access Systems'
    ],
    icon: <Shield className="w-12 h-12" />
  },
  'pa-communication': {
    title: 'PA & Communication',
    description: 'Professional public address and voice evacuation systems for clear communication and emergency safety.',
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?auto=format&fit=crop&q=80&w=1200',
    features: [
      'Public Address (PA) Systems',
      'Voice Evacuation Systems',
      'High-Fidelity Audio Systems',
      'IP-based Intercoms',
      'Background Music Integration',
      'Multi-zone Paging'
    ],
    benefits: [
      'Clear Emergency Announcements',
      'Efficient Mass Communication',
      'Enhanced Public Safety',
      'Superior Audio Quality',
      'Scalable Network Architecture'
    ],
    icon: <Globe className="w-12 h-12" />
  },
  'automation-time-systems': {
    title: 'Automation & Time Systems',
    description: 'Smart home automation and advanced time and attendance tracking for modern living and efficient workforce management.',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1200',
    features: [
      'Smart Home Automation',
      'Biometric Time & Attendance',
      'Cloud-based Attendance Tracking',
      'Lighting & Climate Control',
      'Automated Scheduling',
      'Integration with HR Systems'
    ],
    benefits: [
      'Improved Operational Efficiency',
      'Enhanced Living Comfort',
      'Accurate Workforce Tracking',
      'Energy Savings',
      'Simplified Management'
    ],
    icon: <Zap className="w-12 h-12" />
  },
  'industrial-networking': {
    title: 'Industrial & Networking',
    description: 'Reliable networking infrastructure and industrial-grade components for robust data communication.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=1200',
    features: [
      'Managed Network Switches',
      'Fiber Optic & Telecom Cables',
      'Server Racks & Enclosures',
      'Industrial Connectors',
      'Uninterrupted Power Supplies (UPS)',
      'Structured Cabling Solutions'
    ],
    benefits: [
      'High-Speed Data Transfer',
      'Network Reliability & Uptime',
      'Organized Infrastructure',
      'Industrial-grade Durability',
      'Scalable Network Growth'
    ],
    icon: <Cpu className="w-12 h-12" />
  },
  'safety-detection': {
    title: 'Safety & Detection',
    description: 'Advanced safety systems including fire detection, scanners, and sensors to protect people and property.',
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?auto=format&fit=crop&q=80&w=1200',
    features: [
      'Fire Safety & Smoke Detection',
      'Walk-through Metal Detectors',
      'X-Ray Baggage Scanners',
      'Under Vehicle Surveillance (UVSS)',
      'ANPR Systems',
      'Industrial Safety Sensors'
    ],
    benefits: [
      'Early Fire Detection',
      'High-throughput Security Screening',
      'Comprehensive Threat Scanning',
      'Automated Vehicle Identification',
      'Enhanced Life Safety'
    ],
    icon: <Shield className="w-12 h-12" />
  },
  'parking-management': {
    title: 'Parking Management System',
    description: 'A comprehensive solution for efficient parking operations, revenue control, and seamless user experience.',
    image: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&q=80&w=1200',
    features: [
      'Automated Ticketing Systems',
      'RFID & Long Range Readers',
      'ANPR (Automatic Number Plate Recognition)',
      'Payment Gateway Integration',
      'Mobile App for Users',
      'Real-time Analytics Dashboard'
    ],
    benefits: [
      'Increased Revenue Control',
      'Reduced Operational Costs',
      'Enhanced User Satisfaction',
      'Improved Traffic Flow',
      'Detailed Reporting & Insights'
    ],
    icon: <BarChart3 className="w-12 h-12" />
  },
  'parking-guidance': {
    title: 'Parking Guidance System',
    description: 'Real-time slot availability monitoring and dynamic LED indicators to guide drivers to the nearest open spot.',
    image: 'https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&q=80&w=1200',
    features: [
      'Ultrasonic & Camera-based Sensors',
      'Dynamic LED Indicators (Red/Green)',
      'Digital Display Signage',
      'Centralized Monitoring Software',
      'Integration with Mobile Apps',
      'Historical Data Analysis'
    ],
    benefits: [
      'Reduced Search Time',
      'Lower Carbon Emissions',
      'Optimized Space Utilization',
      'Stress-free Parking Experience',
      'Enhanced Facility Reputation'
    ],
    icon: <Globe className="w-12 h-12" />
  },
  'smart-city': {
    title: 'Smart City Parking Solutions',
    description: 'IoT-integrated centralized monitoring and management for urban parking infrastructure across the city.',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=1200',
    features: [
      'City-wide IoT Sensor Network',
      'Centralized Command Center',
      'Public Parking Mobile App',
      'On-street & Off-street Integration',
      'Predictive Analytics for Demand',
      'Multi-modal Integration'
    ],
    benefits: [
      'Reduced Urban Congestion',
      'Improved City Planning',
      'Sustainable Urban Mobility',
      'Efficient Resource Allocation',
      'Enhanced Citizen Convenience'
    ],
    icon: <Cpu className="w-12 h-12" />
  },
  'door-automation': {
    title: 'Door Automation Systems',
    description: 'Intelligent sliding and sensor-based door solutions for commercial and industrial applications.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200',
    features: [
      'Automatic Sliding Doors',
      'Sensor-based Swing Doors',
      'Industrial Roller Shutters',
      'Revolving Door Automation',
      'Touchless Access Sensors',
      'Safety & Emergency Integration'
    ],
    benefits: [
      'Improved Energy Efficiency',
      'Enhanced Accessibility',
      'Modern Aesthetic Appeal',
      'Hygienic Touchless Operation',
      'Smooth & Quiet Performance'
    ],
    icon: <Zap className="w-12 h-12" />
  }
};

export default function Solutions() {
  const { id } = useParams();
  const solution = id ? solutionsData[id] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!solution) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Solution not found</h1>
      </div>
    );
  }

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={solution.image} 
            alt={solution.title} 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/90 to-dark" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="w-20 h-20 bg-primary/10 rounded-3xl flex items-center justify-center text-primary mx-auto mb-8"
            >
              {solution.icon}
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl lg:text-6xl font-bold mb-8"
            >
              {solution.title}
            </motion.h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
              {solution.description}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Features */}
            <div className="glass-morphism p-10 rounded-[3rem] border-white/5">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
                <Settings className="w-8 h-8 text-primary" />
                Key Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {solution.features.map((feature: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 transition-all group">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-1 group-hover:scale-110 transition-transform" />
                    <span className="text-white/70 text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="glass-morphism p-10 rounded-[3rem] border-white/5">
              <h2 className="text-3xl font-bold mb-8 flex items-center gap-4">
                <Zap className="w-8 h-8 text-primary" />
                Key Benefits
              </h2>
              <div className="space-y-6">
                {solution.benefits.map((benefit: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-6 p-6 rounded-2xl bg-primary/5 border border-primary/10 hover:bg-primary/10 transition-all">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                      {idx + 1}
                    </div>
                    <span className="text-white text-lg font-semibold">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-dark-lighter">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto glass-morphism p-12 lg:p-20 rounded-[3rem] text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full -mr-32 -mt-32" />
            <div className="relative z-10">
              <h2 className="text-3xl lg:text-5xl font-bold mb-8">Interested in this Solution?</h2>
              <p className="text-white/60 text-lg mb-12">
                Our experts are ready to help you design the perfect system for your infrastructure.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <Link 
                  to="/contact" 
                  className="bg-primary text-dark px-10 py-5 rounded-full font-bold hover:bg-white transition-all neon-glow flex items-center gap-2"
                >
                  Request a Demo <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  to="/contact" 
                  className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-full font-bold hover:bg-white/10 transition-all"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Solutions */}
      <section className="py-24 bg-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="text-3xl font-bold mb-12">Explore Other Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.keys(solutionsData)
              .filter(key => key !== id)
              .slice(0, 4)
              .map((key) => (
                <Link 
                  key={key}
                  to={`/solutions/${key}`}
                  className="glass-morphism p-8 rounded-3xl group hover:border-primary/50 transition-all"
                >
                  <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">{solutionsData[key].title}</h3>
                  <p className="text-white/50 text-xs leading-relaxed mb-6 line-clamp-2">
                    {solutionsData[key].description}
                  </p>
                  <span className="text-primary text-xs font-bold flex items-center gap-2">
                    Learn More <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
