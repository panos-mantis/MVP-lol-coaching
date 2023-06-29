import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/ServicesOffered/Services";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
    </>
  );
};

export default Home;
