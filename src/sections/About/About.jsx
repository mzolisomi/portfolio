import React from "react";

function About() {
  return (
    <section id="about" className="relative py-20 md:py-28 px-4 md:px-8 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent)] pointer-events-none"></div>
      
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-green-400 text-sm md:text-base font-semibold tracking-wider uppercase mb-4">Get to know me</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-500 to-green-600">Me</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-green-400 via-green-500 to-green-600 mx-auto rounded-full shadow-lg shadow-green-500/50"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 text-base md:text-lg text-gray-300 leading-relaxed bg-gray-900/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800/50 shadow-xl">
            <p className="text-gray-300/90">
              Hello! I'm <span className="text-green-400 font-semibold">Mzoli Somi</span>, 
              a BCom Information Systems graduand and a Data Analytics graduate from EBL Institute, 
              driven by a passion for building intelligent, scalable, and user-centered digital solutions.
            </p>

            <p className="text-gray-300/90">
              I specialize in crafting modern web applications and data-driven systems that merge 
              clean architecture, intuitive design, and analytical thinking to solve real-world problems 
              and support informed decision-making.
            </p>

            <p className="text-gray-300/90">
              Through continuous learning, hands-on projects, and collaboration, I actively refine my 
              technical skills while exploring emerging technologies, ensuring that every solution I 
              build delivers both functional excellence and meaningful impact.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 hover:shadow-green-500/20">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg">
                <i className="bx bx-book-reader text-2xl text-white"></i>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-green-400">Education</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-gray-900/50 rounded-xl border border-gray-700/50 hover:border-green-500/50 transition-colors">
                <div className="w-3 h-3 bg-green-500 rounded-full mt-2 shadow-lg shadow-green-500/50"></div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Bachelor of Commerce In Information Systems</h4>
                  <p className="text-gray-400">University of Fort Hare</p>
                  <span className="inline-block mt-2 px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full border border-green-500/30">
                    Completed
                  </span>
                </div>
              </div>
            </div>
            <div className=" py-4 space-y-4">
              <div className="flex items-start gap-4 p-4 bg-gray-900/50 rounded-xl border border-gray-700/50 hover:border-green-500/50 transition-colors">
                <div className="w-3 h-3 bg-green-500 rounded-full mt-2 shadow-lg shadow-green-500/50"></div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Data Analytics</h4>
                  <p className="text-gray-400">EBL Institute</p>
                  <span className="inline-block mt-2 px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full border border-green-500/30">
                    Completed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

