console.log('Namaste')

setTimeout(function () {
  console.log('Javascript')
}, 5000)

console.log('Season 2')

const cart = ['shoes', 'pants', 'kurtas']
// callback hell(nested callback)
api.createOrder(cart, function () {
  api.proceedToPayment(function () {
    api.showOrderSummary(function () {
      api.updateWallet()
    })
  })
})
 
// promise:

const cart1 = ["shoes","pants","kurtas"];

createOrder(cart , function(orderId){
    processToPayment(orderId);
});

const promise = createOrder(cart);

promise.then(function(orderId){
    processToPayment(orderId);
});

// const GITHUB_API = "";

// const user = fetch(GITHUB_API);

// console.log(user);

// user.then(function(data){
//     console.log(data);
// })



// callback hell(nested callback)
createOrder(cart, function () {
  proceedToPayment(function () {
    showOrderSummary(function () {
      updateWallet()
    })
  })
})

createOrder(cart).then(function(orderId){
    return proceedToPayment(orderId);
})
.then(function (paymentInfo){
    return showOrderSummary(paymentInfo);
})
.then(function(paymentInfo){
    return updateWallet(paymentInfo);
}); 


createOrder(cart)
.then(orderId=>proceedToPayment(orderId))
.then(paymentInfo =>showOrderSummary(paymentInfo))
.then(paymentInfo => updateWallet(paymentInfo)); 


// Promise , channel , error handling....

// how to create your own promise

const carts=["shoes","pants","kurta"];

const promise1= createOrder(carts);  // orderID
console.log(promise1)  // it will be initially in pending state


// as soon as we get the data item this callback function will get print/ run 
promise1
.then(function(orderID){
  console.log(orderID);
  return orderID;
})
.then(function(orderID){
  return processToPayment(orderId);
})
.then(function(oaymentnInfo){
  console.log(paymentInfo)
})
.catch(function(err){  // it will print if error was thier, we need to print false in place of true....
  console.log(err.message);
})
.then(function(orderID){
  console.log("No matter what will happen i'll proceed to payment");
  
}); 
// so if we want to perform anything after all the catch handle then we just need to pass the function after catch and it will perform the task..

// Producer
// creating the promise
function createOrder(carts){
const pr= new Promise(function(resolve,reject){
  // cereateorder
  // validateCart
  // orderID

  // reject order
  if(!validateCart(carts)){
    const err=new Error("cart is not valid");
    reject(err);
  }

  // resolve order
  // logic for createOrder
  const orderID="12345";
  if(orderID){
    // resolve(orderID); 
    // now lets print after 5 sec

    setTimeout((orderID) => {
      resolve(orderID);
    }, 5000);
    // now it will print after 5 sec.
  

  }
});

return pr;
}

function proceedToPayment(orderID){
   /// it will return a paymet
  return new Promise(function(resolve, reject){
    resolve("Payment successfull!")
  })
}
function validateCart(){
  return true;
}




