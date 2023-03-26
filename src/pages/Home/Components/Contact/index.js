import React, { useRef, useReducer } from "react";
import Card from "pages/Home/Components/Contact/components/card";
import { MdEmail } from "react-icons/md";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import classes from "./index.module.css";
import emailjs from "@emailjs/browser";

const initialFormState = {
  name: "",
  email: "",
  message: "",
  error: null,
};

function formReducer(state, action) {
  switch (action.type) {
    case "clear":
      return { name: "", email: "", message: "", error: null };
    case "nameUpdate":
      return { ...state, name: action.payload };
    case "emailUpdate":
      return { ...state, email: action.payload };
    case "messageUpdate":
      return { ...state, message: action.payload };
    case "updateError":
      return { ...state, error: action.payload };
    default:
      return state;
  }
}

const Index = () => {
  const form = useRef();

  const [formState, dispatchForm] = useReducer(formReducer, initialFormState);

  const submitHandler = (e) => {
    e.preventDefault();
    if (
      formState.name === "" ||
      formState.email === "" ||
      formState.message === ""
    ) {
      dispatchForm({
        type: "updateError",
        payload: "Please fill in all inputs",
      });
    } else {
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(
          (result) => {
            console.log(result);
            dispatchForm({ type: "clear" });
          },
          (error) => {
            console.log(error);
          }
        );
    }
  };
  return (
    <div
      className="w-full pb-10  bg-slate-50 mb-60 flex flex-col-reverse justify-center  md:flex-row md:pb-0 overflow-hidden shadow-3xl"
      id="contact"
    >
      <div className="flex px-5 py-5 flex-1 justify-center items-center md:pl-5">
        <div>
          <h2 className="uppercase font-medium text-2xl text-center mb-3 md:text-left">
            get in touch
          </h2>
          <p className="max-w-xl xs:max-w-sm ss:max-w-md">
            If you have any questions, comments, or inquiries, feel free to get
            in touch with me. I value your feedback and would be happy to assist
            you in any way I can.
          </p>
          <div className="flex flex-col gap-10 mt-5  ss:flex-row ss:justify-evenly md:flex-col md:items-start lg:flex-row ">
            <a href="mailto:stefan.dev@yahoo.com"><Card text={"stefan.dev@yahoo.com"} image={<MdEmail />} /></a>
            <a href="https://www.instagram.com/stefan__dev/" target="_blank"><Card text={"stefan.dev"} image={<AiFillInstagram />} /></a>
            <a href="https://www.linkedin.com/in/stefan-petkovi%C4%87-2b9b7a266/" target="_blank"><Card text={"Linked in"} image={<AiFillLinkedin />} /></a>
          </div>
        </div>
      </div>

      <div className="flex-1 relative flex justify-center items-center lg:justify-center text-slate-50 md:flex-[2] lg:flex-1">
        <div className={`${classes.background} w-[150vw]`}></div>
        <form
          ref={form}
          onSubmit={submitHandler}
          className={`${classes.formBorder} z-10 mx-4 rounded-3xl relative flex flex-col items-center justify-center max-w-xs  w-full px-5 py-20 my-20 gap-4 backdrop-blur-[3px]  bg-[#ffffff15]   `}
        >
          {formState.error && <p>{formState.error}</p>}
          <input
            onChange={(e) =>
              dispatchForm({ type: "nameUpdate", payload: e.target.value })
            }
            type="text"
            placeholder="name"
            name="name"
            value={formState.name}
            className="w-full border rounded pl-2 py-1 backdrop-blur-[10px] bg-[#f1f1f134] outline-1 outline-slate-50"
          />
          <input
            type="text"
            onChange={(e) =>
              dispatchForm({ type: "emailUpdate", payload: e.target.value })
            }
            placeholder="email"
            name="email"
            value={formState.email}
            className="w-full border rounded pl-2 py-1 backdrop-blur-[10px] bg-[#f1f1f134] outline-1 outline-slate-50"
          />
          <textarea
            name="message"
            placeholder="Message"
            onChange={(e) =>
              dispatchForm({ type: "messageUpdate", payload: e.target.value })
            }
            value={formState.message}
            className="border rounded pl-2 py-1 w-full h-20 resize-none backdrop-blur-[10px] bg-[#f1f1f134] outline-1 outline-slate-50"
          ></textarea>
          <button
            type="submit"
            className="bg-slate-50 z-10 text-black px-4 py-1 rounded"
          >
            SEND
          </button>
        </form>
      </div>
    </div>
  );
};

export default Index;
