import React from "react";
import Header from "pages/Home/Components/Header";
import Projets from "pages/Home/Components/Projects";
import About from "pages/Home/Components/About";
import Skills from "pages/Home/Components/Skills";
import Contact from "pages/Home/Components/Contact";

const index = () => {
  return (
    <div>
      <Header />
      <Projets />
      <About />
      <Skills />
      <Contact />
    </div>
  );
};

export default index;
