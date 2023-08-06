import React, { useContext } from "react";
import { ClickedAll } from "../../../../App";
import Skill from "./Skill/Skill";
import {
  FaHtml5,
  FaReact,
  FaGit,
  FaGithub,
  FaPython,
  FaCss3,
} from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiRedux } from "react-icons/si";

const Skills = (props) => {
  const { farsi } = useContext(ClickedAll);
  return (
    <div className={props.className}>
      <div
        
        className="flex flex-col h-full items-center justify-center "
      >
        <div className="w-full">
          <h2
            dir={farsi ? "rtl" : "ltr"}
            className="lg:py-8 py-4 lg:text-2xl text-lg w-full px-8"
          >
            {farsi ? "مهارت ها" : "skills"}
          </h2>
        </div>
        <div className=" w-2/3 flex flex-row flex-wrap items-center justify-center pb-4">
          <Skill className="lg:w-1/3 w-1/4 text-orange-400" name="html">
            <FaHtml5 />
          </Skill>
          <Skill className="lg:w-1/3 w-1/4 text-blue-600" name="css">
            <FaCss3 />
          </Skill>
          <Skill className="lg:w-1/3 w-1/4 text-blue-400" name="tailwind">
            <SiTailwindcss />
          </Skill>
          <Skill className="lg:w-1/3 w-1/4 text-yellow-400" name="js">
            <SiJavascript />
          </Skill>
          <Skill className="lg:w-1/3 w-1/4 text-yellow-400" name="react">
            <FaReact />
          </Skill>
          <Skill className="lg:w-1/3 w-1/4 text-yellow-400" name="redux">
            <SiRedux />
          </Skill>
          <Skill className="lg:w-1/3 w-1/4 text-pink-500" name="git">
            <FaGit />
          </Skill>
          <Skill className="lg:w-1/3 w-1/4 text-pink-500" name="gitHub">
            <FaGithub />
          </Skill>
          <Skill className="lg:w-1/3 w-1/4 text-blue-600" name="python">
            <FaPython />
          </Skill>
        </div>
      </div>
    </div>
  );
};

export default Skills;
