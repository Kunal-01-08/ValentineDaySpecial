import React, { useEffect, useState } from 'react'
import Q1 from './Q1'
import Q2 from './Q2'
import Q3 from './Q3'
import Q4 from './Q4'
const Main = () => {
  const [name, setname] = useState("Beautiful")
  const [q, setq] = useState(1);
  useEffect(() => {
     let nm=prompt("Enter your name , else I'll call you beautiful ;)")
     if(nm.trim()!=="") {
        setname(nm)
        alert(`Hi ${nm}`)
      }
    
  },[])
  
  return (
    <div className='bg-rose-200 h-screen w-screen flex justify-around items-center absolute'>
      {q==1 && <Q1 q={q} setq={setq}/>}
      {q==2 && <Q2 q={q} setq={setq}/>}
      {q==3 && <Q3 q={q} setq={setq}/>}
      {q==4 && <Q4 q={q} setq={setq} name={name}/>}


      
    </div>
  )
}

export default Main
