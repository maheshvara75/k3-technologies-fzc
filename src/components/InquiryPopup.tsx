import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';

export default function InquiryPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    solution: 'Parking Management',
    message: ''
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = localStorage.getItem('hasSeenPopup');
      if (!hasSeenPopup) {
        setIsOpen(true);
        localStorage.setItem('hasSeenPopup', 'true');
      }
    }, 10000); // Show after 10 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-dark/80 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg glass-morphism rounded-3xl overflow-hidden shadow-2xl"
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-8">
              {!isSubmitted ? (
                <>
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">Request a Demo</h3>
                    <p className="text-white/60 text-sm">Experience the future of smart parking and security solutions.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-primary uppercase tracking-wider">Full Name</label>
                        <input 
                          required
                          type="text" 
                          placeholder="John Doe"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary outline-none transition-colors"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-primary uppercase tracking-wider">Phone Number</label>
                        <input 
                          required
                          type="tel" 
                          placeholder="+971 52 152 2409"
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary outline-none transition-colors"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-primary uppercase tracking-wider">Email Address</label>
                      <input 
                        required
                        type="email" 
                        placeholder="john@example.com"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary outline-none transition-colors"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-primary uppercase tracking-wider">Interested Solution</label>
                      <select 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary outline-none transition-colors appearance-none"
                        value={formData.solution}
                        onChange={(e) => setFormData({...formData, solution: e.target.value})}
                      >
                        <option value="Parking Management">Parking Management System</option>
                        <option value="Parking Guidance">Parking Guidance System</option>
                        <option value="Smart City">Smart City Solutions</option>
                        <option value="Perimeter Security">Perimeter Security</option>
                        <option value="Door Automation">Door Automation</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-semibold text-primary uppercase tracking-wider">Message</label>
                      <textarea 
                        rows={3}
                        placeholder="Tell us about your requirements..."
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary outline-none transition-colors resize-none"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                      />
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-primary text-dark py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-white transition-all neon-glow mt-4"
                    >
                      <Send className="w-4 h-4" />
                      Submit Inquiry
                    </button>
                  </form>
                </>
              ) : (
                <div className="py-12 flex flex-col items-center text-center gap-4">
                  <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Inquiry Received!</h3>
                  <p className="text-white/60">Thank you for your interest. Our team will contact you within 24 hours.</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
