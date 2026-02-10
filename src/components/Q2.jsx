import React, { useRef,useState} from "react";

const Q2 = (props) => {
  const dragging = useRef(false);
   const [pos, setPos] = useState({ x: 0, y: -200 }); // use state instead of ref
  const start = useRef({ x: 0, y: 0 });

  return (
    <div
      className="relative h-screen w-screen flex flex-col justify-center"
      onMouseUp={() => {
        dragging.current = false;
      }}
      onTouchEnd={() => {
        dragging.current = false;
      }}
      onTouch
      onMouseLeave={() => (dragging.current = false)}
      onTouchMove={(e) => {
        if (!dragging.current) return;
        setPos({
          x: e.touches[0].clientX - start.current.x,
          y: e.touches[0].clientY - start.current.y,
        });
         
      }}
      onMouseMove={(e) => {
        if (!dragging.current) return;
        setPos({
          x: e.clientX - start.current.x,
          y: e.clientY - start.current.y,
        });
      }}
      style={{ userSelect: "none" , touchAction:"none"}}
    >
        <div className="flex flex-col absolute left-[calc(100vw/2-100vw*5/12)] w-5/6 h-5/6">

      <div className="w-full h-fit  bg-pink-200 border-white border-4 rounded-4xl p-4 flex flex-col items-center  gap-4 z-1">
        <img
          src="q2img.jpg"
          className="w-60 h-25  object-cover object-center rounded-4xl"
          alt="sdfas"
          />
        <span className=" w-full text-center text-red-600 text-3xl font font-extrabold ">
          Hurraaaaaaah!
        </span>
        <span className="text-xl text-white">(Dancing in joy)</span>
      </div>
       <div className="w-full h-23/4 bg-pink-200 border-white border-4 rounded-4xl p-4 flex flex-col items-center gap-4 z-1">
        <img
          src="q2img3.jpg"
          className="w-60  object-cover object-center rounded-4xl"
          alt="sdfas"
        />
        <button className="text-white font-bold text-xl bg-red-800 p-2 rounded-2xl hover:bg-pink-600" onClick={()=>props.setq(props.q+1)}>Next :3 &#9829; (Go out with me gorjis girl)</button>
       
      </div>
          </div>
      
      <div
        onMouseDown={(e) => {
          dragging.current = true;
          start.current = {
            x: e.clientX-pos.x ,
            y: e.clientY-pos.y,
          };
        }}
        onTouchStart={(e) => {
          e.stopPropagation()
          dragging.current = true;
          start.current = {
            x: e.touches[0].clientX-pos.x ,
            y: e.touches[0].clientY-pos.y,
          };
        }}
        className="w-fit h-fit absolute cursor-grab flex flex-col items-center z-1 "
        style={{ left: pos.x, top: pos.y }}
      ><img src="q2img2.jpg" className="w-60 rounded-t-4xl" alt="" />
      <span className=" flex items-baseline-last h-[calc(100vh/2)]  bg-red-500 text-white font-extrabold rounded-b-2xl p-2  ">Drag me!</span>
      </div>

      

     

    </div>
  );
};

export default Q2;
