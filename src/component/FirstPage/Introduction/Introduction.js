import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ClickedAll } from "../../../App";

const Introduction = (props) => {
  const { setClicked } = useContext(ClickedAll);
  return (
    <div className={props.className}>
      <div
        className={`w-full h-auto relative flex justify-center items-center`}
      >
        <img
          className="w-5/6 h-128 rounded-xl opacity-25"
          src="https://th.bing.com/th/id/R.1bc60bd3666fc3431cd8b1d1ac6c3d0a?rik=J5Pjsy7Dhb0HKg&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fc%2f7%2f2%2f52697.jpg&ehk=bSFndpRj8KLi1JoWtUOLDphHPT%2bKC3nAvyYQgMDgSeQ%3d&risl=&pid=ImgRaw&r=0"
          alt="background"
        />
        <div className="absolute top-0 w-full flex flex-col justify-center items-center font-Vazirmatn">
          <h2 className="lg:pt-8 pt-4">سلام به وب سایت من خوش آمدید</h2>
          <h2 className="lg:pt-2 pt-1">مجتبی خلیل فر هستم</h2>
          <p className="sm:w-3/4 lg:px-8 px-4 lg:pt-4 pt-2 text-center lg:leading-6 sm:leading-6 text-sm">
            برنامه نویسی یکی از کارهای مورد علاقه من است و از سال‌ها پیش در
            دنیای فناوری فعالیت می‌کنم. <br />
            با چند زبان کار کردم که جاوااسکریپت رو از بقیه بیشتر دوست دارم
            <br />
            تجربه در طراحی وبسایت و ساخت ربات تلگرامی دارم . همچنین، علاقه‌مند
            به حوزه امنیت ، یادگیری ماشینی و تجزیه و تحلیل داده‌ها هستم.
            <br />
            اگر نیاز به هر گونه کمک، پیشنهاد یا همکاری دارید، با من در ارتباط
            باشید
            <br />
            با امید به دیدار در دنیای برنامه نویسی و توسعه فناوری!
          </p>
          <Link
            className="lg:px-6 lg:py-4 sm:px-3 sm:py-2 sm:mt-1 bg-yellow-500 rounded-lg lg:mt-4"
            to="/aboutmE"
            onClick={() => {
              setClicked([false, false, false, true, false]);
            }}
          >
            درباره من
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
