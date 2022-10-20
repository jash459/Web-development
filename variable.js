// So conculsion : use less use of var

console.log('Javascript variables: var, const, let')
var a = 45
var b = 'Harry'
var c = null
var d = undefined
{
  var b = 'this'
  console.log(b)  // this
}

console.log(b)  // this

let j = 'Jash'
j = 'hinger'

{
  let j = 'You betii' // let and const scope in block only.
  console.log(j)  // you betii
}
console.log(j)  // hinger

const author = 'JH'
// author ="HINGER" // Throughs an error boz const cannot be reassigned


// const harry; // it will going to give an error boz  cont has to be initialized

