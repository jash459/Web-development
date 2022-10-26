var count
document.write('Starting Loop' + '<br />')

for (count = 0; count < 10; count++) {
  document.write('Current Count : ' + count)
  document.write('<br />')
}
document.write('Loop stopped!')

var aProperty
document.write('Navigator Object Properties<br /> ')
for (aProperty in navigator) {
  document.write(aProperty)
  document.write('<br />')
}
document.write('Exiting from the loop!')

let sum = 0
let n = prompt('Enter the value of number: ')
n = Number.parseInt(n)
for (let i = 0; i < n; i++) {
  sum += 1 + i
}
console.log('Sum of first ' + n + 'natural no' + sum)

// FOR IN LOOP
 
let obj = {
  harry: 90,
  jash: 34,
}
for (let a in obj) {
  console.log('Marks of ' + a + 'are' + obj[a])
}

 for (let a in "JASH") {
  console.log(a)
}


for (var i = 0; i < n; i++) {
  sum += 1 + i
}

console.log(i) // give value

for (let i = 0; i < n; i++) {
  sum += 1 + i
}

console.log(i) // now it will show a error boz scopr of i is in block only

