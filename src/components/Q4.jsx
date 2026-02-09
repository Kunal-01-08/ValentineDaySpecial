import React from 'react'

const Q4 = (props) => {
  return (
    <div className='text-2xl text-yellow-400 bg-rose-600 h-fit w-fit m-2 p-6 text-center rounded-4xl flex flex-col items-center'>

        {`Thankyou for being my valentine ${props.name}, muaaaah !3`}
        <img src="q4img.jpg" className='w-full' alt="" />
      
    </div>
  )
}

export default Q4
