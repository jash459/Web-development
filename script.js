console.log("Hello")
let a=23;
let b=34;
console.log(a+b)

console.info("This is an info")  // help to show that this is inportant info
console.warn("This is warning") // help to show that is warning
console.assert(!true) // return false if condition entered here is not true..
console.error("This is error")  // help to show this is error

obj={1:a,2:b,3:c}
console.table(obj) // it will make a tabel of key vallue pair

console.table(console) // it will show all console method in form of table


console.clear()  // use top clear the console..

console.time()  // show the time taken

console.time("a")

console.timeEnd("a")   // it will show how many millisecond it take to excute the "a"

console.time("The process start")

console.timeEnd("The process start") // how much time it requires to complete the process


console.time("forloop")
for(let i=0;i<5;i++){
    console.log("Jash")
}
console.timeEnd("forloop")

console.time("while loop")
let j=1
while(j>5){
    console.log("Hinger")
}
console.timeEnd("while loop")

// help to show how much time is taken by each loop

console.log(window)  // window a global object and this object represent browser window, it contains a lot of method...  // DOM BOM Javascript Core methods..


// DOM - Document object model --> complete HTML page is convert into javascript page

// BOM - Browser object model

window.console.log("window")

window.alert("This is alert")

console.log(document)  // it will give a document 

console.log(document.body) // it will give info of body

document.body.style.background="Yellow"







