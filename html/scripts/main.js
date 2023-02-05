const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

// array in js support more than one data type
let myArray = [12, "Abreham", document.querySelector("h2")]

//conditions
let choice = "orange"
if (choice== "orange"){
    alert("yes, I love orange")
}else {
    alert("mm, but I love orange")
}

//functions
function multiply(num1,num2){
    let result = num1*num2
    return result
}

//event handlers
document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
  });
