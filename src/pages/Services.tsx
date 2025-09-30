import { Link } from 'react-router-dom';
//import { ArrowRight } from 'lucide-react'; // make sure ArrowRight is imported


import { useState } from 'react';
import { Globe, Zap, Palette, Shield, Search, Smartphone, ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  const services = [
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Website Development",
      shortDesc: "Modern, responsive websites that convert visitors into customers",
      detailedDesc: "We create stunning, high-performance websites using the latest technologies. From simple landing pages to complex web applications, we ensure your site loads fast, looks great, and drives results.",
      features: ["Responsive Design", "Fast Loading", "SEO Optimized", "Modern UI/UX"],
      pricing: "Starting at $1,500"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Automation Systems",
      shortDesc: "Streamline your business with powerful automation tools",
      detailedDesc: "Transform your manual processes with intelligent automation. We build custom systems for bookings, payments, notifications, and more, saving you time and reducing errors.",
      features: ["Booking Automation", "Payment Processing", "Email Notifications", "Data Integration"],
      pricing: "Starting at $2,000"
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "UI/UX Design",
      shortDesc: "Beautiful designs that enhance user experience",
      detailedDesc: "Our design team creates intuitive, visually stunning interfaces that guide users naturally through your site. We focus on usability, accessibility, and brand consistency.",
      features: ["User Research", "Wireframing", "Prototyping", "Brand Integration"],
      pricing: "Starting at $1,000"
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Security & Maintenance",
      shortDesc: "Keep your website secure and running smoothly",
      detailedDesc: "Protect your investment with our comprehensive security and maintenance services. We monitor, update, and secure your site 24/7, so you can focus on your business.",
      features: ["Security Monitoring", "Regular Updates", "Backup Services", "Performance Optimization"],
      pricing: "Starting at $200/month"
    },
    {
      icon: <Search className="w-12 h-12" />,
      title: "SEO Optimization",
      shortDesc: "Get found by customers searching for your services",
      detailedDesc: "Improve your search engine rankings with our proven SEO strategies. We optimize your content, structure, and performance to drive more organic traffic.",
      features: ["Keyword Research", "On-page SEO", "Technical SEO", "Content Strategy"],
      pricing: "Starting at $800/month"
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile Apps",
      shortDesc: "Extend your reach with native mobile applications",
      detailedDesc: "Engage customers on-the-go with custom mobile apps. We develop native iOS and Android apps that integrate seamlessly with your existing systems.",
      features: ["Native Development", "Cross-platform", "Push Notifications", "Offline Support"],
      pricing: "Starting at $5,000"
    }
  ];

  const stats = [
    { number: "150+", label: "Websites Created" },
    { number: "80+", label: "Automations Implemented" },
    { number: "99%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center bg-no-repeat min-h-[80vh] py-20"
        style={{ backgroundImage: "url('/waterm.png')" }}
      >
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Services</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Comprehensive web solutions designed to help your business grow and succeed in the digital world.
          </p>

          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/20 rounded-2xl p-6 shadow-lg backdrop-blur-md">
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-2xl text-gray-600 leading-relaxed mb-8">
              "Helping small businesses grow with professional web solutions that drive real results and create lasting success."
            </p>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                We believe every business deserves a professional online presence. Our team combines technical expertise with creative vision to deliver solutions that not only look great but also drive growth, improve efficiency, and enhance customer experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Complete digital solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative h-80 cursor-pointer"
                onMouseEnter={() => setFlippedCard(index)}
                onMouseLeave={() => setFlippedCard(null)}
              >
                <div className={`absolute inset-0 w-full h-full transition-transform duration-700 transform-style-preserve-3d ${flippedCard === index ? 'rotate-y-180' : ''
                  }`}>
                  {/* Front of card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden bg-white rounded-3xl p-8 shadow-lg flex flex-col justify-center text-center">
                    <div className="text-blue-600 mb-6 flex justify-center">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.shortDesc}</p>
                  </div>

                  {/* Back of card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-8 shadow-lg text-white flex flex-col">
                    <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                    <p className="text-blue-100 text-sm mb-4 flex-grow">{service.detailedDesc}</p>
                    <div className="space-y-2 mb-4">
                      {service.features.slice(0, 3).map((feature, i) => (
                        <div key={i} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-300" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-lg font-bold text-yellow-300">{service.pricing}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              How we transform your ideas into digital reality
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "We learn about your business, goals, and requirements through detailed consultation."
              },
              {
                step: "02",
                title: "Planning",
                description: "We create a comprehensive plan with timeline, milestones, and deliverables."
              },
              {
                step: "03",
                title: "Development",
                description: "Our team builds your solution using best practices and modern technologies."
              },
              {
                step: "04",
                title: "Launch & Support",
                description: "We deploy your solution and provide ongoing support and maintenance."
              }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mb-6 mx-auto">
                  {phase.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{phase.title}</h3>
                <p className="text-gray-600 leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
<section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 className="text-4xl font-bold text-white mb-6">
      Ready to Transform Your Business?
    </h2>
    <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
      Let's discuss your project and create a solution that drives real results for your business.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      {/* Link styled as button */}
         <Link
           to="/contact"
          className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors duration-300"
         >
          <span>Get Free Consultation</span>
           <ArrowRight className="w-5 h-5" />
         </Link>

          {/* Regular button */}
          <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
           View Pricing
         </button>
        </div>
       </div>
      </section>

    </div>
  );
};

export default Services;