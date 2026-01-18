import React from "react";

function Home() {
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 px-4 md:px-8 pt-20 pb-16 bg-gradient-to-br from-black via-gray-950 to-black text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Profile Image */}
      <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
        <div className="relative w-[280px] h-[280px] md:w-[380px] md:h-[380px]">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-green-400 via-green-500 to-purple-600 p-[3px] shadow-2xl shadow-green-500/50 animate-gradient">
            <div className="rounded-full overflow-hidden w-full h-full bg-black">
              <img 
                src="/images/Profile.jpg" 
                alt="Mzoli Somi" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="absolute -top-4 -right-4 w-32 h-32 border-4 border-green-400/30 rounded-full animate-ping"></div>
          <div className="absolute -bottom-4 -left-4 w-24 h-24 border-2 border-purple-400/30 rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 max-w-2xl text-center md:text-left flex flex-col gap-6 md:gap-8">
        <div className="space-y-4 md:space-y-6">
          <div className="inline-block">
            <span className="text-green-400 text-sm md:text-base font-semibold tracking-wider uppercase">Welcome to my portfolio</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight tracking-tight">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-500 to-green-600 animate-gradient">
              Mzoli Somi
            </span>
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-300/90">
            Web Developer &{' '}
            <span className="text-green-400">Student</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-400 leading-relaxed max-w-xl mx-auto md:mx-0">
            I'm a passionate student at the University of Fort Hare, pursuing a BCom Information Systems degree. 
            I love creating beautiful, functional web applications that make a difference.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-2">
          <a 
            href="#projects" 
            onClick={(e) => handleNavClick(e, 'projects')}
            className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold overflow-hidden shadow-xl shadow-green-500/30 hover:shadow-green-500/50 transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <i className="bx bx-right-arrow-alt text-xl group-hover:translate-x-1 transition-transform"></i>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleNavClick(e, 'contact')}
            className="px-8 py-4 border-2 border-green-500 text-green-400 rounded-xl font-semibold hover:bg-green-500 hover:text-white hover:border-green-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/30"
          >
            Get In Touch
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 justify-center md:justify-start mt-4">
          {[
            { icon: 'bxl-linkedin', href: 'https://www.linkedin.com/in/mzoli-somi', color: 'hover:bg-blue-600', label: 'LinkedIn' },
            { icon: 'bxl-facebook', href: 'https://web.facebook.com/mzoli.somie.3', color: 'hover:bg-blue-500', label: 'Facebook' },
            { icon: 'bxl-instagram', href: 'https://www.instagram.com/mzolisomie18', color: 'hover:bg-pink-600', label: 'Instagram' }
          ].map((social) => (
            <a 
              key={social.label}
              href={social.href} 
              target="_blank" 
              rel="noreferrer" 
              className={`w-14 h-14 flex items-center justify-center rounded-full bg-gray-800/50 backdrop-blur-sm text-white ${social.color} hover:scale-110 transition-all duration-300 shadow-lg border border-gray-700/50 hover:border-transparent`}
              aria-label={social.label}
            >
              <i className={`bx ${social.icon} text-2xl`}></i>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;

