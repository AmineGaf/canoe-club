'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { RESTAURANT_INFO, HOURS } from '@/lib/constants';
import { Map } from '@/components/Map';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/indoor-image.png')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-gradient-to-br from-lake-blue via-forest-green to-dark-charcoal" />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center px-4 sm:px-6">
          <h1 className="display-text text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-4 drop-shadow-2xl">
            CONTACT US
          </h1>
          <p className="font-merriweather text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto drop-shadow-lg">
            We'd love to hear from you
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6 mb-16">
            {[
              { icon: MapPin, title: 'Address', content: [RESTAURANT_INFO.address, RESTAURANT_INFO.location] },
              { icon: Phone, title: 'Phone', content: [RESTAURANT_INFO.phone], link: `tel:${RESTAURANT_INFO.phone.replace(/\D/g, '')}` },
              { icon: Mail, title: 'Email', content: [RESTAURANT_INFO.email], link: `mailto:${RESTAURANT_INFO.email}` },
            ].map((item, i) => (
              <div key={i} className="text-center p-6 bg-cream rounded-xl hover:shadow-md transition-shadow duration-300">
                <div className="w-16 h-16 bg-sunset-orange/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon size={32} className="text-sunset-orange" />
                </div>
                <h3 className="font-merriweather text-lg font-semibold mb-3 text-dark-charcoal">{item.title}</h3>
                {item.link ? (
                  <a href={item.link} className="font-inter text-sm text-sunset-orange hover:text-copper transition-colors break-all">
                    {item.content[0]}
                  </a>
                ) : (
                  item.content.map((line, j) => (
                    <p key={j} className="font-inter text-sm text-medium-gray leading-relaxed">{line}</p>
                  ))
                )}
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="font-merriweather text-3xl sm:text-4xl font-semibold mb-6 text-dark-charcoal">Send Us a Message</h2>
              {submitted ? (
                <div className="bg-forest-green/10 border-2 border-forest-green rounded-xl p-8 text-center">
                  <p className="text-forest-green font-semibold text-lg">
                    Thank you! Your message has been sent. We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {['name', 'email', 'phone'].map((field) => (
                    <div key={field}>
                      <label htmlFor={field} className="block text-sm font-semibold text-dark-charcoal mb-2 font-inter capitalize">
                        {field === 'phone' ? 'Phone (Optional)' : `${field} *`}
                      </label>
                      <input
                        type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                        id={field}
                        name={field}
                        required={field !== 'phone'}
                        value={formData[field as keyof typeof formData]}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border-2 border-light-gray focus:border-sunset-orange focus:outline-none transition-colors font-inter"
                      />
                    </div>
                  ))}
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-dark-charcoal mb-2 font-inter">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-light-gray focus:border-sunset-orange focus:outline-none transition-colors bg-white font-inter"
                    >
                      <option value="">Select a subject</option>
                      <option value="reservation">Reservation</option>
                      <option value="private-event">Private Event Booking</option>
                      <option value="membership">Membership Inquiry</option>
                      <option value="general">General Inquiry</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-dark-charcoal mb-2 font-inter">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-light-gray focus:border-sunset-orange focus:outline-none transition-colors resize-none font-inter"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-sunset-orange text-white hover:bg-copper transition-all duration-300 rounded-lg font-inter font-medium uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
                  >
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Hours & Map */}
            <div>
              <h2 className="font-merriweather text-3xl sm:text-4xl font-semibold mb-6 text-dark-charcoal">Hours & Location</h2>
              
              <div className="bg-cream rounded-xl p-6 mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock size={24} className="text-sunset-orange" />
                  <h3 className="font-merriweather text-xl font-semibold text-dark-charcoal">Operating Hours</h3>
                </div>
                <div className="space-y-3 text-medium-gray font-inter">
                  <div className="flex justify-between">
                    <span className="font-semibold text-dark-charcoal">Monday</span>
                    <span>{HOURS.springSummer.monday}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-dark-charcoal">Tuesday - Thursday</span>
                    <span>{HOURS.springSummer.tuesday}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-dark-charcoal">Friday - Saturday</span>
                    <span>{HOURS.springSummer.friday}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-dark-charcoal">Sunday</span>
                    <span>{HOURS.springSummer.sunday}</span>
                  </div>
                </div>
              </div>

              <div className="bg-cream rounded-xl p-6 mb-6">
                <h3 className="font-merriweather text-xl font-semibold mb-4 text-dark-charcoal">Get Directions</h3>
                <p className="font-inter text-medium-gray mb-4 text-sm leading-relaxed">
                  We're located at Gate 2 of Lake Lotawana, just off E Colbern Rd. 
                  Easy access from Kansas City, Lee's Summit, and Blue Springs.
                </p>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(RESTAURANT_INFO.address)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="px-6 py-3 border-2 border-sunset-orange text-sunset-orange hover:bg-sunset-orange hover:text-white transition-all duration-300 rounded-lg font-inter font-medium">
                    Open in Google Maps
                  </button>
                </a>
              </div>

              <Map height="400px" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

