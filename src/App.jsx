import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Reaction from './components/Reaction';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="pt-[120px]"></div>
      <Hero />
      <Reaction />
      <Footer />
    </>
  );
};

export default App;
