import React, { useEffect, useState } from 'react'
import axios from "axios";
const Apiintegration = () => {
    const[vignesh,setVignesh]=useState([]);
    const switchdata = async ()=>{
     const responsive= await  axios.get("https://jsonplaceholder.typicode.com/posts")
     console.log(responsive)

    //  const res = await responsive.json()
     setVignesh(responsive.data)
    }



    useEffect(()=>{
        switchdata()
    },[]);
    console.log(vignesh)
      return (
    <div>
      <ul>
        
            {vignesh.map((item,index)=>(
                <li key={index}><h3>{item.title}</h3><p>{item.body}</p></li>
            ))}
        
      </ul>
     
    </div>
  )
}

export default Apiintegration
