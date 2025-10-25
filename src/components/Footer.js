import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';



const Footer = () => {
  return (
  
    <footer className="h-40 bg-black py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright and Contact */}
          <div className="text-textSecondary text-sm mb-4 md:mb-0 text-center md:text-left">

            <div className="mt-2">
              📞 <span className="ml-1">+91-9621082164</span> <br />
              📧 <a href="mailto:pandeyaadi3112@gmail.com" className="underline hover:text-secondary">pandeyaadi3112@gmail.com</a> <br />
             
            </div>
          </div>

          {/* Social Links with icons and text */}
          <div className="flex flex-col gap-2 text-textSecondary text-sm text-center md:text-right">
            <a
              href="https://github.com/TechyAadi12"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-secondary transition-colors"
            >
              <FaGithub className="text-lg" />
              github.com/roshanpandey
            </a>
            <a
              href="https://www.linkedin.com/in/roshan-pandey-7a6254259/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-secondary transition-colors"
            >
              <FaLinkedin className="text-lg" />
              linkedin.com/in/roshanpandey
            </a>
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
