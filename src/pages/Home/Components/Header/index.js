import React from "react";

const index = () => {
  return (
    <div className="w-full h-80 bg-background bg-cover bg-center h-50 flex justify-center items-center shadow-3xl" id="header">
      <div className="flex mx-2 flex-col items-end  justify-center">
        <div className="flex flex-col xs:flex-row bg-gradient-to-r from-slate-50/50 via-slate-50 to-slate-50/50 text-transparent bg-clip-text ">
          <h1 className=" uppercase   text-5xl xxs:text-5xl md:text-7xl">
            stefan
          </h1>
          <h1 className="uppercase  text-5xl ml-10 xs:ml-3 xxs:text-5xl md:text-7xl">
            petković
          </h1>
        </div>
        <h2 className="text-slate-50 uppercase text-sm md:text-lg">
          front-end-developer
        </h2>
      </div>
    </div>
  );
};

export default index;
