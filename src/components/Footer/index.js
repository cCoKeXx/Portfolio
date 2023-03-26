import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FiFigma } from "react-icons/fi";
import classes from "./Footer.module.css";

const index = () => {
  return (
    <div className="relative  flex justify-center items-center  bg-background bg-cover bg-center shadow-3xl">
      <div
        className={` text-slate-50 xs:text-black ${classes.background} p-2 flex justify-center items-center flex-col h-full w-full ss:w-11/12 sm:w-10/12 md:w-3/5  text-center`}
      >
        <h2 className="uppercase font-medium">My other socials</h2>
        <div className="flex gap-2 text-4xl my-5">
          <a href="https://github.com/cCoKeXx" target="_blank">
            <AiFillGithub />
          </a>
          <a
            href="https://www.figma.com/file/TwfMfaj3AvesJBUsgJhiER/Portfolio?node-id=0-1&t=SIu6C87UnI2wBz7x-0"
            target="_blank"
          >
            <FiFigma />
          </a>
        </div>
        <div className="flex items-center gap-2 ">
          <hr className="w-10 xs:w-20 h-0.5 bg-red-700 border-none" />
          <p>Developed and designed by Stefan Petković</p>
          <hr className="w-10 xs:w-20 h-0.5 bg-red-700 border-none" />
        </div>
        <div className="flex items-center gap-2">
          <hr className="w-10 xs:w-20 h-0.5 bg-red-700 border-none" />
          <a
            href="https://www.freepik.com/free-vector/laptop-realistic_35202486.htm#query=transparent%20laptop&position=9&from_view=search&track=ais"
            target="_blank"
            className="text-sm"
          >
            Image by juicy_fish
          </a>
          <hr className="w-10  xs:w-20 h-0.5 bg-red-700 border-none" />
        </div>
      </div>
    </div>
  );
};

export default index;
