import { useState } from 'react';
import { X, ExternalLink, Filter } from 'lucide-react';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "Mindful Coaching Platform",
      category: "coaching",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      description: "A comprehensive coaching platform with automated booking, client management, and payment processing.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
      features: ["Online Booking", "Payment Integration", "Client Portal", "Calendar Sync"],
      client: "Sarah Johnson, Life Coach"
    },
    {
      id: 2,
      title: "Bean & Brew Cafe",
      category: "cafe",
      image: "https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      description: "Modern cafe website with online ordering system and loyalty program integration.",
      technologies: ["React", "Express", "MongoDB", "PayPal"],
      features: ["Online Ordering", "Menu Management", "Loyalty Program", "Mobile App"],
      client: "Mike Chen, Cafe Owner"
    },
    {
      id: 3,
      title: "FitLife Gym Management",
      category: "fitness",
      image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      description: "Complete gym management system with membership tracking and class scheduling.",
      technologies: ["Vue.js", "Laravel", "MySQL", "AWS"],
      features: ["Membership Management", "Class Booking", "Trainer Profiles", "Progress Tracking"],
      client: "Lisa Rodriguez, Gym Owner"
    },
    {
      id: 4,
      title: "QuickBite Canteen",
      category: "canteen",
      image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      description: "Digital canteen solution with pre-ordering and contactless payment system.",
      technologies: ["React Native", "Firebase", "Stripe", "PWA"],
      features: ["Pre-ordering", "Contactless Payment", "Inventory Management", "Analytics"],
      client: "David Park, Canteen Manager"
    },
    {
      id: 5,
      title: "TechTalks Academy",
      category: "coaching",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      description: "Online learning platform with course management and student progress tracking.",
      technologies: ["Next.js", "Python", "PostgreSQL", "Redis"],
      features: ["Course Management", "Video Streaming", "Progress Tracking", "Certificates"],
      client: "Emma Thompson, Educator"
    },
    {
      id: 6,
      title: "Artisan Coffee Co.",
      category: "cafe",
      image: "https://images.pexels.com/photos/1833586/pexels-photo-1833586.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      description: "Premium coffee brand website with e-commerce and subscription service.",
      technologies: ["Shopify", "React", "GraphQL", "Mailchimp"],
      features: ["E-commerce", "Subscription Service", "Brand Story", "Blog"],
      client: "James Wilson, Coffee Roaster"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'coaching', label: 'Coaching' },
    { id: 'cafe', label: 'Cafes & Restaurants' },
    { id: 'canteen', label: 'Canteens' },
    { id: 'fitness', label: 'Fitness & Health' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="pt-16">
      {/* Hero Section */}
<section className="relative py-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('waterm.png')" }}>
  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/90 via-white/80 to-purple-50/90"></div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
      Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Portfolio</span>
    </h1>
    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
      Discover how we've helped businesses transform their digital presence with beautiful websites and powerful automation systems.
    </p>
  </div>
</section>


      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-1 bg-gray-100 rounded-xl p-2 max-w-fit mx-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                  filter === category.id
                    ? 'bg-white text-blue-600 shadow-md'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <button className="w-full bg-white/90 backdrop-blur-sm text-gray-900 py-2 px-4 rounded-lg font-medium flex items-center justify-center space-x-2">
                        <span>View Details</span>
                        <ExternalLink className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-100 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 hover:bg-gray-100 rounded-xl transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-80 object-cover rounded-2xl mb-6"
              />
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Project Overview</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {selectedProject.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Client</h4>
                    <p className="text-gray-600">{selectedProject.client}</p>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
                    Request Similar Project
                  </button>
                </div>
                
                <div>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech: string, i: number) => (
                        <span
                          key={i}
                          className="px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                    <div className="space-y-2">
                      {selectedProject.features.map((feature: string, i: number) => (
                        <div key={i} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;