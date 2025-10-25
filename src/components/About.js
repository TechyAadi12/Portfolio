import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaMobileAlt, FaRocket } from 'react-icons/fa';

const About = () => {
  const skills = [
    {
      icon: <FaCode />,
      title: 'Frontend Development',
      description: 'Expert in React, JavaScript, and modern web technologies. Building responsive and interactive user interfaces.'
    },
    {
      icon: <FaPalette />,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive user experiences with a focus on accessibility and user-centered design.'
    },
    {
      icon: <FaMobileAlt />,
      title: 'Responsive Design',
      description: 'Developing mobile-first applications that work seamlessly across all devices and screen sizes.'
    },
    {
      icon: <FaRocket />,
      title: 'Performance Optimization',
      description: 'Optimizing applications for speed and efficiency using modern best practices and tools.'
    }
  ];

  return (
    <section id="about" className="section bg-tertiary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading">About Me</h2>
          <p className="subheading">Get to know me better</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - About Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-textSecondary">
              I'm a passionate Frontend Developer with a strong foundation in web development
              and a keen eye for design. With several years of experience in creating
              modern web applications, I specialize in building responsive, user-friendly
              interfaces that provide exceptional user experiences.
            </p>
            <p className="text-textSecondary">
              My journey in web development started with a curiosity for creating things
              that live on the internet. Today, I'm focused on building accessible,
              inclusive products and digital experiences for various clients.
            </p>
            <p className="text-textSecondary">
              When I'm not coding, you can find me exploring new technologies, contributing
              to open-source projects, or sharing my knowledge through technical writing
              and mentoring.
            </p>
          </motion.div>

          {/* Right Column - Skills Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-primary p-6 rounded-lg hover:transform hover:scale-105 transition-transform"
              >
                <div className="text-3xl text-secondary mb-4">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                <p className="text-textSecondary">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 