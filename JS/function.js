//DEFINING FUNCTION 
//1ST WAY
function demo() //DEFAULT FUNCTION
{
    const u=5
    const v=6
    console.log(u+v)

}
demo()//TO CALL FUNCTION

function demo1(x,y)//parameters //PARAMETERISED FUNCTION
{
    const a=x
    const b=y
    console.log(a+b)

}
demo1(5,9)//arguments

//IT CAN BE CALLED BEFORE DECLARING IT
/*
EX-
CONSOLE.LOG(SUM(4,5)
FUNCTION SUM(X,Y)
{  
    RETURN X+Y
}
*/

//2ND WAY ARROW METHOD
const demo2 = (s,t) => //ARROW
    {
        const q=s
        const r=t
        console.log(q-r)
    };
demo2(59,56)

//IT CAN BE NOT CALLED BEFORE DECLARING IT 


const demo3 = (o,p) =>
    {
        const m=o;
        const n=p;
        const d=m+n;
        return d; //return keyword //returns value of d
    };
    const d=demo3(5,5)
    const e=d
    console.log(e)
    
//IN ARROW FUNCTION
/*const sum=(a,b)=>a+b
  console.log(sum)          //BY DEFAULT RETURN VALUES
  */




