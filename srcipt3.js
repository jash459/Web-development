let age = Nuumber.praseInt(prompt('Enter age'))

const candrive = (age) => {
    return age > 18 ? true : false
  }

if (candrive(age)) {
  alert('You can drive')
} else {
  alert('You cannot drive')
}



//  now ask user if he want to see prompt again

let runagain = true
const candrive1 = (age) => {
  return age > 18 ? true : false
}

while (runagain) {
  let age = Nuumber.praseInt(prompt('Enter age'))
  if (candrive1(age)) {
    alert('You can drive')
  } else {
    alert('You cannot drive')
  }

  runagain = confirm('Do you want to run again')
}


// if age < 0 console.log("Enter a valid age")

 while (runagain) {
  let age = Nuumber.praseInt(prompt('Enter age'))
  if(age<0) 
  {
    console.error("Please enter a valid age")
    break;
  }
  if (candrive1(age)) {
    alert('You can drive')
  } else {
    alert('You cannot drive')
  }

  runagain = confirm('Do you want to run again')
}

// Problem-4

let number = Number.parseInt(prompt("Enter a number"))

if(number>4){
    location.href="https://google.com"    // write these in console it will redirect you to site, these is BOM element..
  // alert, prompt , are BOM element...
}

// problem-5 Enter the page backgroung color

let color=prompt("Enter the page background color")
document.body.style.background=color