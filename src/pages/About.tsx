import { useState } from 'react';
import { Users, Award, Coffee, Rocket, CheckCircle } from 'lucide-react';

const About = () => {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);

  const teamMembers = [
    {
      name: "Vinayak Palse",
      role: "Full-Stack Developer",
      expertise: "React, Node.js,Problem Solving",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      description: "Full-stack developer with 8+ years of experience building scalable web applications."
    },
    {
      name: "Shivam Mishal",
      role: "Full-Stack Developer",
      expertise: "Design Systems, Figma, User Research",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      description: "Creative designer focused on creating intuitive and beautiful user experiences."
    },
    {
      name: "Pranav Moralwar",
      role: "Full-Stack Developer",
      expertise: "Backend Integration, PostgreSQL, Docker",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop",
      description: "Backend expert specializing in automation systems and database architecture."
    }
  ];

  const skills = [
    { name: "Frontend Development", percentage: 95 },
    { name: "Backend Development", percentage: 90 },
    { name: "UI/UX Design", percentage: 88 },
    { name: "Automation Systems", percentage: 85 },
    { name: "SEO Optimization", percentage: 82 },
    { name: "Database Design", percentage: 88 }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "5+", label: "Happy Clients" },
    { icon: <Award className="w-8 h-8" />, number: "10+", label: "Projects Completed" },
    { icon: <Coffee className="w-8 h-8" />, number: "1000+", label: "Cups of Coffee" },
    { icon: <Rocket className="w-8 h-8" />, number: "3+", label: "Years Experience" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('waterm.png')" }}>
  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-white/80 to-purple-50/90"></div>
  
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
        Meet Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expert Team</span>
      </h1>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        We're passionate web developers and automation experts dedicated to helping small businesses succeed in the digital world.
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl text-blue-600 mb-4">
            {stat.icon}
          </div>
          <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
          <div className="text-gray-600 font-medium">{stat.label}</div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Team Members */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Amazing Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Meet the talented individuals who make your digital dreams come true
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">

            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="relative group cursor-pointer"
                onMouseEnter={() => setHoveredMember(index)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative mb-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full mx-auto object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                    <p className="text-sm text-gray-500 mb-4">{member.expertise}</p>
                    
                    <div className={`transition-all duration-300 ${
                      hoveredMember === index ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0'
                    } overflow-hidden`}>
                      <p className="text-sm text-gray-600">{member.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Expertise */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Expertise & Technologies
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We stay current with the latest technologies and best practices to deliver cutting-edge solutions for your business.
              </p>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">{skill.name}</span>
                      <span className="text-blue-600 font-semibold">{skill.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-3xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
                <div className="space-y-4">
                  {[
                    "3+ years of industry experience",
                    "100% client satisfaction rate",
                    "24/7 support and maintenance",
                    "Cutting-edge technologies",
                    "SEO-optimized solutions",
                    "Mobile-first approach"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full opacity-50 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-green-200 to-teal-200 rounded-full opacity-50 animate-bounce"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Our Mission</h2>
          <p className="text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            "To empower small businesses with professional web solutions that drive growth, enhance customer experience, and create lasting digital success."
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;