import React from "react";

function Footer() {
  return (
    <footer className="relative py-10 md:py-12 px-4 md:px-8 bg-black border-t border-gray-800/50 text-center text-gray-400 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-green-500/5 to-transparent pointer-events-none"></div>
      
      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <p className="text-base md:text-lg">
            &copy; {new Date().getFullYear()} <span className="text-green-400 font-semibold">Mzoli Somi</span>. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/mzoli-somi" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
              <i className="bx bxl-linkedin text-2xl"></i>
            </a>
            <a href="https://web.facebook.com/mzoli.somie.3" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
              <i className="bx bxl-facebook text-2xl"></i>
            </a>
            <a href="https://www.instagram.com/mzolisomie18" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
              <i className="bx bxl-instagram text-2xl"></i>
            </a>
          </div>
        </div>
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-6"></div>
        <p className="text-sm md:text-base">
          Built with <span className="text-green-400">React</span>, <span className="text-green-400">Tailwind CSS</span>, and ❤️
        </p>
      </div>
    </footer>
  );
}

export default Footer;

