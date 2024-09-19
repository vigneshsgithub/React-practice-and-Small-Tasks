import React, { useState } from "react";
import './Images.css'
import img1 from './assets/img1.jpg'
import img2 from './assets/img2.jpg'
import img3 from './assets/img3.jpg'
import img4 from './assets/img4.jpg'
import img5 from './assets/img5.jpg'
function Imagestate(){
    const[imgstate,setState]=useState(img1);
    const[selectState,setselectState]= useState(1);
    const selectImage=(Imagestate)=>{
          console.log(Imagestate)
          if(Imagestate==1){
            setState(img1);
            setselectState(1);
          }
          if(Imagestate==2){
            setState(img2);
            setselectState(2);
          }
          if(Imagestate==3){
            setState(img3);
            setselectState(3);
          }
          if(Imagestate==4){
            setState(img4);
            setselectState(4);
          }
    }
    return(
        <div>
            <div>
            <img src={imgstate} className="image1 "/>
            </div>         
            {/* <p className="para">para</p> */}
{/* <p className={selectState == 1 ? 'fSize':''}>para</p>
<p className={`para ${selectState == 1 ? 'fSize':''}`}> both css</p> */}
             <div className="par">
            <img src={img1} className={`image2 ${selectState === 1 ? "imageBorder" : ""}`} onClick={()=>selectImage(1)}/>
            <img src={img2} className={`image2 ${selectState === 2 ? "imageBorder" : ""}`} onClick={()=>selectImage(2)}/>
            <img src={img3} className={`image2 ${selectState === 3 ? "imageBorder" : ""}`} onClick={()=>selectImage(3)}/>
            <img src={img4} className={`image2 ${selectState === 4 ? "imageBorder" : ""}`} onClick={()=>selectImage(4)}/>
           </div>
            </div>
    );
}
export default Imagestate