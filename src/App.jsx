import React from "react";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Services from "./Components/Services";
import "bootstrap/dist/css/bootstrap.min.css";
// bg-gradient-to-r from-violet-200 to-pink-200
const App = () => {
  return (
    <div className="bg-gradient-to-r from-violet-200 to-pink-200 font-Lobster text-gray-600 tracking-wider">
      <Navbar></Navbar>
      <Hero></Hero>
      <Services></Services>
      <Experience></Experience>
      <Projects></Projects>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default App;
