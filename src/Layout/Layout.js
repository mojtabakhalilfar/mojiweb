import React, { useContext } from "react";
import Navbar from "../Navbar/Navbar";
import { ClickedAll } from "../App";
import Header from "../Header/Header";

const Layout = (props) => {
  const { darkmood } = useContext(ClickedAll);
  const {hide} = useContext(ClickedAll)
  const hideNavbar = "z-19 hidden lg:sticky absolute top-0 right-0 lg:block lg:w-1/5 h-h-fit bg-gray-100 dark:bg-black flex items-start justify-center flex-col overflow-hidden " 
  const blockNavbar = "z-10 block lg:sticky absolute top-0 right-0 lg:block lg:w-1/5 h-fit bg-gray-100 dark:bg-black flex items-start justify-center flex-col overflow-hidden " 
  return (
    <div className={darkmood ? "dark" : null}>
      <div className="flex flex-col w-screeenh h-fit bg-gray-100 dark:bg-black">
        <Header className="fixed z-20 w-full h-16 dark:text-white dark:bg-black bg-gray-100 text-black " />
        <div className="mt-16 z-1 relative h- flex items-start justify-start w-full rounded dark:text-white dark:bg-black bg-gray-100 text-black">
          <Navbar className={hide?hideNavbar:blockNavbar} />
          <main className="w-full lg:w-4/5 h-fit bg-gray-100 dark:bg-black flex items-start justify-center">
            {props.children}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
