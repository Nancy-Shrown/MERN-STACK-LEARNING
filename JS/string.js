//PROPERTIES OR METHODS OF STRING

const firstName= "  Yuji   Itadori   "
console.log(firstName.charAt(5))
console.log(firstName.length)
console.log(firstName.trim().length)
console.log(firstName.trimStart().length)
console.log(firstName.trimEnd().length)

const fName= "Yuji Itadori"
const sName= "Gojo Satour"
const hName= sName.replace("ur","ru")
console.log(hName)
console.log(fName.slice(2,10))

const lastName="Yuji Itadori"
const convertText = lastName.toLowerCase()
console.log(convertText)
console.log(lastName.substring(2,10))

const lName="Yuji Itadori"
const convertText1 = lName.toUpperCase()
console.log(lName.substr(2,5))
console.log(convertText1)

//CONVERT STRING TO ARRAY
const a='MICKEY'
console.log(a.split())  //SPLIT METHOD IS USED

//CONVERT ARRAY TO STRING
const arr= [1,2,3,4,5,6,7]
const arr1=arr.join() //JOON METHOD IS USED
const arr2=arr.join(' and ')
console.log(arr1)
console.log(arr2)

const arr3= arr.fill(' HELLO ')  //to fill array with string 
console.log(arr3)

const arr4= arr.fill(' HELLO ',2,5) //to fill array with string with fix index number (ex-- 2,3,4 == hello  0,1,5= element of index)
console.log(arr4)




