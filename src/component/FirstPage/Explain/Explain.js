import React from "react";
import { ClickedAll } from "../../../App";
import { useContext } from "react";

const Explain = (props) => {
  const { farsi } = useContext(ClickedAll);
  return (
    <div className={props.className}>
      <div className="w-80 h-44 lg:w-80 lg:h-64 relative my-8" dir={farsi?'rtl':'ltr'}>
        <div className="bg-gray-500 rotate-6 hover:rotate-12 absolute top-0 right-0 w-full h-full z-20 opacity-10 rounded-lg"></div>
        <div className="absolute top-0 right-0 w-full h-full">
          <div className="w-full h-full relative ">
          <img
            src={props.img}
            alt={props.alt}
            className="w-full h-full opacity-70 z-10 rounded-lg"
          />
            <div className="absolute top-4 text-center w-full h-full">
            <h2>{props.title}</h2>
            <p>{props.children}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explain;
