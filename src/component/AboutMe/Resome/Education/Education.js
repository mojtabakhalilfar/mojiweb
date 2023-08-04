import React, { useContext } from "react";
import { ClickedAll } from "../../../../App";

const Education = (props) => {
  const { farsi } = useContext(ClickedAll);
  return (
    <div dir={farsi ? "rtl" : "ltr"} className={props.className}>
      <div className="flex h-full w-full flex-col items-start justify-start pt-4 px-8">
      <div >
        <h2 className="lg:pt-4 pt-2 lg:text-2xl text-xl">
          {farsi ? "سوابق تحصیلی" : "Educational Background"}
        </h2>
      </div>
      <div className="flex flex-col items-start justify-start lg:pt-4 p-2 pr-16">
        <span className="">
          {" "}
          {farsi ? "مهندسی کامپیوتر" : "Computer Engineering"}
        </span>
        <span className="">
          {farsi ? " دانشگاه یاسوج" : " Yasuj University"}
        </span>
      </div>
      </div>
    </div>
  );
};

export default Education;
