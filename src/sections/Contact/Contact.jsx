import React from "react";

function Contact() {
  return (
    <section id="contact" className="relative py-20 md:py-28 px-4 md:px-8 bg-gradient-to-b from-gray-900 via-black to-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent)] pointer-events-none"></div>
      
      <div className="relative max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-green-400 text-sm md:text-base font-semibold tracking-wider uppercase mb-4">Let's connect</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-500 to-green-600">Touch</span>
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-green-400 via-green-500 to-green-600 mx-auto rounded-full shadow-lg shadow-green-500/50"></div>
          <p className="text-gray-400 mt-6 text-lg md:text-xl">
            I'm always open to discussing new projects, opportunities, or just having a chat!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-6">
            <div className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 hover:shadow-green-500/20 hover:scale-105">
              <div className="flex items-center gap-4 md:gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform">
                  <i className="bx bx-phone text-3xl text-white"></i>
                </div>
                <div>
                  <h3 className="font-bold text-lg md:text-xl mb-1 text-green-400">Phone</h3>
                  <a href="tel:+27730727470" className="text-gray-300 hover:text-green-400 transition-colors text-base md:text-lg">
                    +27 73 072 7470
                  </a>
                </div>
              </div>
            </div>

            <div className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl border border-gray-700/50 hover:border-green-500/50 transition-all duration-300 hover:shadow-green-500/20 hover:scale-105">
              <div className="flex items-center gap-4 md:gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform">
                  <i className="bx bx-envelope text-3xl text-white"></i>
                </div>
                <div>
                  <h3 className="font-bold text-lg md:text-xl mb-1 text-green-400">Email</h3>
                  <a href="mailto:mzolisomie18@gmail.com" className="text-gray-300 hover:text-green-400 transition-colors text-base md:text-lg break-all">
                    mzolisomie18@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl border border-gray-700/50 hover:border-green-500/30 transition-all duration-300">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8 text-green-400">Send a Message</h3>
            <form className="space-y-5">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-5 py-4 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-5 py-4 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full px-5 py-4 bg-gray-900/50 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-500/20 transition-all duration-300 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-bold text-lg hover:from-green-600 hover:to-green-700 transition-all duration-300 shadow-lg shadow-green-500/30 hover:shadow-green-500/50 hover:scale-[1.02]"
              >
                Send Message
                <i className="bx bx-send ml-2"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

