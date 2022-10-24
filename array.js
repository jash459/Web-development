// array : collection of some items:  // array is non primitive type

// index start from 0
const fr=["Jash","Hinger","Motii"];
const marks=[12,23,34,45,45,45];
console.log(marks)
const a =[12,34,false,null,"Not defined"];

console.log(a);

console.log("The length of a is",a.length); // 5

console.log(marks[6]) // undefined boz not exist

a[3]=23; // update the value

a[0] ="Jash"  //  update the value

a[7]="Hinger" //  new element is added

// NOTE:
// array are mutuable they can be change string are immutable.

console.log(typeof(a)) //  object



// Array methods:   some update original array and some return new array

let num=[12,3,23,34,345];
let b= num.toString();
console.log(b)  // convert it into string

let c=num.join("_") // 12_3_23_34_345
console.log(c)  // it will return a string..

let d=num.join("and") // 12and3and23and...

// pop method in js : update the original array:
num.pop()
console.log(num); // it will remove last element from array

let r=num.pop() // it will show the last element ,so we collect it in r to see what that element is...
console.log(num,r); // it will remove last element from array

let e =num.push(4);  // push return new array lenght and modified original array..
console(num,e) // and add 56 at the end of the array

// shift nad unshift... and update the original array 

let f=num.shift()  // remove from the start if the array
console(num,f)

let g=num.unshift() //  remove form the end of the array
console.log(num,g)


// delete is operator not a method..
// array length not change...


// Imp..


delete num[0];
console.log(num.length)
console.log(num);
console.log(num.length)

let num2=[12,23,34,3445,45]
let num3=[23,34,45,45,6]

// concat doesnt change the existing array but rather it make the new array
let newarray=num.concat(num2,num3); // you can any number of array...
console.log(newarray);


// Imp... sort is powerful function in js



// sort  help in alphabetices order // it consider each element as a string ...
let a=[7,6,5,555,64];
a.sort();  // 5 555 6 64 7
console.log(a)

// sorting in descending order..
let compare = (a,b) =>{
    return a-b;
}


// use of sort and compare function in array
let num1=[545,56,5,767,7];
num1.sort(compare);
console.log(num1);

// reverse() it will reverse the array

// slice and splice

/*

Definition and Usage
The splice() method adds and/or removes array elements.

The splice() method overwrites the original array.
*/
/*
The splice() method adds and/or removes array elements.

The splice() method overwrites the original array.

An array containing the removed items (if any).
*/

// At position 2, add 2 elements:

const fruits = ["Banana", "Orange", "Apple", "Mango"];

let deleteitem = fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(deleteitem)  // deleteitem are print and original array is modified..


// At position 2, remove 2 items:

const fruits1 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
fruits1.splice(2, 2);
 
// slice()  slice out a piece from a new array it create a new array

const sum=[1,2,3,4]
let newar=sum.slice(1) // (2,3,4) return from index 1 to end
let newarr=sum.slice(1,3)  // (2,3) return form index 1 to 3-1


// Loops in array

 let jash=[2.4,34,45]

 for(let i =0;i<jash.length; i++){
     console.log(jash[i]);
 }


 // passing function in for each..

 // Foreach loop 
 jash.forEach((element) => {
    console.log(element*element) // it will print the square if eacg element...
 })

 // foreach loop not work in case of  

  
let a=document.getElementByClassName(" ") // it will help in taking class-name 
let arr1="Jash"
let arr=Array.from(arr1)
console.log(arr1)  // it will convert string to number


// for of
for(let i of arr1){
    console.log(i)   // used to print the array elemenet 
}

// for in    // it will return the key....
for(let item in arr1){
    console.log(item)
}


for(let item in arr1){
    console.log(arr[item])  // it will print the array element
}

// higher order array method...   all these fucntion not modifies the original array....

// map filter reduce

let a=[45,23,21];

//  Array map method..

let j=a.map((value) => {
    console.log(value)     // it will return value
    return value + 1
})
console.log(j);

// what is differences  foreach and map . map will make new array by perfomring operation on each array elemenet....

let j1=a.map((value,index) => {
    console.log(value,index)     // it will return value  and corresponding index with it..
    return value + 1
})
console.log(j1);

let j12=a.map((value,index,array) => {
    console.log(value,index,a)     // it will return value  and corresponding index and array with it..
    return value + index  // adding index with value...
})
console.log(j12);

// you can do the samen things with foreach...

// Array filter method...
let arr2=[34,5,46,56,56]
arr2.filter((value)=>{
return value<10
})

console.log(arr2) // it will return for true value...

// reduce method

let arr3=[33,34,45,45,56,]
let newarr3=arr3.reduce((h1,h2)=>{
    return h1+h2
})
console.log(newarr3);  // it will return the value after perfomring the certain operation...















 



  