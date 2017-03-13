console.log("san check")
//Finding HTML Elements
// console.log(document.getElementById("use-id-method"));
var idElement = document.getElementById("use-id-method");
console.log(idElement);
var tagElement = document.getElementsByTagName("script");
console.log(tagElement);
console.log("i slept for 1 hour, pls help")
console.log(document.getElementsByClassName("use-class-method"));
//changing html elements
console.log(idElement.innerHTML);
idElement.innerHTML = "I have been asleep for ten decades";

console.log(classElements[1]);
classElements[1].innerHTML = "I have been changed by className and array target";
