import React, { useEffect, useState } from 'react'

export const Hooksfunc = () => {
    const[count,setcount]=useState(0);
    const[countnumber,setcountnumber]=useState(0);
useEffect(()=>{
    //acting as component didmount
    console.log("useEffect called")
    return()=>{
        //acting as component unmount
        console.log("clean up")
    }
},[count])//dependency

  return (
    <div>
        <p>{count}</p>
        <button onClick={()=>setcount(count+1)}>increment</button>
        <p>{countnumber}</p>
        <button onClick={()=>setcount(countnumber+1)}>increment</button>
    </div>
  )
}
