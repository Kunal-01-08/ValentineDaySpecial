import React from "react";

const Q3 = (props) => {
  return (
    <div className="w-7/8 h-7/8 bg-pink-200 border-white border rounded-4xl p-4 flex flex-col items-center gap-4 ">
      <span className=" w-full text-center text-red-600 text-3xl font font-extrabold ">
        Coffee date pe chalogi?
      </span>
      <div className=" flex w-full h-full flex-col items-center  lg:flex-row ">
        <div className="w-full lg:w-1/3 h-1/3 flex-col flex relative items-center" onClick={()=>props.setq(props.q+1)} > 
            <button className="w-full h-full p-2 bg-pink-500 text-white text-2xl font-bold rounded-2xl border-black hover:bg-blue-400 border-2 active:hidden  absolute z-1">
          Bilkul &#9829; :)
        </button>
        <button className="w-fit h-full  p-2 bg-pink-500 text-white text-2xl font-bold rounded-2xl border-black hover:bg-blue-400 border-2 ">
          <img
            className="object-cover object-bottom h-full w-full"
            src="q3img2.jpg"
            alt=""
          />
        </button>
        </div>

      <img
        src="q3img.jpg"
        className="w-1/3  object-contain  object-top  rounded-4xl"
        alt="sdfas"
        />

        <div className="w-full lg:w-1/3 h-1/3 flex-col flex relative items-center">
            <button className="w-full h-full p-2 bg-pink-500 text-white text-2xl font-bold rounded-2xl border-black hover:bg-blue-400 border-2 active:hidden  absolute z-1">
          Bilkul nhi, I hate u :/
        </button>
        <button className="w-fit h-full  p-2 bg-pink-500 text-white text-2xl font-bold rounded-2xl border-black hover:bg-blue-400 border-2 ">
          <img
            className="object-cover object-bottom h-full w-full"
            src="q3img3.jpg"
            alt=""
          />
        </button>
        </div>
        
    </div>
      
    </div>
  );
};

export default Q3;
