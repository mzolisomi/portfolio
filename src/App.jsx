import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./sections/Home/Home";
import About from "./sections/About/About";
import Projects from "./sections/Projects/Projects"
import Skills from "./sections/Skills/Skills";
import Contact from "./sections/Contact/Contact";

function App() {
  return (
    <div id="content" className="bg-black text-white min-h-screen w-full overflow-x-hidden">
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
