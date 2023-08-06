import React, { useContext } from "react";
import Button from "./Button/Button";
import { ClickedAll } from "../App";
import { FaSolarPanel, FaUsers, FaSpider } from "react-icons/fa";
import { GrArticle } from "react-icons/gr";
import { SiAboutdotme } from "react-icons/si";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const { setClicked } = useContext(ClickedAll);
  const {farsi} =useContext(ClickedAll)

  return (
    <div className={props.className}>
      <div className="fixed right-2 top-16 lg:right-10 overflow-hidden">
        <div className="lg:mt-2 m-0 h-3/4 w-full flex lg:justify-start justify-start items-center flex-col">
          <Button
            name={farsi?"صفحه اصلی":"Home"}
            Link="/"
            onClick={() => {
              setClicked([true, false, false, false, false]);
            }}
            index={0}
          >
            <FaSolarPanel />
          </Button>
          <Button
            name={farsi?"نمونه کار":"Portfolio"}
            Link="/portfolio"
            onClick={() => {
              setClicked([false, true, false, false, false]);
            }}
            index={1}
          >
            <FaUsers />
          </Button>
          <Button
            name={farsi?"درباره من":"About Me"}
            Link="/aboutmE"
            onClick={() => {
              setClicked([false, false, false, true, false]);
            }}
            index={3}
          >
            <SiAboutdotme />
          </Button>
          <Button
            name={farsi?"مقالات":"Articles"}
            Link="/articles"
            onClick={() => {
              setClicked([false, false, false, false, true]);
            }}
            index={4}
          >
            <GrArticle />
          </Button>
        </div>
        <div className="lg:h-1/6 h-1/4 mt-10 flex justify-center w-full">
          <Link to={"/"}>
            <FaSpider className="text-red-500 w-8 h-8" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
