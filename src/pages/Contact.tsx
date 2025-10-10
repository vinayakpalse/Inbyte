import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Custom Website Development',
    'Website Automation',
    'Mobile App Development',
    'SEO Optimization',
    'Maintenance & Support',
    'Other'
  ];

  const contactInfo = [
    { icon: Mail, title: 'Email Us', details: 'inbyte.access@gmail.com', description: 'Send us an email anytime!' },
    //{ icon: Phone, title: 'Call Us', details: 'NA', description: 'Mon-Fri from 9am to 6pm' },
    { icon: MapPin, title: 'Visit Us', details: 'Katraj,Pune', description: 'Come say hello at our office' },
    { icon: Clock, title: 'Working Hours', details: 'Mon - Fri: 9:00 AM - 6:00 PM', description: 'Weekend support available' }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);

    emailjs.sendForm(
      'service_sf2kuhx',     // Replace with your EmailJS Service ID
      'template_09l0sha',    // Replace with your EmailJS Template ID
      formRef.current,
      'Cld-sf-2QDn8HvnyP'      // Replace with your EmailJS Public Key
    )
    .then(() => {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    })
    .catch((err) => {
      console.error('EmailJS error:', err);
      alert('Something went wrong. Please try again.');
    })
    .finally(() => setIsSubmitting(false));
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get In <span className="text-cyan-400">Touch</span></h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Ready to start your project? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="bg-white rounded-xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send Us a Message</h2>

              {isSubmitted ? (
                <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-600">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" placeholder="John Doe"/>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" placeholder="john@example.com"/>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                      <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" placeholder="+1 (555) 123-4567"/>
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company/Business</label>
                      <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200" placeholder="Your Business Name"/>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">Service Interested In</label>
                    <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200">
                      <option value="">Select a service</option>
                      {services.map((service) => (<option key={service} value={service}>{service}</option>))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Project Details *</label>
                    <textarea id="message" name="message" required rows={6} value={formData.message} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none" placeholder="Tell us about your project, goals, and any specific requirements..."></textarea>
                  </div>

                  <button type="submit" disabled={isSubmitting} className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center">
                    {isSubmitting ? <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div> : <><Send className="ml-2 h-5 w-5"/> Send Message</>}
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div initial={{ x: 30, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-lg text-gray-600 mb-8">We're here to help bring your digital vision to life. Reach out through any of these channels.</p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <motion.div key={index} initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="flex items-start">
                        <div className="bg-blue-100 p-3 rounded-lg"><Icon className="h-6 w-6 text-blue-600"/></div>
                        <div className="ml-4">
                          <h3 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h3>
                          <p className="text-gray-900 font-medium mb-1">{info.details}</p>
                          <p className="text-gray-600 text-sm">{info.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Map
              <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.7 }} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2"/>
                    <p className="text-gray-500">Interactive Map</p>
                    <p className="text-sm text-gray-400">123 Tech Street, Digital City, DC 12345</p>
                  </div>
                </div>
              </motion.div> */}

              {/* Social Links */}
              {/* <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.4, delay: 0.8 }} className="bg-white rounded-lg p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((platform) => (
                    <a key={platform} href="#" className="bg-blue-100 hover:bg-blue-200 p-3 rounded-lg transition-colors duration-200">
                      <span className="text-blue-600 font-medium text-sm">{platform}</span>
                    </a>
                  ))}
                </div>
              </motion.div> */}
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
