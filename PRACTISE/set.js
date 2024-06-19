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

//MAP ELEMENT
const arr3= arr.map((item)=> item + 20)
console.log(arr3)

//FILTER ELEMENT
const arr4=arr.filter((item)=> item%2==0)
console.log(arr4)

//SOME ELEMENT
const arr5=arr.some((item)=> item%2==0)
console.log(arr5)

//FIND METHOD
const arr6= arr.find((item)=> item%2!=0)
console.log(arr6)

//FINDINDEXNUMBER
const arr7=arr.findIndex((item)=> item%2!=0)   
console.log(arr7)

//FINDLAST element
const arr8=arr.findLast((item)=> item%2!=0)   
console.log(arr8)

//FINDLASTINDEX NUMBER OF LAST ODD NUMBER
const arr9=arr.findLastIndex((item)=> item%2!=0)
console.log(arr9)