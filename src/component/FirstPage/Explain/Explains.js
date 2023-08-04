import React from "react";
import Explain from "./Explain";
import { ClickedAll } from "../../../App";
import { useContext } from "react";

const Explains = (props) => {
  const { farsi } = useContext(ClickedAll);
  return (
    <div className={props.className}>
      <div className="flex sm:flex-col lg:flex-row flex-wrap items-center justify-center w-full">
        <Explain
          className="lg:w-1/2 sm:w-full"
          img="https://th.bing.com/th/id/OIP.lmpxMI1Ymuj-R9TH8j5zsQHaEK?pid=ImgDet&rs=1"
          alt="bg1"
          title={farsi ? "نمونه کار" : "Portfolio"}
        >
          {farsi
            ? "تو این قسمت میتونید نمونه کارامو ببینید"
            : "You can see my portfolio here."}
        </Explain>
        <Explain
          className="lg:w-1/2 sm:w-full"
          img="https://th.bing.com/th/id/OIP.lmpxMI1Ymuj-R9TH8j5zsQHaEK?pid=ImgDet&rs=1"
          alt="bg1"
          title={farsi ? "درباره من" : "About Me"}
        >
          {farsi
            ? "تو این قسمت میتونید درباره من بخونید و رزومه و مهارتامو ببینید"
            : "In this section you can read about me and see my resume and skills."}
        </Explain>
        <Explain
          className="lg:w-1/2 sm:w-full"
          img="https://th.bing.com/th/id/OIP.lmpxMI1Ymuj-R9TH8j5zsQHaEK?pid=ImgDet&rs=1"
          alt="bg1"
          title={farsi ? "مقالات" : "Articles"}
        >
          {farsi
            ? "تو این قسمت مقاله هایی که به درد برنامه نویسی میخوره رو بخونید"
            : "Read the articles that are useful in programming."}
        </Explain>
      </div>
    </div>
  );
};

export default Explains;
