import React from "react";
import './Mystylecss.css'
function Listrender(){
    const arrayList=[{Name:'s1'},{Name:'s2'},{Name:'s3'},{Name:'s4'}]
    return(
        <div>
            <p className="text-center">List Rendering</p>
            {arrayList.map((value,index,array)=><p key={index} className={value.Name == "s3"?"Apple":""}>{value.Name}</p>)}
        </div>
    )
}
export default Listrender