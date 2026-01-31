import React from 'react';
import { FaGithub } from 'react-icons/fa';
import logo from './ChatGPT Image Nov 25, 2025, 02_49_44 AM.png';



const Footer = () => {
  return (
    <footer class="text-gray-400 bg-gray-900 body-font">
  <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a href="/" class="flex title-font font-medium items-center md:justify-start justify-center text-white">
      <img src={logo} alt="Aadi logo" class="w-12 h-12 mr-3 rounded-full" />
      <span class="ml-3 text-xl">Aadi's Portfolio</span>
    </a>
    {/* <p class="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">© 2020 Tailblocks —
      <a href="https://twitter.com/knyttneve" class="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@knyttneve</a>
    </p> */}
    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <a href="https://github.com/TechyAadi12" target="_blank" rel="noopener noreferrer" aria-label="GitHub" class="text-gray-400">
        <FaGithub className="w-5 h-5" />
      </a>

      <a class="ml-3 text-gray-400" href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>

      <a class="ml-3 text-gray-400" href="https://www.linkedin.com/in/roshan-pandey-7a6254259/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
  </div>
</footer>
  );
};

export default Footer;
