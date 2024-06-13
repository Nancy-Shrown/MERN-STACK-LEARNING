//METHODS OF OBJECTS AND ARRAYS

//object METHODS
const obj=
{
    name:'MIKEY',
    age:23,
    country:'JAPAN',

    //object inside object
    obj: 
    {
        data:[45,56,'DURAKEN'],
    },
};

console.log(obj.obj.data[0]);
obj.name='YUJI';
delete obj.state;
console.log(obj.name);
console.log(obj.age);
console.log(obj.state);

 
//array METHODS
const arr=[56,59,'GOJO',
    {
        obj:
        [
          {
            obj1:"THIS IS NESTED ARRAY",
            data:null,
          },
        ]
    },
];
console.log(arr[3].obj[0].obj1),
console.log(arr[0],arr[2]);

//check length of array
const arr1=[1,2,3,4,5,6,7,8]
console.log(arr1.length)

//add element in  end of array
arr1.push(10)
console.log(arr1)

//remove element from end of array
arr1.pop(10)
console.log(arr1)

//add element in start of array
arr1.unshift(0)
console.log(arr1)

//remove element from start of array
arr1.shift(0)
console.log(arr1)

//const arr2= arr1.splice(//index number at which new number to be added,//delete number after that index,//numbers you want to add in array)
const arr2= arr1.splice(4,2,56,59)
console.log(arr1)

//want to fetch numbers from array
//slice will give new array ,it creates new array from parent array
//const arr2= arr1.splice(//index number from which number to fetch,index number upto which array to be fecth)
const arr3= arr1.slice(2,5)
console.log(arr3)

//concat
const arr4=arr.concat(arr3)
console.log(arr4)
