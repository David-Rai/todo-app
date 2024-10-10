import React from "react";
import homies from "./asset/homies.jpg";

const Right = () => {
  return (
    <div className="h-screen  bg-black w-full p-3 lg:w-[30%] lg:h-full lg:bg-none ">
      <div className="top h-[75%] lg:h-[65%] w-full bg-bgColor border-radius mb-3 flex flex-col justify-center items-center">
        <img src={homies} className="w-[90%] grayscale rounded-lg shadow-2xl" />
        <h1 className="right-h1">Being with them is perfect</h1>
        <h1 className="right-h1">of living life</h1>
      </div>

      <div className="bottom h-[20%] w-full bg-bgColor2 border-radius flex items-center justify-center lg:h-[10%]">
        <ul className="text-bgColor font-thin font-font4 capitalize list-none flex items-center justify-evenly w-full">
          <li>creater</li>
          <li>designer</li>
          <li>artist</li>
        </ul>
      </div>
    </div>
  );
};

export default Right;
