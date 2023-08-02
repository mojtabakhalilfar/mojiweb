import React from "react";

const Sample = (props) => {
  return (
    <div className={props.className}>
      <div className="w-full h-full relative">
        <img className="opacity-50" src={props.img} alt={props.name} />
        <div className="absolute top-0 w-full flex flex-col h-full justify-center items-center font-sans sm:text-lg lg:text-xl lg:font-semibold sm:font-medium ">
          <h1 >{props.name}</h1>
          <h3>{props.tools}</h3>
          <a href={props.href} target="-blank" className="mt-4 bg-blue-900 hover:bg-blue-400 text-white hover:text-black rounded-lg lg:w-32 lg:h-16 sm:px-2 sm:py-2 justify-center flex items-center"><span>دیدن سایت</span></a>
        </div>
      </div>
    </div>
  );
};

export default Sample;
