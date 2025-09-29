import React from "react";
import Hero from "../components/HomeHero";
import Reaction from "../components/HomeReaction";
import Action from "../components/HomeAction";
import Poster from "../components/HomePoster";
import News from "../components/HomeNews";

const Home = () => {
  return (
    <div className="pt-[120px]">
      <Hero />
      <Reaction />
      <Action />
      <Poster />
      <News />
    </div>
  );
};

export default Home;
