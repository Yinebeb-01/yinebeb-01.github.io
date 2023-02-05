var username = "Yinebeb"; // use \ or + to continue string value in new line
var x = 4; // type annotation; just to express the type explicitly; 
//mostly ts infer by default- via the initial value.
console.log(username, "Yinebeb");
// Parameter type annotation
function greet(name) {
    return String("Hello, " + name.toUpperCase() + "!!");
}
//   val = greet(45)  // type check failed
var val = greet("Makida");
console.log(val);
