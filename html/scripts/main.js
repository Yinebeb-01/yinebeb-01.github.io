const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

// array in js support more than one data type
let myArray = [12, "Abreham", document.querySelector("h2")];

//conditions
// let choice = "orange"
// if (choice== "orange"){
//     alert("yes, I love orange")
// }else {
//     alert("mm, but I love orange")
// }

//functions
function multiply(num1, num2) {
  let result = num1 * num2;
  return result;
}

//event handlers
document.querySelector("ul").addEventListener("click", function () {
  alert("Ouch! Stop poking me!");
});

const myImage = document.querySelector("img");
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/Our_Best_Education.jpeg") {
    myImage.setAttribute("src", "images/school-books-on-desk.jpg");
  } else {
    myImage.setAttribute("src", "images/Our_Best_Education.jpeg");
  }
};

// configure to display custom message on button click
let myButton = document.querySelector("button");
let myMesg = document.querySelector("h1")
function setUserName() {
  const myName = prompt("Please enter your name");
  if (!myName) {
    setUserName();
  }
  const storedName = localStorage.getItem("name");
  myMesg.textContent = `St-S is cool, ${myName}`;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myMesg.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
};
