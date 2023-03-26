import React, { useState, useEffect } from "react";
import Logo from "assets/Logo.png";
import { BiMenu } from "react-icons/bi";
import { Link } from "react-scroll";
import { GiExitDoor } from "react-icons/gi";
import classes from "./Navbar.module.css";
import Resume from "assets/Resume.pdf";

const Index = () => {
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    const navbar = document.getElementById("navbar");
    const navbarHeight = navbar.clientHeight
    const header = document.getElementById("header");
    const headerHeight = header.clientHeight;
    let theEnd = 0;
    const navFunction = () => {
      var scrollTop = window.pageXOffset || document.documentElement.scrollTop;

      if (scrollTop > headerHeight-navbarHeight) {
        navbar.classList.add(classes.navbar);
      }else{
        navbar.classList.remove(classes.navbar);
      }

      if (scrollTop > theEnd) {
        navbar.style.top = "-100px";
        setMenu(false)
      } else {
        navbar.style.top = "0";
      
      }
      theEnd = scrollTop;
    };
    window.addEventListener("scroll", navFunction);
  }, []);
  return (
    <div
      className="w-full px-3 py-3 flex ss:px-7 justify-between items-center text-slate-50 fixed ease-in-out duration-300 z-50"
      id="navbar"
    >
      <a href="/">
        <img src={Logo} alt="" className="w-10 xxs:w-12 xs:w-14" />
      </a>

      <div className="hidden ss:flex gap-5 items-center">
        <Link
          to="about"
          smooth={true}
          duration={800}
          className="cursor-pointer"
        >
          About me
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={800}
          className="cursor-pointer"
        >
          Contact
        </Link>
        <a
          href={Resume}
          download="Resume"
          className="border border-slate-50 px-2 py-1 rounded-md cursor-pointer"
        >
          Resume
        </a>
      </div>
      <button
        className=" ss:hidden text-4xl"
        onClick={() => {
          setMenu(!menu);
        }}
      >
        <BiMenu />
      </button>
      {menu && (
        <div className="absolute right-0 top-0 py-10 bg-slate-50 text-black w-60 rounded-bl-3xl">
          <button
            onClick={() => setMenu(false)}
            className="absolute right-10 top-5 "
          >
            <GiExitDoor className="text-3xl" />
          </button>
          <div className="flex flex-col gap-5  items-center justify-evenly text-2xl mt-10">
            <Link
              to="about"
              smooth={true}
              duration={800}
              className="cursor-pointer"
              onClick={() => {
                setMenu(false);
              }}
            >
              About me
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={800}
              className="cursor-pointer"
              onClick={() => {
                setMenu(false);
              }}
            >
              Contact
            </Link>
            <a
              href={Resume}
              download="Resume"
              className="border border-slate-50 px-2 py-1 rounded-md cursor-pointer"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Index;
