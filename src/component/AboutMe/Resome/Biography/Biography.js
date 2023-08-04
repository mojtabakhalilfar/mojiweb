import React, { useContext } from "react";
import { ClickedAll } from "../../../../App";

const Biography = (props) => {
  const { farsi } = useContext(ClickedAll);
  return (
    <div dir={farsi ? "rtl" : "ltr"} className={props.className}>
      <div className="flex h-full w-full flex-col items-start justify-start pt-4 px-8">
        <div>
          <h2 className="lg:text-2xl text-xl">
            {farsi ? " درباره من" : " About Me"}
          </h2>
        </div>
        <div className="w-full pb-4 px-4 font-Vazirmatn">
          <br />{" "}
          {farsi
            ? "در حال حاضر دانشجو کارشناسی هستم"
            : "I am currently an undergraduate student"}
          <br />{" "}
          {farsi
            ? "ساکن یاسوج هستم سربازی نرفتنم"
            : "I am a resident of Yasuj and I am not a soldier."}
          <br />{" "}
          {farsi
            ? "به برنامه نویسی علاقه مندم در حال حاضر فرانت کار میکنم ولی به امنیت هم علاقه دارم"
            : "Im interested in programming، but Im currently working front، but Im also interested in security."}
        </div>
      </div>
    </div>
  );
};

export default Biography;
