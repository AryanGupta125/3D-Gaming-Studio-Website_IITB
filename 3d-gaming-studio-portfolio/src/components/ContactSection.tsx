import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Send, MapPin, Mail, Phone, CheckCircle, ArrowRight } from 'lucide-react';

export default function ContactSection() {
  const { ref: titleRef, isInView: titleInView } = useInView();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const inputClass = (field: string) =>
    `w-full bg-dark-800/50 border rounded-lg px-4 py-3 font-inter text-sm text-white placeholder-gray-600 outline-none transition-all duration-300 ${
      focusedField === field
        ? 'border-neon-cyan/50 shadow-[0_0_15px_rgba(0,240,255,0.1)]'
        : 'border-white/10 hover:border-white/20'
    }`;

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-neon-cyan/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-neon-purple/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div ref={titleRef} className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            className="font-rajdhani text-sm font-semibold tracking-[0.3em] text-neon-blue uppercase"
          >
            Get In Touch
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-black text-white mt-4"
          >
            CONTACT <span className="gradient-text">US</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={titleInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="w-24 h-0.5 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto mt-6"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="font-rajdhani text-2xl font-bold text-white mb-4">
                Let's Create Something <span className="text-neon-cyan">Amazing</span>
              </h3>
              <p className="font-inter text-sm text-gray-400 leading-relaxed">
                Whether you're looking to collaborate, join our team, or just want to say hello,
                we'd love to hear from you. Drop us a message and we'll get back to you soon.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {[
                { icon: MapPin, label: 'Location', value: 'San Francisco, CA', color: '#00f0ff' },
                { icon: Mail, label: 'Email', value: 'hello@nexusstudios.com', color: '#a855f7' },
                { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', color: '#ec4899' },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  className="flex items-center gap-4 p-4 rounded-xl bg-dark-800/30 border border-white/5 hover:border-white/10 transition-colors"
                  whileHover={{ x: 5 }}
                  data-cursor-hover
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      backgroundColor: `${item.color}10`,
                      border: `1px solid ${item.color}30`,
                    }}
                  >
                    <item.icon className="w-4 h-4" style={{ color: item.color }} />
                  </div>
                  <div>
                    <div className="font-rajdhani text-xs font-semibold uppercase tracking-wider text-gray-500">
                      {item.label}
                    </div>
                    <div className="font-inter text-sm text-white">{item.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="relative h-48 rounded-xl overflow-hidden border border-white/5">
              <div className="absolute inset-0 bg-dark-800/50 grid-bg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-8 h-8 text-neon-cyan mx-auto mb-2" />
                  <span className="font-rajdhani text-sm text-gray-400">San Francisco, CA</span>
                </div>
              </div>
              {/* Animated ping */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-4 h-4 rounded-full bg-neon-cyan/30 animate-ping" />
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-dark-800/30 backdrop-blur-sm border border-white/5 rounded-2xl p-8 md:p-10">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-20 text-center"
                >
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 0.5 }}
                  >
                    <CheckCircle className="w-16 h-16 text-neon-green mb-4" />
                  </motion.div>
                  <h4 className="font-orbitron text-2xl font-bold text-white mb-2">Message Sent!</h4>
                  <p className="font-inter text-gray-400">We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block font-rajdhani text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState(s => ({ ...s, name: e.target.value }))}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        className={inputClass('name')}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block font-rajdhani text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState(s => ({ ...s, email: e.target.value }))}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        className={inputClass('email')}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-rajdhani text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.subject}
                      onChange={(e) => setFormState(s => ({ ...s, subject: e.target.value }))}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      className={inputClass('subject')}
                      placeholder="Partnership Inquiry"
                    />
                  </div>

                  <div>
                    <label className="block font-rajdhani text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState(s => ({ ...s, message: e.target.value }))}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      className={`${inputClass('message')} resize-none`}
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="group w-full py-4 bg-gradient-to-r from-neon-cyan to-neon-blue text-dark-900 font-rajdhani font-bold text-sm tracking-wider uppercase rounded-lg flex items-center justify-center gap-2 transition-all duration-300"
                    whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0,240,255,0.3)' }}
                    whileTap={{ scale: 0.98 }}
                    data-cursor-hover
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
