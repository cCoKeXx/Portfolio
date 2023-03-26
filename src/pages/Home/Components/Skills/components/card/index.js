import React from "react";

const index = (props) => {
  return (
    <div className="w-20 h-[7rem] bg-slate-50 px-2 py-3 flex flex-col justify-center items-center gap-2 shadow-3xl text-center">
      <div className="text-4xl">{props.image}</div>
      <p>{props.title}</p>
    </div>
  );
};

export default index;
