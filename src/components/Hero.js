import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin,  FaArrowDown } from "react-icons/fa";
import HeroImg from "./hero.png";
const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4"
            >
              <span className="text-secondary font-mono">Hi, my name is</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              <span className="gradient-text">Roshan Pandey</span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl md:text-5xl text-textSecondary mb-6"
            >
              Frontend Developer
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-textSecondary mb-8 max-w-lg mx-auto md:mx-0"
            >
              I create beautiful and functional web experiences using modern
              technologies. Passionate about building user-friendly applications
              that make a difference.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#projects"
                className="btn btn-primary"
              >
                View My Work
              </motion.a>
             
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-6 mt-8 justify-center md:justify-start"
            >
              <motion.a
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                href="https://github.com/TechyAadi12"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-textSecondary hover:text-secondary transition-colors"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                href="https://www.linkedin.com/in/roshan-pandey-7a6254259/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-textSecondary hover:text-secondary transition-colors"
              >
                <FaLinkedin />
              </motion.a>
             
            </motion.div>
          </motion.div>
          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 5, x: 50 }}
            animate={{ opacity: 1, x: 5 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="w-64 h-64 md:w-96 md:h-96 mx-auto relative">
              {/* Background glow effect */}
              <div className="absolute inset-0 bg-secondary rounded-full opacity-20 blur-3xl animate-pulse"></div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-full h-full rounded-full overflow-hidden border-4 border-secondary glass"
              >
                {/* Profile image inside circular container */}
                <img
                  src={HeroImg}
                  alt="Your Name"
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Down Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.a
            href="#about"
            className="text-textSecondary hover:text-secondary transition-colors"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <FaArrowDown className="text-2xl" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
