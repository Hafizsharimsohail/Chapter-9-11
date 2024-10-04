// The chapter 9-11 is start?????
//Q:1
let city = prompt("Enter city name");
if( city === "Karachi" );{
    alert("Welcome to the city of lights");
}
//Q:2
let gender = prompt("Enter your gender (male/female):");
if (gender === "male") {
  alert("Hello Sir");
} else if (gender === "female") {
  alert("Hello Ma'am");
} else {
  alert("Invalid input. Please enter 'male' or 'female'.");
}
//Q:3
let trafficlight = prompt("Enter the light")
if(trafficlight === "red"){
    alert("Must stop");
} else if (trafficlight === "yellow") {
    alert("Ready to move");
} else if(trafficlight === "green") {
    alert("Move now");
}
//Q:4
let fuel = prompt("Enter the fuel quantity")
if(fuel < "0.24"){
    alert("Please refuel the car");
}
//Q:5
// a
let a = 4;
if(++a === 5){
    alert("This is true");
} else {
    alert(  "This is false");
}
//b
let b = 82;
if (b++ === 83){
alert("This is true");
} else {
    alert("This is false");
}
//c
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
} else {
    alert("Condition 1 is false");
}
if (c === 13){
alert("condition 2 is true");
}else {
    alert("Condition 2 is false");
}
if (++c < 14){
alert("condition 3 is true");
}else {
    alert("Condition 3 is false");
}
if(c === 14){
alert("condition 4 is true");
}else {
    alert("Condition 4 is false");
}
//d
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost is true");
} else (
    alert("This is false")
)
//e
if("car" < "cat"){
    alert("car is smaller than cat");
} else if("cat" < "car"){
    alert("cat is smallar than car ");
}
//Q:7
let secretNumber = Math.floor(Math.random() * 10) + 1;
let userGuess = parseInt(prompt("Guess the secret number between 1 and 10"));
if (userGuess === secretNumber) {
    document.write("Bingo! Correct answer");
} else if (userGuess + 1 === secretNumber) {
    document.write("Close enough to the correct answer");
} else {
    document.write("Sorry, that's not the correct number.");
}
//Q:8
let userNumber = parseInt(prompt("Enter a number:"));
if (userNumber % 3 === 0) {
    document.write("<br/>" + userNumber + " is divisible by 3");
} else {
    document.write("<br/>" +userNumber + " is not divisible by 3");
}
//Q:9
let num = prompt("Enter the number odd or even:");
if (num % 2 === 0) {
    document.write("<br/>" + num + " is an even number.");
} else {
    document.write("<br/>" + num + " is an odd number.");
}
//Q:10
let num3 = (prompt("Enter the temperature"))
if(num >= 40){
    document.write("<br/>" +"It is too hot outside.");
} else if(num1 >= 30){
    document.write("<br/>" +"The Weather today is Normal.");
} else if(num1 >= 20){
    document.write("<br/>" +"Today’s Weather is cool.");
} else if(num1 >= 10){
    document.write("<br/>" +"OMG! Today’s weather is so Cool.");
} else{
    document.write("<br/>" +"Please give temperature");
}
//Q:11
var num1 = parseFloat(prompt("Enter the first number:"));
    var num2 = parseFloat(prompt("Enter the second number:"));
    var operation = prompt("Enter the operation (+, -, *, /, %):");

    var result;

    // Perform calculation based on the operation
    if (operation === "+") {
        result = num1 + num2;
    } else if (operation === "-") {
        result = num1 - num2;
    } else if (operation === "*") {
        result = num1 * num2;
    } else if (operation === "/") {
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            result = "Error: Division by zero";
        }
    } else if (operation === "%") {
        result = num1 % num2;
    } else {
        result = "Error: Invalid operation";
    }

    // Display the result
    document.write("<br/>" +"Result: " + result);
