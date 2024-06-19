const arr=[45,27,89,200,609,504,500,101,1098,29]

//FIND ELEMENTS GREATER THAN 500
const arr1=arr.filter((item)=> item >500)
console.log(arr1)

//FIND ELEMENTS GREATER THAN EQUAL TO 500
const arr4=arr.filter((item)=> item >=500)
console.log(arr4)

//FIND ELEMENTS LESS THAN 500
const arr2=arr.filter((item)=> item <500)
console.log(arr2)


const arr3=arr.map((item)=> item >500)
console.log(arr3)