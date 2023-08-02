import React, { useContext } from "react";
import { ClickedAll } from "../App";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

const Header = (props) => {
  const { darkmood, setdarkmood } = useContext(ClickedAll);
  return (
    <div className={props.className}>
      <div className="w-full h-full flex justify-between items-center">
        <div className="w-full h-full">
          <button className="w-full h-full" onClick={() => setdarkmood(!darkmood)}>
            {darkmood ? <MdDarkMode className="w-full h-full p-2" /> : <MdOutlineDarkMode className="w-full h-full p-4" />}
          </button>
        </div>
        <div className="w-full h-full">
            <button className="w-full h-full">
                fa/en
            </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
