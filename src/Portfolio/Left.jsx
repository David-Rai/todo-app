import React from "react";
import { TiStarburst } from "react-icons/ti";
import { SiHey } from "react-icons/si";
import myImage from "./asset/my2.png";
import { MdConnectWithoutContact } from "react-icons/md";

const Left = () => {
  return (
    <div className="h-[85%] w-[100%] p-4 flex flex-wrap lg:w-[70%]">
      <div className="top h-[55%] w-full flex flex-nowrap ">
        <div className="t1 h-full w-[60%] flex flex-col relative items-start justify-center border-radius bg-bgColor p-3">
          <TiStarburst className="text-5xl absolute top-[5%] right-[5%]" />
          <h1 className="h1 flex items-center justify-center">
            Lets create 
            <span className="font-font3 lg:text-5xl px-2 text-xl">amazing ,</span>
          </h1>
          <h1 className="h1">Projects together</h1>
          <h1 className="h1">Until we are perfect</h1>
        </div>

        <div className="t2 h-full w-[40%] bg-bgColor2 border-radius ml-3 flex items-center justify-center">
          <img src={myImage} className="h-full grayscale	" />
        </div>
      </div>

      <div className="bottom h-[40%] w-full flex flex-nowrap justify-between">
        {/*bottom*/}
        <div className="b1 h-full w-[50%] bg-bgColor border-radius p-3">
          <SiHey className="lg:text-lg text-sm" />
          <p className="text-xs lg:text-sm w-[70%] font-font4 ">
          let you know me , i am actually nobody or not a important person but everday trying todo better by 1% ,
           i am good at providing advice which are  of course not followed . 
           I am curious about many things that the reason why i keep learning useless things.
          </p>
        </div>
        <div className="b2 h-full w-[48%] relative bg-bgColor2 border-radius px-3">
          <div className="h-[30%] w-full flex items-center justify-between text-bgColor">
            <p className="font-font2 text-xl">lets get connected</p>
            <MdConnectWithoutContact className="text-2xl " />
          </div>

          <div className="w-full h-[70%] flex items-center justify-start pr-3 ">
            <h1 className="text-3xl font-font3 text-bgColor">Contact me</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Left;
