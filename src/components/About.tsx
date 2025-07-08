import React from 'react';
import { Trophy, Users, Target, Lightbulb } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Trophy, label: 'Awards Earned', value: '15+' },
    { icon: Users, label: 'Team Members', value: '6' },
    { icon: Target, label: 'Projects Completed', value: '12+' },
    { icon: Lightbulb, label: 'Years Active', value: '3' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            About UNION
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto"></p>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A dedicated team of engineering students and professionals committed to advancing robotics technology through research, development, and competitive excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Mission Statement</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              UNION is committed to developing innovative robotic solutions that address real-world challenges. 
              We strive to advance the field of robotics through rigorous research, collaborative engineering, 
              and participation in prestigious international competitions.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Our multidisciplinary approach combines expertise in mechanical engineering, computer science, 
              artificial intelligence, and systems integration to create sophisticated autonomous systems 
              that demonstrate technical excellence and innovative problem-solving.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl blur-xl"></div>
            <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="mb-3 flex justify-center">
                      <stat.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 rounded-xl bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 hover:border-cyan-500/50 transition-all duration-300 group">
            <div className="mb-4 flex justify-center">
              <div className="p-3 bg-cyan-500/10 rounded-full group-hover:bg-cyan-500/20 transition-colors duration-300">
                <Target className="w-8 h-8 text-cyan-400" />
              </div>
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Innovation</h4>
            <p className="text-gray-600 dark:text-gray-400">
              We constantly explore new technologies and methodologies to stay at the forefront of robotics.
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 hover:border-purple-500/50 transition-all duration-300 group">
            <div className="mb-4 flex justify-center">
              <div className="p-3 bg-purple-500/10 rounded-full group-hover:bg-purple-500/20 transition-colors duration-300">
                <Users className="w-8 h-8 text-purple-400" />
              </div>
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Collaboration</h4>
            <p className="text-gray-600 dark:text-gray-400">
              Our diverse team brings together expertise from various fields to create comprehensive solutions.
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 hover:border-blue-500/50 transition-all duration-300 group">
            <div className="mb-4 flex justify-center">
              <div className="p-3 bg-blue-500/10 rounded-full group-hover:bg-blue-500/20 transition-colors duration-300">
                <Trophy className="w-8 h-8 text-blue-400" />
              </div>
            </div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Excellence</h4>
            <p className="text-gray-600 dark:text-gray-400">
              We strive for perfection in every aspect of our work, from design to implementation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;