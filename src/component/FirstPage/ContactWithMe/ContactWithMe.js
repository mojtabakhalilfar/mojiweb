import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ClickedAll } from "../../../App";

const ContactWithMe = (props) => {
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
  return (
    <div className={props.className}>
      <div className="w-full h-full bg-white dark:bg-gray-600 dark:text-black rounded-lg p-4">
        <div className="mb-6">
          <h2 className="text-center my-2 dark:text-white">ارتباط با من</h2>
          <p className="my-2 px-2 dark:text-white">
            راه های ارتباطی با من در{" "}
            <Link className="text-blue-500" to="/aboutmE">
              این صفحه
            </Link>{" "}
            وجود دارند ولی در این قسمت هم میتونید به من ایمیل بدید{" "}
          </p>
        </div>
        <form onSubmit={handleSubmit(sendPm)} className="flex flex-col">
          <label className="dark:text-white" for="name">نام</label>
          <input
          className="py-2 px-4 outline-none border-2 border-gray-500 rounded"
            placeholder="نام خود را وارد کنید"
            id="name"
            type="text"
            {...register("name")}
          />
          <br />
          <label className="dark:text-white" for="subject">موضوع</label>
          <input
          className="py-2 px-4 outline-none border-2 border-gray-500 rounded"
            placeholder="موضوع را وارد کنید"
            id="subject"
            type="text"
            {...register("subject")}
          />
          <br />
          <label className="dark:text-white" for="email">ایمیل</label>
          <input
          className="py-2 px-4 outline-none border-2 border-gray-500 rounded"
            placeholder="ایمیل خود را وارد کنید"
            id="email"
            type="email"
            {...register("email")}
          />
          <br />
          <textarea
          className="py-2 px-4 outline-none border-2 border-gray-500 rounded"
            cols="40"
            placeholder=" متن ارسالی را وارد کنید"
            {...register("text")}
          />
          <input className="py-2 px-4 bg-blue-500 mt-4" type="submit" value="ارسال" />
        </form>
      </div>
    </div>
  );
};

export default ContactWithMe;
