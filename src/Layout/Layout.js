import React , {useContext} from "react";
import Navbar from "../Navbar/Navbar";
import { ClickedAll } from "../App";
import Header from "../Header/Header";

const Layout = (props) => {
  
  const {darkmood}=useContext(ClickedAll)
  return (
    <div className={darkmood?'dark':null}>
      <div className="flex w-screeen flex-row-reverse h-screen">
        <div className="h-screen flex flex-col items-start justify-start w-4/5 rounded dark:text-white dark:bg-black bg-gray-100">
          <Header className="w-full h-16 dark:text-white dark:bg-black bg-white text-black "/>
          <main className=" w-full h-full flex items-start justify-center overflow-auto">
            {props.children}
          </main>
        </div>
        <Navbar className="w-1/5 h-full dark:text-white dark:bg-black bg-white mr-4 flex items-start justify-center flex-col overflow-hidden" />
      </div>
    </div>
  );
};

export default Layout;
