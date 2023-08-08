import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ClickedAll } from "../../../App";

const Introduction = (props) => {
  const { setClicked } = useContext(ClickedAll);
  const { farsi } = useContext(ClickedAll);
  const textFarsi = (
    <p className="w-3/4 lg:px-8 px-4 lg:pt-4 pt-2 text-center lg:leading-9 leading-6 text-sm">
      برنامه نویسی یکی از کارهای مورد علاقه من است و از سال‌ها پیش در دنیای
      فناوری فعالیت می‌کنم. <br />
      با چند زبان کار کردم که جاوااسکریپت رو از بقیه بیشتر دوست دارم
      <br />
      تجربه در طراحی وبسایت و ساخت ربات تلگرامی دارم . همچنین، علاقه‌مند به حوزه
      امنیت ، یادگیری ماشینی و تجزیه و تحلیل داده‌ها هستم.
      <br />
      اگر نیاز به هر گونه کمک، پیشنهاد یا همکاری دارید، با من در ارتباط باشید
      <br />
      با امید به دیدار در دنیای برنامه نویسی و توسعه فناوری!
    </p>
  );
const textEnghlish =(<p dir="ltr" className="w-3/4 lg:px-8 px-4 lg:pt-4 pt-2 text-center lg:leading-9 leading-6 text-sm">
  Programming is one of my favorite things and has been around for years.
      I'm working on technology. <br />
      I've worked with several languages that I like JavaScript the most
      <br />
      I have experience in web design and building Telegram bots. Also interested in the area.
      Security, machine learning and data analysis.
      <br />
      If you need any help, suggestion or cooperation, contact me
      <br />
      Hope to meet you in the world of programming and technology development!
</p>)
  return (
    <div className={props.className}>
      <div
        className='w-full h-auto relative flex justify-center items-center '
      >
        <img
          className="w-5/6 h-[32rem] lg:h-126 rounded-xl opacity-25"
          src="https://th.bing.com/th/id/R.1bc60bd3666fc3431cd8b1d1ac6c3d0a?rik=J5Pjsy7Dhb0HKg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fc%2f7%2f2%2f52697.jpg&ehk=bSFndpRj8KLi1JoWtUOLDphHPT%2bKC3nAvyYQgMDgSeQ%3d&risl=&pid=ImgRaw&r=0"
          alt="background"
        />
        <div className="absolute top-4 w-full flex flex-col justify-center items-center font-Vazirmatn">
          <h2 className="lg:pt-8 pt-4">
            {farsi?'سلام به وب سایت من خوش آمدید':'Hello Welcome to my website'}
            </h2>
          <h2 dir={farsi?'rtl':'ltr'} className="lg:pt-2 pt-1">
            {farsi?'مجتبی خلیل فر هستم':'This is Mojtaba Khalilfar.'}
          </h2>
          {farsi?textFarsi:textEnghlish}
          <Link
            className="lg:px-6 lg:py-4 px-3 py-2 mt-1 bg-yellow-500 rounded-lg lg:mt-4"
            to="/aboutmE"
            onClick={() => {
              setClicked([false, false, false, true, false]);
            }}
          >
            {farsi?'درباره من':'About Me'}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
