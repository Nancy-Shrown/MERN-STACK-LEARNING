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
//(IF CONDITION) ? STATEMENT IF TRUE: STATEMENT IF FALSE

a==4||b==5 ? console.log("TRUE") : console.log("FALSE")

a==5 && b==5 ? console.log("TRUE") :  b==1 ? console.log("FALSE") : console.log("LAST STATEMENT")

//temperal lateral string ` used for dynamic work like we can change state name easily`
const state="HARYANA"
const name= `I AM FROM "${state}"`
console.log(name)

const number= 5659
const num = number.toString()
console.log(typeof num)

const numb= 56.5926
console.log(number.toFixed(2))





