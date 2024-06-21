const arr=["GOJO","YUJI",1,true];// we can store multiple values without taking care of dataype

//console.log(0==false) >> OUTPUT TRUE 
//console.log(""==false) >> OUTPUT TRUE
//console.log(undefined==false) >> OUTPUT TRUE
//console.log(undefined==undefined) >> OUTPUT TRUE

//console.log(NaN==NaN) >> OUTPUT FALSE  //NaN = NOT A NUMBER
//console.log(NaN===NaN) >> OUTPUT FALSE  //NaN = NOT A NUMBER

//console.log(typeof NaN) >> OUTPUT NUMBER  //NaN = NOT A NUMBER 

//console.log(typeof typeof NaN) >> OUTPUT STRING  //NaN = NOT A NUMBER

//var doesn't care about BLOCK SCOPE 
/*{var a= 21;}
console.log(a)*/    //OUTPUT----- 21

/*
{let a=21;} 
console.log(a)*/  //OUTPUT----ERROR  //SAME IN CASE OF CONST  

let a=21;  //GLOBAL VARIABLE DECLARATION
{
    a=22;     //value of will be updated
}
console.log(a) //

let b=21;  //GLOBAL VARIABLE DECLARATION
{
    let b=21;
    b=22;     //value of will be updated but not be printed bcoz of no console.log
}
console.log(b) //21

console.log(c)
let c=21;   //OUTPUT= ERROR  //SAME IN CASE OF CONST

console.log(d)
var d=21;  // THIS IS CALLED HOISTRING   //OUTPUT= UNDEFINED