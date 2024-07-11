import HomePage from "./Component/HomePage"
import  "./App.css"   //FOR EXTERNAL CSS
import Product from "./Component/Product"
import React, { useState } from 'react';
import Navigation from "./Navigation/Navigation";
import { BrowserRouter} from "react-router-dom"



function Apps(){
  return(
    <>
    <BrowserRouter>
       <Navigation/>
    </BrowserRouter>
    </>
  )
}


const App = () =>{
  const a=true; //p{BackgroundColor :red}  //CAMELCASE STYLE
  const name="MIKEY";

  //useSate is a function in js
  let [count,setCount]=useState(20);//const[any name,anyname]=useState(initialised value);
  const handleClick=()=>  //FUNCTION FOR onClick METHOD //ONCLICK CAN BE USED IN H1 TAG,DIV TAG //WORK SAME AS BUTTON
    {
      console.log("BUTTON CLICKED")
      setCount(count++);
      console.log(count)
    }
  return(              
    <div>
      <h2>Value of Count= {count}</h2>
      <button onClick={handleClick}>CLICK ON ME</button>

      <h1 style={{backgroundColor:"red",color:"yellow"}}> GOJO</h1>
      <p className="name">ITADORI YUJI</p> 
      isHappy ? "🙂" : "🙁"
      {a==true?<h1>KONICHIWAA</h1>:<h1>SAYUNARA</h1>}
      <HomePage owner={name} marks="99"/>
      <HomePage owner={"HINATA"} marks="95"/>
      <HomePage owner={"DURAKEN"} marks="90"/>

      <Product title={"LAPTOP"} price="30k"/>
      <Product title={"MOBILE"} price="20k"/>
      <Product title={"PENDRIVE"}/>
    </div>     
  )
}
export default App

//npm start  or npm run start ------starts react app
//npx create-react-app folderName     to create react project

//{}  used to write js

//Math.random()----randomly passes any value from 0-9  //JAVASCRIPT BUILTIN FUNCTION

//RAFCE-----TO WRITE CODE OF REACT APP
// WRITE HTML CODE IN RETURN

//className to give class 

//WRITE CODE IN <DIV>  
     
 /*CONDITIONAL RENDERING  {a==true?<h1>KONICHIWAA</h1>:<h1>SAYUNARA</h1>}  CONDITION KE BASIS PE RENDER*/

 /*  INLINE STYLE  ----camelCase is used
 EX-
     <H1 STYLE ={{backgroundColor:"red",color:"green"}}></H1>
     {}---for js 1{}
     {{}} ---for object 2nd{}
 */

  // <HomePage owner={name}/>    used to pass the value in homepage
