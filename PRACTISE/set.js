const arr=[12,2,65,22,10,29,10]

//TO ADD ALL ELEMENTS

const arr1=arr.reduce((acc,curr)=>
{
    return acc+curr
},39) //ADD 39 TO END RESULT
console.log('SUM=',arr1)

//ODD ELEMENTS 
const arr2=arr.filter((item)=> item %2!=0)
console.log(arr2)
