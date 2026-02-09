import React from 'react'

const Q1 = (props) => {
  return (
    <div className='w-7/10 h-6/7 bg-pink-200 border-white border rounded-4xl p-4 flex flex-col items-center gap-4 absolute'>
      <img src="q1img.jpg" className='w-full h-1/2 object-contain   rounded-4xl' alt="sdfas" />
      <span className=' w-full text-center text-red-600 text-3xl font font-extrabold '>Free this valentine?</span>
      <button className='w-full h-15 p-2 bg-pink-500 text-white text-2xl font-bold rounded-2xl border-black hover:bg-blue-400 border-2' onClick={()=>props.setq(props.q+1)}>Hnji &#9829; :)</button>
      <button className='w-2/9 p-2 bg-pink-500 text-white text-2xl font-bold rounded-2xl border-black hover:bg-blue-400 border-2  absolute bottom-5 hover:right-0 active:left-0'>No :(</button>
    </div>
  )
}

export default Q1
