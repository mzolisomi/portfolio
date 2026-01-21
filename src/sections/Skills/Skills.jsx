import React from "react";

export default function Skills() {
  const skills = [
    { 
      name: "C#", 
      src: "/images/c-sharp.png", 
      alt: "C#"
    },
    { 
      name: "JavaScript", 
      src: "/images/java-script.png", 
      alt: "JavaScript"
    },
    { 
      name: "SQL", 
      src: "/images/sql.png", 
      alt: "SQL"
    },
    { 
      name: "Python", 
      src: "/images/python.png", 
      alt: "Python"
    }
  ];

  return (
    <section id="skills" className="relative py-20 md:py-28 px-4 md:px-8 bg-gradient-to-b from-black via-gray-950 to-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.08),transparent)] pointer-events-none"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-green-400 text-sm md:text-base font-semibold tracking-wider uppercase mb-4">What I know</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-500 to-green-600">Skills</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-green-400 via-green-500 to-green-600 mx-auto rounded-full shadow-lg shadow-green-500/50"></div>
          <p className="text-gray-400 mt-6 text-lg md:text-xl">Technologies and tools I work with</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8 lg:gap-10 mb-12">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-sm rounded-2xl shadow-2xl p-6 md:p-8 flex flex-col items-center justify-center hover:scale-110 transition-all duration-500 border border-gray-800/50 hover:border-green-500/50 hover:shadow-green-500/30 cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 to-green-500/0 group-hover:from-green-500/10 group-hover:to-transparent rounded-2xl transition-all duration-500"></div>
              
              <div className="relative w-28 h-28 md:w-36 md:h-36 mb-5 flex items-center justify-center">
                <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl group-hover:bg-green-500/40 transition-all duration-500"></div>
                <img
                  src={skill.src}
                  alt={skill.alt}
                  className="relative w-full h-full object-contain filter group-hover:brightness-125 group-hover:scale-110 transition-all duration-500 drop-shadow-lg"
                />
              </div>
              
              <h3 className="text-base md:text-lg font-bold text-gray-300 group-hover:text-green-400 transition-colors duration-300 text-center">
                {skill.name}
              </h3>
              
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-green-400 to-green-600 group-hover:w-16 transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>

        {/* Additional Skills Info */}
        <div className="mt-12 text-center bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-800/50">
          <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Continuously learning and expanding my skill set to stay current with the latest technologies
          </p>
        </div>
      </div>
    </section>
  );
}

