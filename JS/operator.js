//ADDITION
const a=3
const b=5
const c=a+b
console.log(c)
// number+ string
const m=3
const n="5"
const o=m+n
console.log(o)

//SUBTRACTION
const x=3
const y=5
const z=x-y
console.log(z)

//MULTIPLICATION
const q=3
const r=5
const s=q*r
console.log(s)

//DIVISON
const d=15
const e=5
const f=d/e
console.log(f)

//COMPARISON OPERATOR
const u=12
const v=9
if(u>15)
    {
       console.log("TRUE");
    }
    else
    {
        console.log("FALSE");

    }

//CONDITIONAL (LOGICAL OPERATOR)
//&& AND---BOTH CONDITIONS MUST BE TRUE
const i=12
const j=9
if(i ==12 && j == 9)
    {
       console.log("TRUE");
    }
    else
    {
        console.log("FALSE");

    }
// || OR------ONE CONDITION MUST TRUE
const k=12
const l=9
if(k ==12 || l == 9)
    {
       console.log("TRUE");
    }
    else
    {
        console.log("FALSE");

    }

// ?? OPERATOR
const t= a ?? 10  //if value of a is not assigned then a dummy value will be assigned like 10 in this statement
console.log(t)

//TERNARY OPERATOR/conditions
a==3 ? console.log("TRUE") : console.log("FALSE")
//(IF CONDITION) ? CONDITION SATISIFIED>> TRUE: ELSE FALSE

a==4||b==5 ? console.log("TRUE") : console.log("FALSE")
//(IF a==4 or b==5 >> CONDITION SATISIFIED>> TRUE: ELSE FALSE)

a==5 && b==5 ? console.log("TRUE") :  b==1 ? console.log("FALSE") : console.log("LAST STATEMENT")

//temperal lateral string ` used for dynamic work like we can change state name easily`
const state="HARYANA" //dynamic value easily be changed
const name= `I AM FROM "${state}"` //here the change will be clearly visible
console.log(name)

const number= 5659
const num = number.toString()//change number to string datatype
console.log(typeof num)

const numb= 56.5926547589
console.log(numb.toFixed(2)) //fixes value after decimal

//NOT OPERATOR
const ab=23
const cd=5
if(ab!=cd)                   // != CHECKS VALUE (==)     !== CHECKS VALUE NOT DATATYPE(===)
    {
        console.log('THIS IS TRUE')   //OUTPUT //23!=5
    }
else
    { 
        console.log('THIS IS FALSE')
    }

const ef=23
const gh="23"
if(ef!==gh)     //23!=="23"  //  23=NUMBER,"23"=STRING
    {
        console.log('THIS IS TRUE')    // OUTPUT 
    }
else
    { 
        console.log('THIS IS FALSE')
    }

//CHECKPOINT
const uu="23" 
if(uu!=undefined && uu!=null)
    {
        console.log('THIS IS TRUE')   //OUTPUT
    }
else
    { 
        console.log('THIS IS FALSE')
    }

//DATE 
const date= new Date()
console.log(date)

//YEAR
const forGetFullYear= date.getFullYear()
console.log(forGetFullYear)

//MONTH
const forGetMonth= date.getMonth()   // 0-11 MONTHS
console.log(forGetMonth)

//CURRENT DATE
const forGetDate= date.getDate()
console.log(forGetDate)

//CURRENT DAY
const forGetDay= date.getDay()  //0-6 DAYS //SUNDAY START-0 INDEX
console.log(forGetDay)

//HOUR
const forGetHour= date.getHours()  //0-23 HOURS
console.log(forGetHour)

//MINUTES
const forGetMinute= date.getMinutes()  
console.log(forGetMinute)

//SECONDS
const forGetSecond= date.getSeconds()  
console.log(forGetSecond)

//Milliseconds
const forGetMilliSecond= date.getMilliseconds()  
console.log(forGetMilliSecond)
