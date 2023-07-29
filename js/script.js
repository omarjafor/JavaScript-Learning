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

var input1 = prompt("Enter you first name :");
var input2 = prompt("Enter your last name :");

var fullName = input1 + " " +input2;
document.write("Your full Name is :" + fullName);