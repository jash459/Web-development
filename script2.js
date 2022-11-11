alert("Enter the value of a!")
let a=prompt("Enter a here")
a=Number.parseInt(a)
alert("you entered a of type",typeof(a))
let write=confirm("Do you want to write it on the page")
if(write){
    document.write(a)
}
else{
    document.write("PLease allow me to write ")
}
    

