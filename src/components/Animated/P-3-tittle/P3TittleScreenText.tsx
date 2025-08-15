import React, { useState } from "react";
import "./P3anim.css";

const P3TittleScreenText = ({ lable } : {lable:string}) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="flex justify-center items-center">
      <div>
        <div
          className="container relative group cursor-pointer scale-98 hover:scale-100 transition-all duration-100"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="bg-blue-500 p-1 md:p-4 h-full md:w-10 w-2 absolute bottom-[-5%] md:bottom-[-2%] md:left-[-15%] left-[-6%] group-hover:w-20 transition-all duration-150 z-0"></div>
          <p
            className={`${!isHovered && "animate-text-bg"}  relative z-10 text-6xl font-extrabold leading-13 md:leading-12 text-transparent text-start 
             bg-[linear-gradient(white,white)]  
             bg-clip-text bg-no-repeat 
             ${
               isHovered
                 ? "bg-[length:0%_0%] hover:bg-[length:100%_100%] transition-all duration-500"
                 : "bg-[length:0%_0%]"
             }
          `}
            style={{
              WebkitTextStroke: "1px white"
            }}
          >
            {lable.split(" ").map((item:string, i:number) => (
              <span key={i} className="uppercase">
                {item} <br />{" "}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(P3TittleScreenText);