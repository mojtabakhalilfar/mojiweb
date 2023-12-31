import React, { useContext } from "react";
import { ClickedAll } from "../App";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { TiThMenu } from "react-icons/ti";
import { MdLanguage } from "react-icons/md";

const Header = (props) => {
  const { darkmood, setdarkmood } = useContext(ClickedAll);
  const { hide, setHide } = useContext(ClickedAll);
  const { farsi, setFarsi } = useContext(ClickedAll);
  return (
    <div className={props.className}>
      <div className="w-full h-full flex justify-between items-center border-b-4 dark:border-gray-100 border-black">
        <div className="w-1/4 h-ull flex justify-center pl-16">
          <button
            className="block lg:hidden w-16 h-12"
            onClick={() => setHide(!hide)}
          >
            <TiThMenu className="w-full h-full mr-4 sm:mr-0" />
          </button>
        </div>
        <div className="w-3/4 h-full flex justify-end items-center lg:ml-6">
          <button
            className="lg:w-24 lg:h-16 w-16 h-12"
            onClick={() => setdarkmood(!darkmood)}
          >
            {darkmood ? (
              <MdDarkMode className="w-full h-full" />
            ) : (
              <MdOutlineDarkMode className="w-full h-full" />
            )}
          </button>
          <button
            onClick={() => setFarsi(!farsi)}
            className="lg:w-20 lg:h-12 w-16 h-12"
          >
            <MdLanguage className="w-full h-full" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
