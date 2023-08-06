import React from "react";
import { ClickedAll } from "../../../App";
import { useContext } from "react";

const Sample = (props) => {
  const { farsi } = useContext(ClickedAll);
  return (
    <div className={props.className}>
      <div className="w-full h-full relative">
        <img className="opacity-70" src={props.img} alt={props.name} />
        <div className="absolute top-0 w-full flex flex-col h-full justify-center items-center font-sans text-lg lg:text-xl lg:font-semibold font-medium ">
          <a href={props.href} target="-blank" className="mt-4 bg-blue-900 hover:bg-blue-400 text-white hover:text-black rounded-lg lg:w-32 lg:h-16 px-2 py-2 justify-center flex items-center"><span>
           {farsi?' دیدن سایت':' View Site'}
           </span></a>
          <h3 className="mt-4 rounded py-2 px-2 dark:text-black dark:bg-white bg-black text-white">{props.tools}</h3>
        </div>
      </div>
    </div>
  );
};

export default Sample;
