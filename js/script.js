console.log("My Name is Omar Jafor Chy")
document.write("My name is Omar jafor chy")
document.write("<br>");

var firstName = "Omar Jafor "
var lastName = "Chy Jaber"
var fullName = firstName + lastName ;
console.log(fullName)
console.log("My Name is = " + fullName );

var num = 10;
console.log(typeof(num));
num = toString(num);
console.log(typeof(num));
num = parseInt("1213");
console.log(typeof(num));
var num = 10.25;
console.log(typeof(num));
num = parseFloat(num);
console.log(num);
num = parseInt(num);
console.log(num);

var num1 = 2.535754645;
console.log(num1.toFixed(3));
console.log(num1.toPrecision(3));
console.log(typeof(Number("  12    ")));
console.log(Number("  12   "));
console.log(Number("  12.256464 "));

var text = "Bangladesh";
console.log(text.length);

// var text = prompt("Enter You Name :");
// console.log(text.length);
console.log(text.charAt(2));

var text = "bangladesh";
var text1 = text.toUpperCase();
console.log(text1);

var text = "BANGLADESH";
var text1 = text.toLowerCase();
console.log(text1);

var textA = "My Name is ";
var textB = "Jabed";
console.log(textA.concat(textB));
var textC = textA.slice(3,7);
console.log(textC);

// Task Practice Problem ------------------------------------------------------------>
var input1 = prompt("Enter you first name :");
var input2 = prompt("Enter your last name :");

var fullName = input1 + " " +input2;
document.write("Your full Name is :" + fullName);
fullName = fullName.toUpperCase();
document.write("<br>Your full Name in UpperCase :" + fullName);
document.write("<br>Total Length of full Name is :" + fullName.length);
document.write("<br>2nd Position word of full Name is :" + fullName.charAt(2));


// Practice Problem 1 -----------------------------------------------------------
// var input1 = prompt("How Much Your Mom Given : ");
// var input2 = prompt("Cost of 1kg orange and 1kg apple : ");
// var output = input1 - input2;
// document.write("Output is = " + output);
// Practice Problem 2 -----------------------------------------------------------
// var sub1 = parseInt(prompt("Marks of your 1st Subject : "));
// var sub2 = parseInt(prompt("Marks of your 2nd Subject : "));
// var sub3 = parseInt(prompt("Marks of your 3rd Subject : "));
// var sub4 = parseInt(prompt("Marks of your 4th Subject : "));
// var sub5 = parseInt(prompt("Marks of your 5th Subject : "));
// var output = (sub1 + sub2 + sub3 + sub4 + sub5) / 5 ;
// output = output.toFixed(2);
// document.write("Output is = " + output);
// Practice Problem 3 -----------------------------------------------------------
// var input1 = prompt("Enter first input : ");
// var input2 = prompt("Enter second input : ");
// var output = input1 + " " + input2;
// document.write("Output is = " + output);
// Practice Problem 4 -----------------------------------------------------------
// var input1 = prompt("Enter your moms number : ");
// var input2 = prompt("Divide the number by : ");
// var output = input1 % input2 ;
// document.write("Output is = " + output);