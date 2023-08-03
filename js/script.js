// console.log("My Name is Omar Jafor Chy")
// document.write("My name is Omar jafor chy")
// document.write("<br>");

// var firstName = "Omar Jafor "
// var lastName = "Chy Jaber"
// var fullName = firstName + lastName ;
// console.log(fullName)
// console.log("My Name is = " + fullName );

// var num = 10;
// console.log(typeof(num));
// num = toString(num);
// console.log(typeof(num));
// num = parseInt("1213");
// console.log(typeof(num));
// var num = 10.25;
// console.log(typeof(num));
// num = parseFloat(num);
// console.log(num);
// num = parseInt(num);
// console.log(num);

// var num1 = 2.535754645;
// console.log(num1.toFixed(3));
// console.log(num1.toPrecision(3));
// console.log(typeof(Number("  12    ")));
// console.log(Number("  12   "));
// console.log(Number("  12.256464 "));

// var text = "Bangladesh";
// console.log(text.length);

// var text = prompt("Enter You Name :");
// console.log(text.length);
// console.log(text.charAt(2));

// var text = "bangladesh";
// var text1 = text.toUpperCase();
// console.log(text1);

// var text = "BANGLADESH";
// var text1 = text.toLowerCase();
// console.log(text1);

// var textA = "My Name is ";
// var textB = "Jabed";
// console.log(textA.concat(textB));
// var textC = textA.slice(3,7);
// console.log(textC);

// Task Practice Problem 2------------------------------------------------------------>
// var input1 = prompt("Enter you first name :");
// var input2 = prompt("Enter your last name :");

// var fullName = input1 + " " +input2;
// document.write("Your full Name is :" + fullName);
// fullName = fullName.toUpperCase();
// document.write("<br>Your full Name in UpperCase :" + fullName);
// document.write("<br>Total Length of full Name is :" + fullName.length);
// document.write("<br>2nd Position word of full Name is :" + fullName.charAt(2));


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
// Task Practice Problem 3 ------------------------------------------------------------>
// var input1 = parseInt(prompt("Enter you first number : "));
// var input2 = parseInt(prompt("Enter your second number : "));
// document.write("First Number is = " + input1);
// document.write("<br>Second Number is = " + input2); 

// var sum = input1 + input2;
// document.write("<br>"+input1 + " + " + input2 +" = "+ sum);
// var sub = input1 - input2;
// document.write("<br>"+input1 + " - " + input2 +" = "+ sub);
// var mul = input1 * input2;
// document.write("<br>"+input1 + " * " + input2 +" = "+ mul);
// var div = input1 / input2;
// document.write("<br>"+input1 + " / " + input2 +" = "+ div);
// var modul = input1 % input2;
// document.write("<br>"+input1 + " % " + input2 +" = "+ modul);
// Practice Problem 4 -----------------------------------------------------------
// var fruits = ['Apple', 'Banana', 'Orange'];
// console.log(fruits.indexOf('Banana'));
// fruits[1] = 'Mango';
// console.log(fruits);
// fruits.pop();
// fruits.push('Watermelon');
// console.log(fruits);
// Practice Problem 5 -----------------------------------------------------------
// var marks = parseInt(prompt("Enter you Your Total Number : "));

// if(marks >= 80){
//     document.write("Your Grade is A");
// }else if (marks >= 60){
//     document.write("Your Grade is B");
// }else if (marks >= 50){
//     document.write("Your Grade is C");
// }else if (marks >= 40){
//     document.write("Your Grade is D");
// }else{
//     document.write("Your Grade is F");
// }
// Practice Problem 6 -----------------------------------------------------------
// var num1 = parseInt(prompt("Enter you Your 1st Number : "));
// var num2 = parseInt(prompt("Enter you Your 2nd Number : "));
// var num3 = parseInt(prompt("Enter you Your 3rd Number : "));

// if(num1>num2 && num1>num3){
//     document.write("The Largest Number is : " + num1);
// }else if (num2>num1 && num2>num3){
//     document.write("The Largest Number is : " + num2);
// }else{
//     document.write("The Largest Number is : " + num3);
// }
// Practice Problem 7 -----------------------------------------------------------
// var num1 = parseInt(prompt("Enter you Your 1st Number : "));
// var num2 = parseInt(prompt("Enter you Your 2nd Number : "));
// var num3 = parseInt(prompt("Enter you Your 3rd Number : "));

// if(num1==num2 || num1==num3 || num2==num3){
//     document.write("The Triangle is Isosceles");
// }else{
//     document.write("The Triangle is Not Isosceles");
// }
// Practice Problem 8 -----------------------------------------------------------
// var i = 0;
// for (i=0; i<5; i++){};
// console.log(i);

// var marks = [ 13, 15, 14, 20, 18];
// for(var i=0; i<marks.length; i++){
//  if(marks[i] >=15){
//   continue;
//  }
//  console.log(marks[i]);
// };

// var i = 5;
// for (i = 5; i < 5; i++) {
//  console.log(i);
// }
// Practice Problem Loop -----------------------------------------------------------
// for (i = 1; i <= 39; i++) {
//  document.write("<br>Ajke Amar mon valo Nai -" + i);
// }

// for (i = 58; i <= 98; i++) {
//  document.write("<br> The Number - " + i);
// }

// for (i = 412; i <= 456; i=i+2) {
//     document.write("<br> The Even Number - " + i);
//    }
// for (i = 581; i <= 623; i=i+2) {
//     document.write("<br> The Odd Number - " + i);
//    }

// var x=581;
// while(x<=623){
//     document.write("<br> The Odd Number - " + x);
//     x=x+2;
// }

// var topicsLearn = ['Html', 'CSS', 'Tailwind', 'DaisyUI', 'Bootstrap', 'JavaScript'];
// for(i=0; i<topicsLearn.length; i++){
//     document.write(topicsLearn[i] + "<br>");
// }

// var topicsLearn = ['Nokia', 'Apple', 'Oppo', 'Vivo', 'Realme', 'Xiaomi'];
// var i = 0;
// while(i<topicsLearn.length){
//     document.write(topicsLearn[i] + "<br>");
//     i++
// }

// for (i = 30; i <= 86; i++) {
//     if(i > 44){
//         break;
//     }
//     document.write("<br> The Number is : " + i);
//    }

// var bookPrice = [150, 120, 135, 140, 250, 99, 100, 225, 80, 125, 230];
// for (i = 0; i < bookPrice.length; i++) {
//     var price = bookPrice[i];
//     if(price > 200){
//         continue;
//     }
//     document.write("<br> The Book Price Under $200 is : " + price);
//    }


// var num = prompt("Enter Your Number : ");
// var result = num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
// console.log(result);

// creating a function .......................................
// function addition (num1, num2){
//     var result = num1 + num2;
//     document.write(result + "<br>");
// }
// function subtraction (num1, num2){
//     var result = num1 - num2;
//     document.write(result + "<br>");
// }
// function multiple (num1, num2){
//     var result = num1 * num2;
//     document.write(result + "<br>");
//     return result;
// }
// function divided (num1, num2){
//     var result = num1 / num2;
//     document.write(result + "<br>");
// }
// addition(10, 30);
// subtraction(80, 29);
// var x = multiple(15, 3);
// divided(150, 5);
// document.write(x);
// Immediately Invokeable Function Expressions ...............
// (function addition (num1, num2){
//     var result = num1 + num2;
//     document.write(result + "<br>");
// })(120,130);

// var additional = function (num1, num2){
//     var result = num1 + num2;
//     document.write(result + "<br>");
// };
// additional (15,10)
// Array Library .............................. 
// var names = ['Abul', 'Kabul', 'Pabul', 'Rahim', 'Karim'];
// console.log(names);
// names.shift();
// console.log(names);
// names.unshift('Abdul');
// console.log(names);
// names.splice(1,0,'Joba', 'Jannar'); //adding new element
// console.log(names);
// names.splice(3,2); // removing element
// console.log(names);
// 1D Array Library ..............................
// var numbers = [62, 45, 89, 95, 84, 33];
// function highestScore(scores){
//     var maxScore = 0;
//     for(var x=0; x<scores.length; x++){
//         console.log(scores[x]);
//         if(maxScore < scores[x]){
//             maxScore = scores[x]
//         }
//     }
//     return maxScore;
// }
// var highScore =highestScore(numbers);
// console.log("Highes Score is : " +highScore);
// 2D Array Library ..............................
// function highestRunScorer(playersInfo){
//     var highName = playersInfo[0][0];
//     var highRun = playersInfo[0][1];
//     for(var x=1; x<playersInfo.length; x++){
//         if(highRun < playersInfo[x][1]){
//             highRun = playersInfo[x][1];
//             highName = playersInfo[x][0];
//         }
//     }
//     return highName;
// }

// var playersInfo = [
//     ["Abul", 95],
//     ['Kabul', 115],
//     ['Chagol', 35],
//     ['Korim', 15],
//     ['Rakib', 152],
// ];
// var highestName = highestRunScorer(playersInfo);
// console.log(highestName);
// JavaScript Practice Object..............................
// var names = ['Abul', 'Kabul', 'Pabul', 'Rahim', 'Karim'];
// var numbers = [62, 45, 89, 95, 84, 33];
// var nama = numbers.slice(-4, -2);
// console.log(nama);
// console.log(numbers);

// var student = {
//     name : 'Abul',
//     age : 22,
//     sec : 'A2',
//     status : 'Good'
// };
// console.log(student.age);
// console.log(student.name);
// console.log(student.status);
// student.age = 25;
// console.log(student);

// var shoppingCart = {
//     name : 'Mr.Rakib',
//     books : 3,
//     sunglass: 2,
//     keybord : 1,
//     mouse : 4,
//     pen : 5,
//     shoes : 2,
//     shirt : 3
// }
// console.log(shoppingCart);
// var properties = Object.keys(shoppingCart);
// console.log(properties);
// var properties = Object.values(shoppingCart);
// console.log(properties);
// console.log(shoppingCart.name);
// function movie(){
//     return "Din-The day";
//     return "Poran";
//     return "Hawa";
//    }
// console.log(movie());

// var student = {
//         name : 'Abul',
//         age : 22,
//         sec : 'A2',
//         status : 'Good',
//         cgpa : 2.74,
//         lang : ['Bangla', 'Hindi', 'English']
//     };
// console.log(student);
// Object Constractor ..................... 
// function Student(name, age, cgpa, status){
//     this.name = name;
//     this.age = age;
//     this.cgpa = cgpa;
//     this.status = status;
// }

// var student1 = new Student('Abdullah', 24, 3.44, 'Best');
// var student2 = new Student('Rakib', 22, 2.92, 'Good');
// var student3 = new Student('Asif', 30, 2.74, 'Bad');

// console.log(student1);
// console.log(student1.cgpa);
// console.log(student1.status);
// console.log(student3);

// Object constractor with function ................................
// function Student(name, age, cgpa, status){
//     this.name = name;
//     this.age = age;
//     this.cgpa = cgpa;
//     this.status = status;

//     this.studentInfo = function(){
//         console.log(this.name);
//         console.log(this.cgpa);
//         console.log(this.age);
//         console.log(this.status); 
//     }
// }

// var student1 = new Student('Abdullah', 24, 3.44, 'Best');
// var student2 = new Student('Rakib', 22, 2.92, 'Good');
// var student3 = new Student('Asif', 30, 2.74, 'Bad');

// student2.studentInfo();
// student1.studentInfo();

// Inch To Feet Converter ................................................
// let inch = prompt("Enter Your Inch : ");
// inch = parseInt(inch);
// const feet = inch/12;
// console.log('Your Feet is = '+ feet);

function inchToFeet(inches) {
    const feet = inches / 12;
    return feet;
}
const dadaFeet = inchToFeet(160);
console.log(dadaFeet);
// Miles To kilometer ......................................................
function milesToKm(miles) {
    const kilometer = miles * 1.609;
    return kilometer;
}
const theKilometer = milesToKm(100);
console.log(theKilometer);
// Even or odd number checking ..................................................
function evenOrOdd(num) {
    if (num % 2 == 0) {
        console.log('Even Number');
    } else {
        console.log('Odd Number');
    }
}
evenOrOdd(22);
evenOrOdd(35);
// Leap Year Checking ..................................................
function isLeapYear(num) {
    if (num % 4 == 0) {
        console.log('Leap Year');
    } else {
        console.log('Not a Leap Year');
    }
}
isLeapYear(1296);
isLeapYear(1993);
// Funtion number an array and sum of them .................................
// function getSumArray(number){
//     let sum = 0;
//     for(var x=0; x<number.length; x++){
//         const index = x;
//         const element = number[index];
//         sum = sum + element;
//         console.log(index, element, sum)
//     }
//     return sum;
// }
// let number = [12, 65, 45, 78, 32, 45, 91, 68];
// var arraySum = getSumArray(number);
// console.log(arraySum);
// only for odd number sum with the same funtion ................................
function getSumArray(number) {
    let sum = 0;
    const oddNumber = [];
    for (var x = 0; x < number.length; x++) {
        const index = x;
        const element = number[index];
        if (element % 2 !== 0) {
            sum = sum + element;
            console.log(index, element, sum)
            oddNumber.push(element);
        }
    }
    console.log(oddNumber);
    return sum;
}
let number = [12, 65, 45, 78, 32, 45, 91, 68];
var arraySum = getSumArray(number);
console.log(arraySum);

for(let i = 10; i >= 1; i--){
    console.log(i);
}
function print(a, b, c){
 return a+2;
 return a*b;
 return b*c+a;
}
console.log(print(1,2,3));

let a =50;
if(item => 50){}
if(false){}
for(let i=5; i<10; i=i+2){
    
}