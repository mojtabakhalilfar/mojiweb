import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ClickedAll } from "../../../App";

const ContactWithMe = (props) => {
  const { farsi } = useContext(ClickedAll);
  const { message, setMessage , num , setNum } = useContext(ClickedAll);
  const { register, handleSubmit } = useForm();
  const sendPm = (data) => {
    const messages = {...data};
    // messages[`user${num}`] = data;
    
    setNum(num+1)
    setMessage({ ...message,messages});
    console.log(message);
    console.log(messages);
    console.log(data);
  };
const textFarsi=(<p className="my-2 px-2 dark:text-white">
راه های ارتباطی با من در
{' '}<Link className="text-blue-500" to="/aboutmE">
  این صفحه 
</Link>{' '}
وجود دارند ولی در این قسمت هم میتونید با من در ارتباط باشید
</p>)
const textEnghlish=(<p dir="ltr" className="my-2 px-2 dark:text-white">
Ways to Contact Me
{' '}<Link className="text-blue-500" to="/aboutmE">
  This page 
</Link>{' '}
They exist، but you can also contact me here.
</p>)

  return (
    <div className={props.className}>
      <div className="w-4/5 h-full bg-white dark:bg-gray-600 dark:text-black rounded-lg p-4 flex flex-col justify-start items-center">
        <div className="mb-6">
          <h2 className="text-center my-2 dark:text-white">
           {farsi?' ارتباط با من':' Contact me'}
           </h2>
      {farsi?textFarsi:textEnghlish}
        </div>
        <form onSubmit={handleSubmit(sendPm)} className="flex flex-col w-2/3" dir={farsi?'rtl':'ltr'}>
          <label className="dark:text-white" for="name">
            {farsi?'نام':'name'}
          </label>
          <input
          className="py-2 px-4 outline-none border-2 border-gray-500 rounded"
            placeholder={farsi?"نام خود را وارد کنید":"Enter your name"}
            id="name"
            type="text"
            {...register("name")}
          />
          <br />
          <label className="dark:text-white" for="subject">
            {farsi?'موضوع':'subject'}
          </label>
          <input
          className="py-2 px-4 outline-none border-2 border-gray-500 rounded"
            placeholder={farsi?"موضوع را وارد کنید":"Enter the Subject"}
            id="subject"
            type="text"
            {...register("subject")}
          />
          <br />
          <label className="dark:text-white" for="email">
            {farsi?'ایمیل':'email'}
          </label>
          <input
          className="py-2 px-4 outline-none border-2 border-gray-500 rounded"
            placeholder={farsi?"ایمیل خود را وارد کنید":"Enter your email"}
            id="email"
            type="email"
            {...register("email")}
          />
          <br />
          <textarea
          className="py-2 px-4 outline-none border-2 border-gray-500 rounded"
            cols="40"
            placeholder={farsi?" متن ارسالی را وارد کنید":"Enter the sent text"}
            {...register("text")}
          />
          <input className="py-2 px-4 bg-blue-500 mt-4" type="submit" value={farsi?"ارسال" :'send'}/>
        </form>
      </div>
    </div>
  );
};

export default ContactWithMe;
