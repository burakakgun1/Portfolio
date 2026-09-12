import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="dev-grid-bg min-h-screen text-zinc-300 antialiased selection:bg-zinc-700 selection:text-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl py-6">
        <Navbar />
        <main className="space-y-24 sm:space-y-28 mt-8">
          <Hero />
          <About />
          <Technologies />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
