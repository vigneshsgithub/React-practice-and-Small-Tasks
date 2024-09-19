import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Myfunc from './Myfunction';
import Myclass from './Props1';
import Vignesh from './Props2';
import Funcbutton from './Functionbutton';
import ClassButton from './Classbutton';
import Mycounter from './Newcompfun';
import Mycondition from './Condition';
import Listrender from './Listrendering';
import  Mystyle1 from './Mystyle';
import { Controlledcomp } from './Controlledcomp';
import LifecycA from './LifecycleA';
import Image from './Imagechanges';
import Imagestate from './Imagestate';
import Purecom from './Purecomponent';
import Purecom1 from './Purecom1';
import FuncState from './Funpure1';
import Funpure from './Funpure';
import Funpure1 from './Funpure1';
import { Hooksfunc } from './Hooksfunc';
import Incrementcomp from './Incrementcomp';
import Newcompfun from './Newcompfun';
import Apiintegration from './Apiintegration';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* {/* <App />
<Component></Component> 
<Myfunc name="vignesh"></Myfunc> 
<Myclass Fruit="apple"></Myclass>
<Vignesh></Vignesh>
<Funcbutton></Funcbutton>
<ClassButton></ClassButton> */}
{/* <Incrementcomp></Incrementcomp> */}

{/* <Mycondition></Mycondition>
<Listrender></Listrender>
<Mystyle1></Mystyle1>
<Controlledcomp></Controlledcomp>
<LifecycA></LifecycA>*/}
{/* <Image></Image>
<Imagestate></Imagestate>
<Purecom></Purecom>
<Purecom1></Purecom1>
<Funpure></Funpure> */}
<Apiintegration></Apiintegration>
{/* <Funpure1></Funpure1> 
<Hooksfunc></Hooksfunc> */}
{/* <Newcompfun></Newcompfun> */}
  </React.StrictMode>
  
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

