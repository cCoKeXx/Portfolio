import React from "react";
import { Link } from "react-scroll";
const index = () => {
  return (
    <div className="w-full mb-20 shadow-3xl bg-background bg-cover bg-bottom text-slate-50 flex justify-center" id="about">
      <div className="py-10 max-w-6xl w-11/12 xs:w-4/5 sm:w-9/12 sm:py-20 flex flex-col justify-center items-center gap-10 backdrop-blur-[3px]  bg-[#ffffff15]">
        <div className="flex flex-col items-center ">
          <h2 className="uppercase sm:text-2xl text-xl">ABOUT ME</h2>
          <hr className="w-1/2 h bg-slate-50" />
        </div>
        <p className="w-11/12 sm:text-lg sm:w-3/5 md:w-3/5">
          My name is Stefan Petkovic, front-end developer from Serbia. My
          journey started all the way back in High School where I found out
          about HTML and CSS. Since then I decided to proceed to the self-taught
          path. Learning and making projects on CodeCademy website I earned
          certifications for JavaScript, CSS and full front-end career path. My
          preference is working with React and Next.js to build product ready
          website that are responsive and fully functional.
        </p>

        <Link
          to="contact"
          smooth={true}
          duration={800}
          className="px-5 py-1 uppercase border border-slate-50 sm:px-10 sm:py-2 mt-10 hover:bg-white hover:text-black cursor-pointer duration-300 ease-in-out"
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default index;
