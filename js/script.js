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
var num = 5;

if(num%2 == 0)
    document.write("<br>Even");
else
    document.write("<br>Odd");

//New program code ---------------->
// var num = prompt("Enter a number");
// num = parseInt(num);

// if(num > 0)
//     document.write("<br>Positive");
// else if(num < 0)
//     document.write("<br>Negative");
// else
//     document.write("<br>Zero");

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
document.write("<br>");

//New Program code for finding large number -------->
// var num1 = prompt("Enter your number 1: ");
// var num2 = prompt("Enter your number 2: ");
// var num3 = prompt("Enter your number 3: ");

// if(num1>num2 && num1>num3)
//     document.write("<br> Large Number is = " + num1);
// else if(num2>num1 && num2>num3)
//     document.write("<br> Large Number is = " + num2);
// else
//     document.write("<br> Large Number is = " + num3);
document.write("<br>");

//New Program code for finding vowel or consonant -------->

// var letter = prompt("Enter Your Letter : ");
// letter = letter.toLowerCase();

// if (letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u")
//     document.write("Vowel");
// else
//     document.write("Consonant");

//New Program code for number spelling -------->

// var digit = prompt("Enter Your Number : ");

// switch (digit){
//     case "0":
//         document.write("Zero");
//         break;
//     case "1":
//         document.write("One");
//         break;
//     case "2":
//         document.write("Two");
//         break;
//     case "3":
//         document.write("Three");
//         break;
//     case "4":
//         document.write("Four");
//         break;
//     case "5":
//         document.write("Five");
//         break;
//     case "6":
//         document.write("Six");
//         break;
//     case "7":
//         document.write("Seven");
//         break;
//     case "8":
//         document.write("Eight");
//         break;
//     case "9":
//         document.write("Nine");
//         break;
//     case "10":
//             document.write("Ten");
//             break;
//     default:
//         document.write("Not a Digit");
// }

//Task Number Five code for finding vowel or consonant using switch -------->
// var letter = prompt("Enter Your Letter : ");
// letter = letter.toLowerCase();

// switch (letter){
//     case "a":
//         document.write("Vowel");
//         break;
//     case "e":
//         document.write("Vowel");
//         break;
//     case "i":
//         document.write("Vowel");
//         break;
//     case "o":
//         document.write("Vowel");
//         break;
//     case "u":
//         document.write("Vowel");
//         break;
//     default:
//         document.write("Not a Vowel, it's Consonant");
// }

//Task Number Five code for finding vowel or consonant using switch 2-------->
// var letter = prompt("Enter Your Letter : ");
// letter = letter.toLowerCase();

// switch (letter){
//     case "a":
//     case "e":
//     case "i":
//     case "o":
//     case "u":
//         document.write("Vowel");
//         break;
//     default:
//         document.write("Not a Vowel, it's Consonant");
// }

// New Program Code using For Loop ------------->
// for(x=1; x<=100; x=x+1){
//     document.write(x + " ")
// }
// document.write("Loop End <br><br>");

// for(x=1; x<=100; x=x+2){
//     document.write(x + " ")
// }
// document.write("Loop End <br><br>");

// for(x=2; x<=100; x=x+2){
//     document.write(x + " ")
// }
// document.write("Loop End <br><br>");

// for(x=10; x>=1; x=x-1){
//     document.write(x + " ")
// }
// document.write("Loop End <br><br>");

// New Program Code using For Loop ------------->
// var sum = 0;
// for(x=1; x<=5; x++){
//         sum = sum + x;
//     }
//     document.write(sum)


// var m = parseInt(prompt("Enter Your First Number : "));
// var n = parseInt(prompt("Enter Your Secound Number : "));
// var sum = 0;
//     for(x=m; x<=n; x++){
//             sum = sum + x;
//         }
//         document.write(sum)


// for(x=1; x<=5; x++){
//     var num1 = parseInt(prompt("Enter Your First Number : "));
//     var num2 = parseInt(prompt("Enter Your Secound Number : "));
//     var sum = num1+num2;
//     console.log("Result = "+sum);
// }

// New Program Code using while Loop ------------->
// var i = 1;
// while (i<=100){
//     document.write(" "+i);
//     i++;
// }


// var i = 1;
// var sum = 0;

// while (i<=5){
//     sum = sum + i;
//     i++;
// }
// document.write("<br>Result is = "+ sum);

// var i = 1;
// var sum = 0;
// while (i<=100){
//     sum = sum + i;
//     i = i + 2;
// }
// document.write("<br>Result For Odd= "+ sum);

// var i = 2;
// var sum = 0;
// while (i<=100){
//     sum = sum + i;
//     i = i + 2;
// }
// document.write("<br>Result For Even = "+ sum);

//Task Number Six code for find sum of number of division 3 & 5 from 1 to 100-------->
// var i = 1;
// var sum = 0;
// while (i<=100){
//     if(i%3==0 && i%5==0){
//         document.write("<br> "+i);
//         sum = sum + i;
//     }
//     i = i + 1;
// }
// document.write("<br>Result For %3 & %5 = "+ sum);

// Task Number Six doing using switch only...............>
// var i = 1;
// var sum = 0;
// while (i<=100){
//     switch(i<=100){
//         case (i%3==0 && i%5==0):
//             document.write("<br> "+i);
//             sum = sum + i;
//     }
//     i = i + 1;
// }
// document.write("<br>Result For %3 & %5 = "+ sum);

// New Program Code using do while Loop ------------->
// Using For Loop
// for (i=1; i<=10; i++){
//     document.write("<br>Result = "+i);
// }

// document.write("<br><br>");

// // Using While Loop
// var i=0;
// while(i<=10){
//     document.write("<br>Result = "+i);
//     i++;
// }

// // Using Do While Loop
// document.write("<br><br>");

// var i=0;
// do{
//     document.write("<br>Result = "+i);
//     i++;
// }while(i<=10);