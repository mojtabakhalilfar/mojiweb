import React from "react";
import Explain from "./Explain";

const Explains = (props) => { 
  return (
    <div className={props.className}>
      <div className="flex sm:flex-col lg:flex-row flex-wrap items-center justify-center w-full h-full">
        <Explain
          className="lg:w-1/2 sm:w-full"
          img="https://th.bing.com/th/id/OIP.lmpxMI1Ymuj-R9TH8j5zsQHaEK?pid=ImgDet&rs=1"
          alt="bg1"
          title="نمونه کار"
        >تو این قسمت میتونید نمونه کارامو ببینید</Explain>
        <Explain
          className="lg:w-1/2 sm:w-full"
          img="https://th.bing.com/th/id/OIP.lmpxMI1Ymuj-R9TH8j5zsQHaEK?pid=ImgDet&rs=1"
          alt="bg1"
          title="درباره من"
        >تو این قسمت میتونید درباره من بخونید و رزومه و مهارتامو ببینید</Explain>
        <Explain
          className="lg:w-1/2 sm:w-full"
          img="https://th.bing.com/th/id/OIP.lmpxMI1Ymuj-R9TH8j5zsQHaEK?pid=ImgDet&rs=1"
          alt="bg1"
          title="مقالات"
        >تو این قسمت مقاله هایی که به درد برنامه نویسی میخوره رو بخونید</Explain>
      </div>
    </div>
  );
};

export default Explains;
