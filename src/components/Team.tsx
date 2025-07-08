import React from 'react';
import { Github, Linkedin, Mail, Bot } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Nguyễn Trần Như Nguyệt',
      role: 'Faculty Advisor & Mentor',
      bio: 'PhD in Robotics Engineering with 15+ years of experience in autonomous systems and AI research.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&dpr=1',
      specialties: ['Research Guidance', 'AI Systems', 'Academic Mentorship'],
      github: '#',
      linkedin: '#',
      email: '#'
    },
    {
      name: 'Lê Phước Duy Đức',
      role: 'Team Captain',
      bio: 'Computer Science major specializing in robotics software architecture and team coordination.',
      image: '/Duy Đức.JPG',
      specialties: ['Software Architecture', 'Team Leadership', 'Project Management'],
      github: '#',
      linkedin: '#',
      email: '#'
    },
    {
      name: 'Hồ Minh Phúc',
      role: 'Software Development Lead',
      bio: 'Computer Engineering student with expertise in embedded systems and autonomous navigation algorithms.',
      image: '/Minh Phúc.JPG',
      specialties: ['Embedded Systems', 'Algorithm Development', 'Computer Vision'],
      github: '#',
      linkedin: '#',
      email: '#'
    },
    {
      name: 'Nguyễn Đại Minh',
      role: 'Mechanical Engineering Lead',
      bio: 'Mechanical Engineering student focused on robotic design, manufacturing, and system integration.',
      image: '/image.png',
      specialties: ['CAD Design', 'Manufacturing', 'System Integration'],
      github: '#',
      linkedin: '#',
      email: '#'
    },
    {
      name: 'Thân Trọng Tin',
      role: 'Electronics & Control Systems',
      bio: 'Electrical Engineering student specializing in control systems, sensors, and electronic integration.',
      image: '/Trọng Tin.JPG',
      specialties: ['Control Systems', 'Circuit Design', 'Sensor Integration'],
      github: '#',
      linkedin: '#',
      email: '#'
    },
    {
      name: 'Nguyễn Nhật Quý',
      role: 'Research & Documentation',
      bio: 'Engineering student focused on research methodology, technical documentation, and competition strategy.',
      image: '/Nguyễn Nhật Quý.JPG',
      specialties: ['Technical Writing', 'Research', 'Strategy Planning'],
      github: '#',
      linkedin: '#',
      email: '#'
    }
  ];

  return (
    <section id="team" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Our Team
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A multidisciplinary team of dedicated students and experienced faculty working together to advance robotics technology and compete at the highest levels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="p-6">
                <div className="relative mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-20 h-20 rounded-full mx-auto object-cover border-2 border-gray-300 dark:border-gray-600 group-hover:border-cyan-400 transition-colors duration-300"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full p-1">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 text-center">{member.name}</h3>
                <p className="text-cyan-400 text-sm mb-3 text-center">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 text-center leading-relaxed">{member.bio}</p>

                <div className="flex flex-wrap gap-1 justify-center mb-4">
                  {member.specialties.map((specialty, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center space-x-3">
                  <a
                    href={member.github}
                    className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    <Github className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                  </a>
                  <a
                    href={member.linkedin}
                    className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    <Linkedin className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                  </a>
                  <a
                    href={member.email}
                    className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200"
                  >
                    <Mail className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;