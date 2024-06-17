//DEFINING FUNCTION 
//1ST WAY
function demo()
{
    const u=5
    const v=6
    console.log(u+v)

}
demo()//TO CALL FUNCTION

function demo1(x,y)//parameters
{
    const a=x
    const b=y
    console.log(a+b)

}
demo1(5,9)//arguments

//2ND WAY ARROW METHOD
const demo2 = (s,t) =>
    {
        const q=s
        const r=t
        console.log(q-r)
    };
demo2(59,56)

const demo3 = (o,p) =>
    {
        const m=o;
        const n=p;
        const d=m+n;
        return d;
    };
    const d=demo3(5,5)
    const e=d
    console.log(e)





