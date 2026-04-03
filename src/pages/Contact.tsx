import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send, CheckCircle, MessageCircle, Globe, Clock } from 'lucide-react';
import PageTransition from '@/components/PageTransition';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

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
              Get in <span className="text-primary">Touch</span>
            </motion.h1>
            <p className="text-white/60 text-lg leading-relaxed">
              Have a question or ready to start your project? Our team of experts is here to assist you with your smart infrastructure needs.
            </p>
          </div>
        </div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full z-0" />
      </section>

      {/* Contact Grid */}
      <section className="py-24 bg-dark">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8">
              <div className="glass-morphism p-8 rounded-3xl border-white/5">
                <h3 className="text-2xl font-bold mb-8">Contact Information</h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-dark transition-all duration-500">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Call Us</h4>
                      <p className="text-white/50 text-sm">+971 52 152 2409</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-dark transition-all duration-500">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Email Us</h4>
                      <p className="text-white/50 text-sm">info@k3-technologies.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-dark transition-all duration-500">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Our Location</h4>
                      <p className="text-white/50 text-sm leading-relaxed">
                        Business Centre, Sharjah Publishing City Free Zone,<br />
                        Sharjah, United Arab Emirates
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-dark transition-all duration-500">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">Working Hours</h4>
                      <p className="text-white/50 text-sm">Mon - Fri: 09:30 AM - 06:30 PM</p>
                      <p className="text-white/50 text-sm">Sat - Sun: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="glass-morphism p-8 rounded-3xl border-white/5 bg-primary/5">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 text-primary" />
                  Live Chat
                </h4>
                <p className="text-white/60 text-sm mb-6 leading-relaxed">
                  Need immediate assistance? Our support team is available for live chat on WhatsApp.
                </p>
                <a 
                  href="https://wa.me/971521522409" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white px-6 py-3 rounded-xl font-bold text-sm inline-flex items-center gap-2 hover:shadow-[0_0_15px_rgba(37,211,102,0.5)] transition-all"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="glass-morphism p-10 lg:p-16 rounded-[3rem] border-white/5 relative overflow-hidden">
                {!isSubmitted ? (
                  <>
                    <h3 className="text-3xl font-bold mb-8">Send Us a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-primary uppercase tracking-widest">Full Name</label>
                          <input 
                            required
                            type="text" 
                            placeholder="John Doe"
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-primary outline-none transition-colors"
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-primary uppercase tracking-widest">Email Address</label>
                          <input 
                            required
                            type="email" 
                            placeholder="info@k3-technologies.com"
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-primary outline-none transition-colors"
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-primary uppercase tracking-widest">Phone Number</label>
                          <input 
                            required
                            type="tel" 
                            placeholder="+971 52 152 2409"
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-primary outline-none transition-colors"
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs font-bold text-primary uppercase tracking-widest">Subject</label>
                          <select 
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-primary outline-none transition-colors appearance-none"
                            value={formData.subject}
                            onChange={(e) => setFormData({...formData, subject: e.target.value})}
                          >
                            <option value="General Inquiry">General Inquiry</option>
                            <option value="Sales">Sales Inquiry</option>
                            <option value="Technical Support">Technical Support</option>
                            <option value="Partnership">Partnership</option>
                          </select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-bold text-primary uppercase tracking-widest">Your Message</label>
                        <textarea 
                          required
                          rows={6}
                          placeholder="Tell us about your project or requirements..."
                          className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-sm focus:border-primary outline-none transition-colors resize-none"
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                        />
                      </div>

                      <button 
                        type="submit"
                        className="w-full bg-primary text-dark py-5 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-white transition-all neon-glow text-lg"
                      >
                        <Send className="w-5 h-5" />
                        Send Message
                      </button>
                    </form>
                  </>
                ) : (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-20 flex flex-col items-center text-center gap-6"
                  >
                    <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                      <CheckCircle className="w-12 h-12 text-primary" />
                    </div>
                    <h3 className="text-4xl font-bold text-white">Message Sent!</h3>
                    <p className="text-white/60 text-lg max-w-md mx-auto">
                      Thank you for reaching out. Our team has received your message and will get back to you shortly.
                    </p>
                    <button 
                      onClick={() => setIsSubmitted(false)}
                      className="text-primary font-bold hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-dark-lighter">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="rounded-[3rem] overflow-hidden h-[500px] border border-white/10 relative">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.123456789012!2d55.270782!3d25.204849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a462cc5%3A0xb72730490520af00!2sDubai%20Design%20District!5e0!3m2!1sen!2sae!4v1620000000000!5m2!1sen!2sae" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }} 
              allowFullScreen={true} 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className="absolute top-10 left-10 glass-morphism p-6 rounded-3xl max-w-xs hidden md:block">
              <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                Global Headquarters
              </h4>
              <p className="text-white/60 text-xs leading-relaxed">
                Visit us at our state-of-the-art innovation center where we design the future of smart cities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
