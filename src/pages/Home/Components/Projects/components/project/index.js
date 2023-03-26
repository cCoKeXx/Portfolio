import React, { useRef, useEffect } from "react";
import {motion, useAnimation, useInView } from "framer-motion";

import { BsCodeSlash } from "react-icons/bs";
const Index = (props) => {
  const imageRef = useRef();
  const isInView = useInView(imageRef);
  const animation = useAnimation();
  useEffect(() => {
    if (isInView) {
      animation.start({
        x: "0",
        transition: {
          type: "spring",
          duration: 3,
          bounce:0.3,
          delay:0.3
        },
      });
    }
    if(!isInView){
      animation.start({x:'-10rem'})
    }
    
  }, [isInView]);

  const { image, languages, text, title } = props;
  return (
    <div className="flex w-full flex-col items-center justify-center md:flex-row md:px-6">
      <motion.div
        ref={imageRef}
        animate={animation}
        className="ss:w-3/5 md:w-auto"
      >
        <img src={image} alt="" />
      </motion.div>

      <div className="max-w-sm flex flex-col items-center gap-4 md:items-start">
        <h2 className="text-2xl font-medium md:text-3xl">{title}</h2>
        <p className="sm:text-lg">{text}</p>
        <div className="flex gap-2">
          {languages &&
            languages.map((language, index) => (
              <p key={index} className=" text-gray-500">
                {language}
              </p>
            ))}
        </div>
        <div className="flex gap-4 items-center justify-center md:self-end">
          <a href={props.code} target="_blank"><BsCodeSlash className="text-2xl" /></a>
          <a href={props.link} target="_blank"><button className="bg-red-700 text-slate-50 px-3 ">LIVE</button></a>
        </div>
      </div>
    </div>
  );
};

export default Index;
