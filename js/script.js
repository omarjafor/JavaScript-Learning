var name = "Jaber JaBed";
name = "JaBed";
document.write(name);

var number = 20;

num = toString(number);
console.log(typeof(num));

var number = "20";

num = parseInt(number);
console.log(typeof(num));

var number = 20.567;

num = parseFloat(number);
console.log(typeof(num));

var number = 2.56789;

console.log(number.toFixed(1)); //it's use for how much number shown after .point
console.log(number.toPrecision(3)); // it's use for total how much digit to shown

console.log(Number("12"));
console.log(Number("12.5"));
console.log(Number(true));
console.log(Number(false));

document.write("<br>JaBer " + "JaBed<br>");

var firstName = "Omar Jafor ";
var lastName = " Chowdhury Jaber <br>";

var fullName = firstName + lastName;
document.write(fullName);

var fullName = "Omar Jafor Chy Jaber";
document.write("My Full Name is " + fullName);

var num1, num2;
num1 = 20;
num2 = 30;

document.write("<br>Number 1 is = " + num1 + "<br>Number 2 is = " + num2);

var text = "Bangladesh";
// var text = prompt("Enter Your Text To Know Length: ");

// document.write("<br>Number of character: " + text.length);

text = text.charAt(2);
document.write("<br>"+text);

text = text.toUpperCase();
document.write("<br>"+text);

text = text.toLowerCase();
document.write("<br>"+text);

var text1 = "Bangladesh";
var text2 = " is a beautiful country";
var text = text1.concat(text2);
document.write("<br>"+text);

var text1 = "Bangladesh";
var text = text1.slice(2, 6);
document.write("<br>"+text);

// Task Number Two
// var firstName = prompt("Enter Your First Name: ");
// var lastName = prompt("Enter Your last Name: ");
// var fullName = firstName + lastName;
// document.write("<br>"+fullName);
// document.write("<br>"+fullName.length);
// document.write("<br>"+fullName.toUpperCase());
// document.write("<br>"+fullName.charAt(2));

// Task Number Three
// var num1 = prompt("Enter First Number :");
// var num2 = prompt("Enter Second Number :");

// num1 = parseInt(num1,10);
// num2 = parseInt(num2,10);

// document.write("Entered First Number is =" + num1);
// document.write("<br>Entered Secound Number is =" + num2 + "<br>");

// sum = num1 + num2;
// document.write("<br>" + num1 + " + " + num2 + " = " + sum);

// sub = num1 - num2;
// document.write("<br>" + num1 + " - " + num2 + " = " + sub);

// mul = num1 * num2;
// document.write("<br>" + num1 + " * " + num2 + " = " + mul);

// div = num1 / num2;
// document.write("<br>" + num1 + " / " + num2 + " = " + div);

// mod = num1 % num2;
// document.write("<br>" + num1 + " % " + num2 + " = " + mod);

//New program code---------------->

// var num1 = prompt("Enter Base :");
// var num2 = prompt("Enter Height :");

// var area = num1 * num2;
// document.write("Area = " + area);

// var triangle = (num1 * num2) / 2;
// document.write("<br>Triangle = " + triangle);

//New program code Fahrenheit To Celsius---------------->

// var farn = prompt("Enter Fahrenheit :");

// var cels = (farn-32) * (5/9);
// document.write("Celsius is = " + cels);

//New program code Fahrenheit To Celsius---------------->

// var cels = prompt("Enter Celsius :");

// var farn = (cels * 9/5) + 32;
// document.write("Farenheit is = " + farn);

//New program code ---------------->
// var num = 5;

// if(num%2 == 0)
//     document.write("Even");
// else
//     document.write("Odd");

//New program code ---------------->
// var num = prompt("Enter a number");
// num = parseInt(num);

// if(num > 0)
//     document.write("Positive");
// else if(num < 0)
//     document.write("Negative");
// else
//     document.write("Zero");

//Task Number Four code for student grade mark -------->
// var num = prompt("Enter your mark number: ");
// num = parseInt(num);

// if(num > 100 || num < 0)
//     document.write("Invalid Number");
// else if(num >= 80 && num <= 100)
//     document.write("A+");
// else if(num >= 70 && num <= 79)
//     document.write("A");
// else if(num >= 60 && num <= 69)
//     document.write("A-");
// else if(num >= 50 && num <= 59)
//     document.write("B");
// else if(num >= 40 && num <= 49)
//     document.write("C");
// else if(num >= 33 && num <= 39)
//     document.write("D");
// else
//     document.write("Fail");

//New Program code for student grade mark -------->