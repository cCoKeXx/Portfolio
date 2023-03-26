import React,{useRef,useEffect} from "react";
import Card from 'pages/Home/Components/Skills/components/card'
import {AiFillHtml5 , AiFillGithub} from 'react-icons/ai'
import {DiCss3,DiReact,DiGitPullRequest,DiJavascript1,DiSass} from 'react-icons/di'
import {SiNextdotjs,SiRedux,SiTailwindcss,SiFigma,SiAdobexd} from 'react-icons/si'
import {motion, useAnimation, useInView } from "framer-motion";

const Index = () => {
  const ref = useRef();
  const isInView = useInView(ref);
  const animation = useAnimation();
  useEffect(()=>{
    if(isInView){
      animation.start({
        opacity:1,
        transition: {
          type: "spring",
          duration: 3,
          delay: 0.3
        },
      })
    }
    if(!isInView){
      animation.start({opacity:0})
    }
  },[isInView])
  return (
    <div className="w-full py-10 mb-20 flex flex-col justify-center items-center gap-10">
      <div className="flex flex-col items-center ">
        <h2 className="uppercase md:text-2xl font-medium">my skills</h2>
        <hr className="w-3/5 h-1 bg-black bg-gradient-to-r from-red-600 via-red-900 to-red-600" />
      </div>
      <motion.div className="w-4/5 px-3 lg:w-1/2 flex justify-center flex-wrap items-center gap-10 " ref={ref} animate={animation}>
        <Card title={"HTML"} image={<AiFillHtml5/>}/>
        <Card title={"CSS"} image={<DiCss3/>}/>
        <Card title={"React"} image={<DiReact/>}/>
        <Card title={"GitHub"} image={<AiFillGithub/>}/>
        <Card title={"Git"} image={<DiGitPullRequest/>}/>
        <Card title={"JavaScript"} image={<DiJavascript1/>}/>
        <Card title={"Next"} image={<SiNextdotjs/>}/>
        <Card title={"Redux"} image={<SiRedux/>}/>
        <Card title={"SASS"} image={<DiCss3/>}/>
        <Card title={"TAILWIND"} image={<SiTailwindcss/>}/>
        <Card title={"FIGMA"} image={<SiFigma/>}/>
        <Card title={"Adobe XD"} image={<SiAdobexd/>}/>
      </motion.div>
    </div>
  );
};

export default Index;
