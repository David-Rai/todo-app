import React, { useState , useRef} from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHandLizard, FaXmark } from "react-icons/fa6";

const ResponisiveNav = () => {
  const [show,setShow]=useState(true)
  const ulRef=useRef(null)
  const handleShow=()=>{
    console.log(ulRef.current)
    ulRef.current.classList.toggle('hidden')
    ulRef.current.classList.toggle('flex')
}

  return (
    <main className="h-screen w-full bg-blue-400">
      <nav className="px-3 justify-between h-[10%] w-full bg-blue-300 flex items-center">
        <div className="logo md:text-2xl">logo</div>
              <ul ref={ulRef}
              className={`w-full absolute bottom-0 
                left-0 hidden bg-purple-600 capitalize
                text-white
                flex-col items-center justify-around h-screen
                md:flex  md:h-[10%] md:flex-row md:top-0 md:w-[40%]
                md:right-0 md:bg-transparent
                md:static md:text-black
                `}
            >
              <FaXmark className="z-2 md:hidden absolute top-4 right-4" onClick={handleShow} />
                <li className="hover:animate-bounce">Home</li>
                <li>service</li>
                <li>product</li>
                <li>about</li>
                <li>contact</li>
              </ul>
                    <GiHamburgerMenu className="text-xl md:hidden" onClick={handleShow}/> 

      </nav>
    </main>
  );
};

export default ResponisiveNav;