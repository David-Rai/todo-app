import React from "react";

const Nav = () => {
  return (
    <nav className="h-[15%] w-full bg-bgColor border-radius flex items-center justify-between px-5 mx-3">
      <div className=" text-2xl text-brown">David</div>
      <ul className="flex justify-center items-center">
        <li className="li">projects</li>
        <li className="li">about</li>
        <li className="li">contact</li>
      </ul>
    </nav>
  );
};

export default Nav;
