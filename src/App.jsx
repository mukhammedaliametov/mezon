import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Reaction from './components/Reaction';
import Action from "./components/Action";
import Poster from "./components/Poster";
import News from './components/News';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="pt-[120px]"></div>
      <Hero />
      <Reaction />
      <Action />
      <Poster />
      <News />
      <Footer />
    </>
  );
};

export default App;
