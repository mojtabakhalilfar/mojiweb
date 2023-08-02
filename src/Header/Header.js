import React, { useContext } from "react";
import { ClickedAll } from "../App";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import ReactAudioPlayer from "react-audio-player";

const Header = (props) => {
  const { darkmood, setdarkmood } = useContext(ClickedAll);
  return (
    <div className={props.className}>
      <div className="w-full h-full flex justify-between items-center border-b-4 dark:border-gray-100 border-black">
        <div className="w-1/4 h-full">
          <button className="w-24 h-16" onClick={() => setdarkmood(!darkmood)}>
            {darkmood ? <MdDarkMode className="w-full h-full" /> : <MdOutlineDarkMode className="w-full h-full" />}
          </button>
        </div>
        <div>
          {/* <audio  controls autoPlay>
            <source src="http://dl.behmelody.in/1401/Tir/Emrah%20Karaduman%2C%20No%20Method%20-%20All%20Night%20%282%29.mp3" type="audio/mpeg"/>
          </audio> */}
          <ReactAudioPlayer src="http://dl.behmelody.in/1401/Tir/Emrah%20Karaduman%2C%20No%20Method%20-%20All%20Night%20%282%29.mp3" controls/>
        </div>
        <div className="w-1/4 h-full flex items-end justify-start">
            <button className="w-24 h-16">
                fa/en
            </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
