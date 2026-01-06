'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar, Clock, Users, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      // Prevent scrolling
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
      
      return () => {
        // Restore scroll position when modal closes
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    specialRequests: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        specialRequests: '',
      });
      onClose();
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Get today's date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0];
  
  // Get minimum date (today)
  const minDate = today;
  
  // Get maximum date (90 days from now)
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 90);
  const maxDateString = maxDate.toISOString().split('T')[0];

  // Available time slots
  const timeSlots = [
    '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
    '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM',
    '8:00 PM', '8:30 PM', '9:00 PM'
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-5"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-6 md:pt-8 pointer-events-none overflow-hidden"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden pointer-events-auto flex flex-col max-h-[calc(110vh-3rem)]"
            >
              {/* Header */}
              <div className="relative bg-gradient-to-r from-[var(--color-canoe-orange)] to-[var(--color-canoe-red)] p-5 md:p-6 text-white flex-shrink-0">
                <button
                  onClick={onClose}
                  className="absolute top-3 right-3 md:top-4 md:right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-all duration-300 hover:scale-110 group z-10"
                >
                  <X className="w-4 h-4 md:w-5 md:h-5 group-hover:rotate-90 transition-transform duration-300" />
                </button>
                
                <div className="pr-10">
                  <h2 className="font-display text-2xl md:text-3xl lg:text-4xl mb-1">Book a Table</h2>
                  <p className="font-sans text-xs md:text-sm text-white/90">
                    Reserve your spot at Canoe Club
                  </p>
                </div>
              </div>

              {/* Content - Scrollable */}
              <div className="p-5 md:p-6 overflow-y-auto flex-1 min-h-0">
                    {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-8 flex flex-col items-center justify-center h-full"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                      className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4"
                    >
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </motion.div>
                    <h3 className="font-display text-2xl md:text-3xl text-[var(--color-dark-charcoal)] mb-2">
                      Reservation Requested!
                    </h3>
                    <p className="font-sans text-sm text-gray-600 mb-2">
                      We've received your booking request for
                    </p>
                    <p className="font-serif text-base font-semibold text-[var(--color-canoe-orange)] mb-4">
                      {formData.date} at {formData.time}
                    </p>
                    <p className="font-sans text-xs text-gray-500">
                      We'll confirm your reservation via email or phone within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block font-sans text-xs font-semibold text-[var(--color-dark-charcoal)] mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 focus:border-[var(--color-canoe-orange)] focus:outline-none transition-colors font-sans text-sm"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email & Phone Row */}
                    <div className="grid md:grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="email" className="block font-sans text-xs font-semibold text-[var(--color-dark-charcoal)] mb-1.5">
                          <Mail className="w-3 h-3 inline mr-1" />
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 focus:border-[var(--color-canoe-orange)] focus:outline-none transition-colors font-sans text-sm"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block font-sans text-xs font-semibold text-[var(--color-dark-charcoal)] mb-1.5">
                          <Phone className="w-3 h-3 inline mr-1" />
                          Phone *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 focus:border-[var(--color-canoe-orange)] focus:outline-none transition-colors font-sans text-sm"
                          placeholder="(816) 555-1234"
                        />
                      </div>
                    </div>

                    {/* Date & Time Row */}
                    <div className="grid md:grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="date" className="block font-sans text-xs font-semibold text-[var(--color-dark-charcoal)] mb-1.5">
                          <Calendar className="w-3 h-3 inline mr-1" />
                          Date *
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          required
                          value={formData.date}
                          onChange={handleChange}
                          min={minDate}
                          max={maxDateString}
                          className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 focus:border-[var(--color-canoe-orange)] focus:outline-none transition-colors font-sans text-sm"
                        />
                      </div>
                      <div>
                        <label htmlFor="time" className="block font-sans text-xs font-semibold text-[var(--color-dark-charcoal)] mb-1.5">
                          <Clock className="w-3 h-3 inline mr-1" />
                          Time *
                        </label>
                        <select
                          id="time"
                          name="time"
                          required
                          value={formData.time}
                          onChange={handleChange}
                          className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 focus:border-[var(--color-canoe-orange)] focus:outline-none transition-colors font-sans bg-white text-sm"
                        >
                          <option value="">Select time</option>
                          {timeSlots.map((time) => (
                            <option key={time} value={time}>
                              {time}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Guests */}
                    <div>
                      <label htmlFor="guests" className="block font-sans text-xs font-semibold text-[var(--color-dark-charcoal)] mb-1.5">
                        <Users className="w-3 h-3 inline mr-1" />
                        Number of Guests *
                      </label>
                      <select
                        id="guests"
                        name="guests"
                        required
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 focus:border-[var(--color-canoe-orange)] focus:outline-none transition-colors font-sans bg-white text-sm"
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num) => (
                          <option key={num} value={num}>
                            {num} {num === 1 ? 'Guest' : 'Guests'}
                          </option>
                        ))}
                        <option value="13+">13+ Guests (Please call)</option>
                      </select>
                    </div>

                    {/* Special Requests */}
                    <div>
                      <label htmlFor="specialRequests" className="block font-sans text-xs font-semibold text-[var(--color-dark-charcoal)] mb-1.5">
                        Special Requests (Optional)
                      </label>
                      <textarea
                        id="specialRequests"
                        name="specialRequests"
                        value={formData.specialRequests}
                        onChange={handleChange}
                        rows={2}
                        className="w-full px-3 py-2 rounded-lg border-2 border-gray-200 focus:border-[var(--color-canoe-orange)] focus:outline-none transition-colors font-sans resize-none text-sm"
                        placeholder="Dietary restrictions, celebration, seating preferences..."
                      />
                    </div>

                    {/* Info Note */}
                    <div className="bg-[var(--color-cream)] border-l-4 border-[var(--color-canoe-orange)] p-3 rounded-lg">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-[var(--color-canoe-orange)] flex-shrink-0 mt-0.5" />
                        <div className="text-xs font-sans text-gray-700">
                          <p className="font-semibold mb-1">Location</p>
                          <p className="text-xs">27905 E Colbern Rd, Lake Lotawana, MO 64086</p>
                          <p className="mt-1.5 text-xs text-gray-600">
                            For parties of 13+ or same-day reservations, please call us at{' '}
                            <a href="tel:8165785700" className="text-[var(--color-canoe-orange)] hover:underline">
                              (816) 578-5700
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex gap-3 pt-3 border-t border-gray-100 mt-2">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={onClose}
                        className="flex-1 border-2 border-gray-300 text-gray-700 hover:bg-gray-50"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 bg-[var(--color-canoe-orange)] hover:bg-[var(--color-canoe-red)] text-white font-sans uppercase tracking-wider shadow-lg shadow-[var(--color-canoe-orange)]/30 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                            />
                            Submitting...
                          </span>
                        ) : (
                          'Request Reservation'
                        )}
                      </Button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

