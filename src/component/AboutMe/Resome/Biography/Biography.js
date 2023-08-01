import React from "react";

const Biography = (props) => {
  return (
    <div className={props.className}>
      <div className="flex h-full w-full flex-col items-start justify-start pt-4 px-8">
        <div>
          <h2 className="lg:text-2xl text-xl">درباره من</h2>
        </div>
        <div className="w-full pb-4 px-4 font-Vazirmatn">
          <br /> در حال حاضر دانشجو کارشناسی هستم
          <br /> ساکن یاسوج هستم سربازی نرفتنم
          <br /> به برنامه نویسی علاقه مندم در حال حاضر فرانت کار میکنم ولی حوزه
          به امنیت هم علاقه دارم
        </div>
      </div>
    </div>
  );
};

export default Biography;
