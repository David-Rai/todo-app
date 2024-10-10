import React from "react";
import Nav from "./Nav.jsx";
import Left from "./Left.jsx";
import Right from "./Right.jsx";

const Portfolio = () => {
  return (
    <>
      <main className=" h-screen w-full flex flex-wrap bg-black font-font1 lg:overflow-hidden">
        <Nav />
        <Left />
        <Right />
      </main>
    </>
  );
};

export default Portfolio;
