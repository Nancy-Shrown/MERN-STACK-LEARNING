//IMPORTANT METHODS FRO ARRAY ONLY APPLICABLE ON ARRAY

const arr =[2,3,4,15,6]

//TO CHECK DATAYPE ONLY FOR ARRAY
console.log(Array.isArray(arr))

//1 MAP METHOD -----TRANSFORMS ARRAY
// ITEM----REPRESENTS ELEMENT OF ARRAY
//SYNTAX ------ CONST ARRAY_NAME = ARRAY ON WHICH METHOD TO BE APPLIED.MAP((ITEM)=>ITEM*ITEM)
const arr1 =arr.map((item)=> item*item)
const arr2 =arr.map((item)=> item+10)
console.log(arr,'ARRAY',arr1)
console.log(arr,'ARRAY',arr2)

const array=arr.map((item,index)=> index == 0 && item *item)//CHECKS IF INDEX==0>>ITEM*ITEM>>RETURNS VALUE TRUE ELSE FALSE
console.log(arr,'ARRAY  INDEX',array)

//2 FILTER METHOD -----FILTER ITEM //USED WIDELY
const arr3=arr.filter((item) => item%2==0)
console.log(arr3)

//3 SOME METHOD----GIVE VALUE IN FORM OF TRUE OR FALSE
//if condition true then true else false
const arr4=arr.some((item) =>item%2==0) //IT TELLS THAT ARRAY CONTAIN EVEN NUMBER BY GIVING TRUE RESULT
console.log(arr4)

//4 FIND METHOD------GIVES ONLY SINGLE RESULT //  FOLLOWS FIFO 
const arr5=arr.find((item) =>item%2==0)
console.log(arr5)

//TERNARY
const arr6= arr4? arr1: arr3
console.log(arr6)

//PRACTISE QUESTION 
const ar=[10,20,22,11,55,77,22]
const ar1 =ar.map((item)=>(item-5)+25) //first item-5 then item +25
console.log(ar,'ARRAY -5 + 25',ar1)

//CHECK IF ELEMENTS IN ARRAY ARE ODD OR NOT
const ar3=ar1.some((item) =>item%2!=0)
console.log(ar3)

//TO EXTRACT ODD 
const ar4=ar1.filter((item) => item%2!=0)
console.log(ar4)
