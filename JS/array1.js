//IMPORTANT METHODS FRO ARRAY ONLY APPLICABLE ON ARRAY

const arr =[2,3,4,15,6]

//TO CHECK DATAYPE ONLY FOR ARRAY
console.log(Array.isArray(arr))

//MAP METHOD -----TRANSFORMS ARRAY
// ITEM----REPRESENTS ELEMENT OF ARRAY
const arr1 =arr.map((item)=> item*item)
const arr2 =arr.map((item)=> item+10)
console.log(arr,'ARRAY',arr1)
console.log(arr,'ARRAY',arr2)

//const array3=array.map((item,index)=> index ==0 * && item *item)            DOUBT
//console.log(array,'ARRAY',array3)

//FILTER METHOD -----FILTER ITEM //USED WIDELY
const arr3=arr.filter((item) => item%2==0)
console.log(arr3)

//SOME METHOD----GIVE VALUE IN FORM OF TRUE OR FALSE
//if condition true then true else false
const arr4=arr.some((item) =>item%2==0) //IT TELLS THAT ARRAY CONTAIN EVEN NUMBER BY GIVING TRUE RESULT
console.log(arr4)

//FIND METHOD------GIVES ONLY SINGLE RESULT //  FOLLOWS FIFO 
const arr5=arr.find((item) =>item%2==0)
console.log(arr5)





