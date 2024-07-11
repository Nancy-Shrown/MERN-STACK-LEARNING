import {Navbar} from "./Navbar"
const HomePage=(props)=>{
    console.log(props)
    return(
    <div>
        <h1>YUJI ITADORI</h1>
        <h4>{props.owner}</h4>
        <h4>{props.marks}</h4>
        <Navbar/>
    </div>
    )
};

export default HomePage;


//IMPORT THIS FILE IN APP.JS  BY USING IMPORT HOMEPAGE FROM ".HOMEPAGE"
//WE CAN RENDER THIS FILE MULTIPLE TIMES BY USING <HOMEPAGE/> IN APP.JS FILE
//EXPORT DEAFULT CAN BE USED MULTIPLE TIMES
//NAMED EXPORT CNOT BE USED MULTIPLE TIMES
/* NAMED DEFAULT
EXPORT const HomePage=()
CHANGE INSIDE IMPORT ALSO
IMPORT {HOMEPAGE} FROM "./HOMEPAGE"
*/
//PROPS is OBJECT WHICH HAVE PROPERTIES OWNER   {props.owner}  used to print the value
/* DESTRUCTURING OBJECT
({OWNER,MARKS}) 
<H4>(OWNER)</H4>*/  //ANOTHER WAY OF RENDERING

