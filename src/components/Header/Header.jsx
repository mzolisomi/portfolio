import React from "react";

function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full px-4 md:px-8 py-4 flex items-center justify-between z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/95 backdrop-blur-xl shadow-2xl shadow-green-500/10 border-b border-green-500/20' 
        : 'bg-black/60 backdrop-blur-md border-b border-gray-800/50'
    }`}>
      <a 
        href="#home" 
        onClick={(e) => handleNavClick(e, 'home')}
        className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-500 to-green-600 tracking-wide hover:from-green-300 hover:to-green-500 transition-all duration-300 drop-shadow-lg"
      >
        Portfolio
      </a>
      <nav className="hidden md:flex gap-6 lg:gap-8 text-base font-medium">
        {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => {
          const id = item.toLowerCase() === 'home' ? 'home' : item.toLowerCase();
          return (
            <a 
              key={item}
              href={`#${id}`} 
              onClick={(e) => handleNavClick(e, id)}
              className="relative text-white/90 hover:text-green-400 transition-all duration-300 group py-2"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-green-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          );
        })}
      </nav>
      <button className="md:hidden text-white hover:text-green-400 transition-colors">
        <i className="bx bx-menu text-3xl"></i>
      </button>
    </header>
  );
}

export default Header;

