// way to remember the primtive data-type:
// NN BB SS U :
// N : Null
// N: Number
// S: Symbol
// S: String
// B: Boolean
// B: BigInt
// U: Undefined

// Object is non primitive data type

let a =null;
let b=345;
let c=true
let d=BigInt("567")
let e="Jash"
let f= Symbol("I am a nice symbol")
let g =undefined; // means nothing is assing to it
console.log(a,b,c,d,e,f,g)
console.log(typeof(d))


// objects are like dictionary in js key value pair, mapping of objects
const item ={
    "HARRY" : true,
    "Shibh" : false,
    "Lovish" :67,
    "Rohan" : undefined
}

console.log(item["HARRY"])
console.log(item["Jash"])  // undefined

