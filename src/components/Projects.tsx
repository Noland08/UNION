import React, { useState } from 'react';
import { ExternalLink, Github, Play, Award, Calendar } from 'lucide-react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const projects = [
    {
      title: 'Autonomous Navigation System',
      category: 'autonomous',
      description: 'Competition-grade autonomous navigation system featuring SLAM, real-time obstacle avoidance, and dynamic path planning for complex environments.',
      image: 'https://images.pexels.com/photos/2085831/pexels-photo-2085831.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
      tags: ['SLAM', 'Computer Vision', 'ROS2', 'LiDAR'],
      award: 'Regional Competition Winner 2024',
      github: '#',
      demo: '#',
      year: '2024'
    },
    {
      title: 'Precision Manipulation System',
      category: 'manipulation',
      description: 'Six-degree-of-freedom robotic manipulator with sub-millimeter precision for complex object manipulation tasks in competitive scenarios.',
      image: 'https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
      tags: ['Kinematics', 'Control Systems', 'Precision Engineering'],
      award: 'Technical Excellence Award 2023',
      github: '#',
      demo: '#',
      year: '2023'
    },
    {
      title: 'Multi-Robot Coordination',
      category: 'coordination',
      description: 'Distributed multi-robot system enabling coordinated task execution through advanced communication protocols and formation control algorithms.',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
      tags: ['Multi-Agent Systems', 'Communication Protocols', 'Formation Control'],
      award: 'Innovation Award 2024',
      github: '#',
      demo: '#',
      year: '2024'
    },
    {
      title: 'Computer Vision Pipeline',
      category: 'vision',
      description: 'Real-time computer vision system for object detection, tracking, and scene understanding using deep learning and traditional CV techniques.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
      tags: ['Deep Learning', 'OpenCV', 'TensorFlow', 'Real-time Processing'],
      award: 'Best Technical Implementation 2023',
      github: '#',
      demo: '#',
      year: '2023'
    },
    {
      title: 'Autonomous Aerial Vehicle',
      category: 'aerial',
      description: 'Custom-built quadcopter with autonomous flight capabilities, GPS navigation, and payload delivery system for competition scenarios.',
      image: 'https://images.pexels.com/photos/1434200/pexels-photo-1434200.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
      tags: ['Flight Control', 'GPS Navigation', 'Payload Systems', 'Autonomous Flight'],
      award: 'Aerial Robotics Competition Winner',
      github: '#',
      demo: '#',
      year: '2024'
    },
    {
      title: 'Mobile Platform Development',
      category: 'mobile',
      description: 'Versatile mobile robotic platform with all-terrain capabilities, modular design, and advanced sensor integration for research applications.',
      image: 'https://images.pexels.com/photos/2085832/pexels-photo-2085832.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=1',
      tags: ['Mobile Robotics', 'Sensor Fusion', 'Modular Design', 'All-terrain'],
      award: 'Design Excellence Award 2023',
      github: '#',
      demo: '#',
      year: '2023'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'autonomous', label: 'Autonomous Systems' },
    { id: 'manipulation', label: 'Manipulation Systems' },
    { id: 'coordination', label: 'Multi-Robot Systems' },
    { id: 'vision', label: 'Computer Vision' },
    { id: 'aerial', label: 'Aerial Systems' },
    { id: 'mobile', label: 'Mobile Platforms' }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Our Projects
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our cutting-edge robotics projects that push the boundaries of technology and innovation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute top-4 right-4 flex space-x-2">
                  <span className="px-2 py-1 bg-gray-900/80 text-cyan-400 text-xs rounded-full flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    {project.year}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    <a
                      href={project.github}
                      className="p-2 bg-gray-900/80 rounded-full hover:bg-gray-800 transition-colors duration-200"
                    >
                      <Github className="w-4 h-4 text-white" />
                    </a>
                    <a
                      href={project.demo}
                      className="p-2 bg-gray-900/80 rounded-full hover:bg-gray-800 transition-colors duration-200"
                    >
                      <Play className="w-4 h-4 text-white" />
                    </a>
                    <a
                      href="#"
                      className="p-2 bg-gray-900/80 rounded-full hover:bg-gray-800 transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
                  <Award className="w-5 h-5 text-yellow-400" />
                </div>
                
                <p className="text-cyan-400 text-sm mb-3">{project.award}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;