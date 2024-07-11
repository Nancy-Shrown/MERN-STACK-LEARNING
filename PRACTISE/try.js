//TRY N CATCH BLOCK USED FOR ERROR HANDLING
try
{
    console.log("Hello World");
    console.log("Bye World");
    console.log(Hello);
    console.log("Welcome World");
}
catch(error)
{
console.log("error",error);
}

//FUNCTION //CALL BACK TIME
setTimeout(()=>{console.log("hello")},1000);

//FUNCTION //CONTINOUSLY PRINT HELLO
setInterval(()=>{console.log("hello")},3000);

//
let id=setInterval(()=>{console.log("hello")},1000);
console.log(id)
clearInterval(id)

let num=setInterval(()=>{console.log("hello")},1000);
setTimeout(()=>{clearInterval(num)},1000);
console.log("num",num)

function sum(a,b=4)
{
    return a+b;
}
console.log(a=1,"a,b")

const outer=(a)=>
    {
        console.log("outer")
        a();
    }
const inner=()=>
    {
        console.log("inner")
    }




//ques
console.log("start");
setTimeout(()=>)
console.log("end")


//npx create-react-app name
//npm i -g create-react-app //for global install

