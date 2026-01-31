import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Projects = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = current.offsetWidth;
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const projects = [
    {
      title: 'Gym Fitness Website',
      description: 'A dynamic and engaging fitness website featuring a modern UI, workout plans, trainer profiles, membership options, and responsive design to attract users and boost gym conversions.',
      image: '/project3.jpg',
      technologies: ['HTML', 'CSS', 'Java Script', 'React Js'],
      github: 'https://github.com/TechyAadi12/Code-Alpha',
      demo: 'https://dynamic-torte-075eca.netlify.app/',
      featured: true
    },
    {
      title: 'Grocery Shop Website',
      description: 'A user-friendly grocery shop website with a clean UI, product listings, cart functionality, and responsive design, allowing customers to browse and purchase essentials seamlessly online.',
      image: '/project3.jpg',
      technologies: ['HTML', 'Tailwind CSS', 'Java Script', 'React Js'],
      github: 'https://github.com/TechyAadi12/Code-Alpha',
      demo: 'https://jocular-blancmange-0950b4.netlify.app/',
      featured: true
    },
    {
      title: ' Food Service Website',
      description: 'I developed a modern fully responsive & user-friendly food service website using React.js to provide customers with a seamless and engaging online ordering experience.',
      image: '/project3.jpg',
      technologies: ['HTML', 'CSS', 'Java Script', 'React Js'],
      github: 'https://github.com/TechyAadi12/Code-Alpha',
      demo: 'https://poetic-macaron-c71c64.netlify.app/',
      featured: true
    },
    {
      title: ' AI Cooking Companion',
      description: 'A responsive AI Cooking Companion web app featuring an AI recipe generator, cooking mode,grocery helper. Designed withclean UI/UX, smooth navigation, and reusable components to deliver an engaging cooking experience across devices.',
      image: '/project3.jpg',
      technologies: ['HTML', 'Tailwind CSS', 'React Js', 'API Integration', 'Zustand'],
      github: 'https://github.com/TechyAadi12/Code-Alpha',
      demo: 'https://ubiquitous-nougat-c5be6e.netlify.app/',
      featured: true
    },
    {
      title: 'To-do App',
      description: 'A full-stack To-Do application built with React, Tailwind CSS, Node.js, Express, and MongoDB, featuring a responsive UI and complete CRUD functionality.',
      image: '/project3.jpg',
      technologies: ['HTML', 'Tailwind CSS', 'React Js'],
      github: 'https://github.com/TechyAadi12/Code-Alpha',
      demo: 'https://to-do-frontnd.netlify.app/',
      featured: true
    },
  ];

  const [scrollProgress, setScrollProgress] = React.useState(0);

  const handleScroll = () => {
    const { current } = scrollRef;
    if (current) {
      const progress = (current.scrollLeft / (current.scrollWidth - current.offsetWidth)) * 100;
      setScrollProgress(progress);
    }
  };

  return (
    <section id="projects" className="section relative overflow-hidden">
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

        <div className="relative group">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 lg:-ml-12 z-10 p-3 rounded-full bg-tertiary/80 backdrop-blur-sm border border-white/10 text-secondary opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hidden md:block disabled:opacity-30 disabled:hover:scale-100"
            aria-label="Previous project"
            disabled={scrollProgress <= 0}
          >
            <FaChevronLeft size={20} />
          </button>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 lg:-mr-12 z-10 p-3 rounded-full bg-tertiary/80 backdrop-blur-sm border border-white/10 text-secondary opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hidden md:block disabled:opacity-30 disabled:hover:scale-100"
            aria-label="Next project"
            disabled={scrollProgress >= 99}
          >
            <FaChevronRight size={20} />
          </button>

          {/* Slider Container */}
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-4"
            style={{ scrollBehavior: 'smooth' }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex-none w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start"
              >
                <div className="bg-tertiary rounded-2xl overflow-hidden group/card border border-white/5 hover:border-secondary/30 transition-all duration-500 h-full flex flex-col">
                  {/* Project Image */}
                  <div className="relative h-56 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent z-10"></div>
                    <div className="w-full h-full bg-primary flex items-center justify-center group-hover/card:scale-110 transition-transform duration-700">
                      <span className="text-2xl font-bold gradient-text px-4 text-center">{project.title}</span>
                    </div>
                    {/* Floating Tech Tags */}
                    <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span key={tech} className="px-2 py-0.5 bg-black/40 backdrop-blur-md rounded-md text-[10px] text-white/80 border border-white/10">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-bold mb-3 group-hover/card:text-secondary transition-colors">{project.title}</h3>
                    <p className="text-textSecondary text-sm mb-6 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="mt-auto flex items-center justify-between">
                      <div className="flex gap-4">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-primary/50 text-textSecondary hover:text-secondary hover:bg-secondary/10 transition-all"
                          title="View Code"
                        >
                          <FaGithub size={20} />
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full bg-primary/50 text-textSecondary hover:text-secondary hover:bg-secondary/10 transition-all"
                          title="Live Demo"
                        >
                          <FaExternalLinkAlt size={18} />
                        </a>
                      </div>
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="text-secondary text-xs font-semibold flex items-center gap-1 cursor-pointer"
                        onClick={() => window.open(project.demo, '_blank')}
                      >
                        Learn More <FaChevronRight size={10} />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Progress Bar Container */}
          <div className="mt-8 flex justify-center">
            <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-secondary"
                animate={{ width: `${scrollProgress}%` }}
                transition={{ type: 'spring', damping: 20, stiffness: 100 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 