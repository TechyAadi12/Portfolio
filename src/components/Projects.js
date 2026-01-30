import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
   
    // {
    //   title: 'Task Management App',
    //   description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    //   image: '/project2.jpg',
    //   technologies: ['HTML','CSS','Java Script'],
    //   github: 'https://github.com/TechyAadi12/Code-Alpha',
    //   demo: 'https://soft-fox-4d1da3.netlify.app/',
    //   featured: true
    // },
    
    // {
    //   title: 'Calculator',
    //   description: 'A simple and responsive calculator web app built using HTML, CSS, and JavaScript. It performs basic arithmetic operations with a clean UI and smooth user interactions.',
    //   image: '/project3.jpg',
    //   technologies: ['HTML','CSS','Java Script'],
    //   github: 'https://github.com/TechyAadi12/Code-Alpha',
    //   demo: 'https://polite-bubblegum-8aa224.netlify.app/',
    //   featured: true
    // },

    {
      title: 'Gym Fitness Website',
      description: 'A dynamic and engaging fitness website featuring a modern UI, workout plans, trainer profiles, membership options, and responsive design to attract users and boost gym conversions.',
      image: '/project3.jpg',
      technologies: ['HTML','CSS','Java Script','React Js'],
      github: 'https://github.com/TechyAadi12/Code-Alpha',
      demo: 'https://dynamic-torte-075eca.netlify.app/',
      featured: true
    },

    {
      title: 'Grocery Shop Website',
      description: 'A user-friendly grocery shop website with a clean UI, product listings, cart functionality, and responsive design, allowing customers to browse and purchase essentials seamlessly online.',
      image: '/project3.jpg',
      technologies: ['HTML','Tailwind CSS','Java Script','React Js'],
      github: 'https://github.com/TechyAadi12/Code-Alpha',
      demo: 'https://jocular-blancmange-0950b4.netlify.app/',
      featured: true
    },

    {
      title: ' Food Service Website',
      description: 'I developed a modern fully responsive & user-friendly food service website using React.js to provide customers with a seamless and engaging online ordering experience.',
      image: '/project3.jpg',
      technologies: ['HTML','CSS','Java Script','React Js'],
      github: 'https://github.com/TechyAadi12/Code-Alpha',
      demo: 'https://poetic-macaron-c71c64.netlify.app/',
      featured: true
    },

    {
      title: ' AI Cooking Companion',
      description: 'A responsive AI Cooking Companion web app featuring an AI recipe generator, cooking mode,grocery helper. Designed withclean UI/UX, smooth navigation, and reusable components to deliver an engaging cooking experience across devices.',
      image: '/project3.jpg',
      technologies: ['HTML','Tailwind CSS','React Js','API Integration','Zustand'],
      github: 'https://github.com/TechyAadi12/Code-Alpha',
      demo: 'https://ubiquitous-nougat-c5be6e.netlify.app/',
      featured: true
    },

    {
      title: 'Fake News Detector',
      description: 'A responsive Fake News Detection web app using HTML, Tailwind CSS, and React.js with a Python backend powered by DistilBERT, delivering fast, accurate news authenticity analysis through a clean, intuitive interface.',
      image: '/project3.jpg',
      technologies: ['HTML','Tailwind CSS','React Js','Python Backend(Using DistilBERT Model)'],
      github: 'https://github.com/TechyAadi12/Code-Alpha',
      demo: 'https://euphonious-bombolone-7a9aca.netlify.app/',
      featured: true
    },


   
    
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading">Featured Projects</h2>
          <p className="subheading">Some things I've built</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-tertiary rounded-lg overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-secondary opacity-20 group-hover:opacity-30 transition-opacity"></div>
                <div className="w-full h-full bg-primary flex items-center justify-center">
                  <span className="text-2xl text-secondary">{project.title}</span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-textSecondary mb-4">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary text-secondary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-textSecondary hover:text-secondary transition-colors"
                  >
                    <FaGithub />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-textSecondary hover:text-secondary transition-colors"
                  >
                    <FaExternalLinkAlt />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 