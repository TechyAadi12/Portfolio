import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Frontend Developer',
      company: 'Code Alpha',
      period: '15th Oct 2024 - 15th Nov 2024',
      description: 'Built responsive web applications and collaborated with designers to implement UI/UX designs.',
      achievements: [
        'Created 10+ responsive websites',
        'Implemented modern UI components',
        'Worked with various clients and stakeholders'
      ]
    },
    {
      type: 'education',
      title: 'Bachelor of Technology',
      company: 'Rajkiya Engineering College Ambedkar Nagar',
      period: '2022 - 2026',
      description: 'Graduated in Information Technology with Skills in domain of web development and software engineering.',
      achievements: [
        'GPA: 7.1/10',
        'Completed multiple web development projects'
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading">Experience & Education</h2>
          <p className="subheading">My professional journey</p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={`${exp.type}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-secondary"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-secondary rounded-full"></div>
              <div className="flex items-center gap-4 mb-4">
                {exp.type === 'work' ? (
                  <FaBriefcase className="text-2xl text-secondary" />
                ) : (
                  <FaGraduationCap className="text-2xl text-secondary" />
                )}
                <div>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-textSecondary">{exp.company}</p>
                </div>
              </div>
              <p className="text-sm text-secondary mb-4">{exp.period}</p>
              <p className="text-textSecondary mb-4">{exp.description}</p>
              <ul className="list-disc list-inside text-textSecondary space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 