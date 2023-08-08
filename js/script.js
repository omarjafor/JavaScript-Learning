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

// function inchToFeet(inches) {
//     const feet = inches / 12;
//     return feet;
// }
// const dadaFeet = inchToFeet(160);
// console.log(dadaFeet);
// Miles To kilometer ......................................................
// function milesToKm(miles) {
//     const kilometer = miles * 1.609;
//     return kilometer;
// }
// const theKilometer = milesToKm(100);
// console.log(theKilometer);
// Even or odd number checking ..................................................
// function evenOrOdd(num) {
//     if (num % 2 == 0) {
//         console.log('Even Number');
//     } else {
//         console.log('Odd Number');
//     }
// }
// evenOrOdd(22);
// evenOrOdd(35);
// Leap Year Checking ..................................................
// function isLeapYear(num) {
//     if (num % 4 == 0) {
//         console.log('Leap Year');
//     } else {
//         console.log('Not a Leap Year');
//     }
// }
// isLeapYear(1296);
// isLeapYear(1993);
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
// function getSumArray(number) {
//     let sum = 0;
//     const oddNumber = [];
//     for (var x = 0; x < number.length; x++) {
//         const index = x;
//         const element = number[index];
//         if (element % 2 !== 0) {
//             sum = sum + element;
//             console.log(index, element, sum)
//             oddNumber.push(element);
//         }
//     }
//     console.log(oddNumber);
//     return sum;
// }
// let number = [12, 65, 45, 78, 32, 45, 91, 68];
// var arraySum = getSumArray(number);
// console.log(arraySum);

// for(let i = 10; i >= 1; i--){
//     console.log(i);
// }
// function print(a, b, c){
//  return a+2;
//  return a*b;
//  return b*c+a;
// }
// console.log(print(1,2,3));

// let a =50;
// if(item => 50){}
// if(false){}
// for(let i=5; i<10; i=i+2){

// }
// Guessing Number Game With Math Function Library ................................
// var gameWon = 0;
// var gameLost = 0;
// for (var i = 0; i < 5; i++) {
//     var guessNum = parseInt(prompt("Enter Your Number 1 to 10 : "));
//     var randomNum = Math.floor(Math.random() * 10) + 1;
//     if (guessNum == randomNum) {
//         document.write('<br>You Have Won The Game <br>');
//         gameWon++;
//     } else {
//         document.write('<br> You Have Lost The Game <br>');
//         gameLost++;
//     }
//     document.write('Random Number Was : ' + randomNum);
// }
// document.write("<br>Total Win "+ gameWon);
// document.write("<br>Total Lost "+ gameLost);
// Factorial Number  ................................
// function getFactorial(number) {
//     var factorial = 1;
//     for (var i = 1; i <= number; i++) {
//         factorial = factorial * i;
//     }
//     document.write(factorial);
// }
// getFactorial(prompt('Enter Your Number'));
// Date Object Method ............................................ 
// var date = new Date();
// console.log(date);
// var year = date.getFullYear();
// console.log(year);
// var month = date.getMonth();
// console.log(month);
// Normal JS Practice ...........................................
// for(var i=1; i<=10; i++){
//     document.write(i + "<br>");
// }
// for(var i=1; i<100; i +=2){
//     document.write(i + "<br>");
// }
// for(var i=1; i<11; i ++){
//     document.write("7 x "+ i + " = "+ 7*i +"<br>");
// }
// function multiTable(num){
//     for(var i=1; i<11; i ++){
//         document.write(num +" x "+ i + " = "+ num*i +"<br>");
//     }
// }
// var number = parseInt(prompt("Enter Your Multiplication Number : "));
// multiTable(number);
// var sum = 0;
// for(var i=1; i<=10; i++){
//     sum = sum + i;
// }
// document.write("Sum is = " + sum +"<br>");
// Any Number Factorial calculation ....................... 
// function getFactorial(number) {
//     var factorial = 1;
//     for (var i = 1; i <= number; i++) {
//         factorial = factorial * i;
//     }
//     document.write(factorial);
// }
// getFactorial(prompt('Enter Your Number'));
// var sum =0;
// for(var i=1; i<=10; i +=2){
//     sum = sum + i;
// }
// document.write("Sum is = " + sum +"<br>");
// const userName = 'fastXvindasel'
// const userInput = 'fastXVinDasel'
// if(userName.toLowerCase() == userInput.toLowerCase()){
//     console.log('Valid Text')
// }else{
//     console.log('InValid Text')
// }
// Includes string searching any word .......................................... 
// const lyrics = 'Eswhar tumar amar milon ki likhte partona';
// const search = lyrics.includes('likte');
// console.log(search);
// const search1 = lyrics.indexOf('tumar');
// console.log(search1);
// Math abs pow round ceil floor random .................................... 
// const num1 = 23;
// const num2 = 32;
// const gap = Math.abs(num1-num2); // -5 as the same as the value like 5 
// console.log(gap);
// Max Min number finding fucntion ...............
// function maxNumber (num1, num2, num3){
//     max = Math.max(num1, num2, num3);
//     return max;
// }
// var maxNumbers = maxNumber(12,45,98);
// console.log(maxNumbers);

// function minNumber (num1, num2, num3){
//     min = Math.min(num1, num2, num3);
//     return min;
// }
// var minNumbers = minNumber(12,45,98);
// console.log(minNumbers);
// Find The Max number in an Array take user input ...........................................
// function maxInArray(num){
//     let maxNum = num[0];
//     for(var i=0; i<num.length; i++){
//         const element = num[i];
//         if(element > maxNum){
//             maxNum = element;
//         }
//     }
//     return maxNum;
// }
// const inputString = prompt("Enter elements of the array separated by commas:");
// const inputArray = inputString.split(",");
// const numericArray = inputArray.map(item => Number(item));
// var maxNumber = maxInArray(numericArray);
// console.log("Max Number : " + maxNumber);
// Find Minimum Number in an Array taking the array from users...........................................
// function minInArray(num){
//     let minNum = num[0];
//     for(var i=0; i<num.length; i++){
//         const element = num[i];
//         if(element < minNum){
//             minNum = element;
//         }
//     }
//     return minNum;
// }
// var minNumber = minInArray(numericArray);
// console.log("Minimum Number : " +minNumber);
// Reverse String and revers word in a sentence ...........................................
// function reverseString(strr){
//     let reversed = '';
//     for(let i = strr.length-1; i>=0; i--){
//         const element = strr[i];
//         reversed = reversed + element;
//         console.log(element, reversed);
//     }
// }
// const strr = 'I am mr omar jafor chy jaber';
// reverseString(strr);
// Reverse Word in a sentence Method 1 .........................
// function reversWord(strr){
//     const word = strr.split(' ');
//     const revers = [];
//     for(let i = word.length - 1; i>=0; i--){
//         const element = word[i];
//         revers.push(element);
//     }
//     const reversSentence = revers.join(' ');
//     console.log(reversSentence);
// }
// reversWord(strr);

// Method 2
// function reversWord(strr){
//     const word = strr.split(' ');
//     const revers = word.reverse();
//     const reversSentence = revers.join(' ');
//     console.log(reversSentence);
// }
// reversWord(strr);

// function add(a, b) {
//     return a + b;
// }
// console.log(add("adam" + "eve"));

// const number = -78;
// const answer = Math.abs(number);
// console.log(answer);

// var a=2; 
// var b=3; 
// if(a<b){
// 	console.log("Hello");
// }
// Problem Solving Task Module 22 ............................................... 
// var string = 'Name';
// var boolean = true;
// var numbers = 25;

// let num = 25;
// num = 5;
// console.log(num);

// const num1 = 25;
// console.log(num1);

// function sum(nam1, nam2){
//     return nam1+nam2;
// }
// function sub(nam1, nam2){
//     return Math.abs(nam1-nam2);
// }
// function mal(nam1, nam2){
//     return nam1*nam2;
// }
// function divide(nam1, nam2){
//     return nam1/nam2;
// }
// function modulas(nam1, nam2){
//     return nam1%nam2;
// }
// let nam1 = 120;
// let nam2 = 12;
// console.log(sum(nam1, nam2));
// console.log(sub(nam1, nam2));
// console.log(mal(nam1, nam2));
// console.log(divide(nam1, nam2));
// console.log(modulas(nam1, nam2));

// const country = 'Bangladesh';
// const age = 24;
// const isIndependent = true;

// var names = ['German', 'Norwegian', 'Danish', 'Icelandic', 'Dutch', 'Bulgarian', 'Russian', 'Swedish', 'Norwegian', 'Danish', 'Icelandic', 'Dutch', 'Bulgarian', 'Ukrainian', 'Belarusian', 'Slovene', 'Slovak', 'Macedonian', 'Croatian', 'Romanian'];
// function removeDuplicate(names){
//     const uniqueArray = [];
//     for(var i=0; i<names.length; i++){
//         var name = names[i];
//         if(uniqueArray.includes(name) == false){
//             uniqueArray.push(name);
//         }
//     }
//     return uniqueArray;
// }
// const uniqueArray = removeDuplicate(names);
// console.log(uniqueArray);
// Question NO - 4
// let nam1 = 0;
// let nam2 = 0;
// if(nam1 < nam2){
//     console.log('Number Two is Big');
// }else if (nam1 > nam2){
//     console.log('Number One is Big')
// }else if (nam1 == nam2){
//     console.log('Number One Two is Equal')
// }else if (nam1 != nam2){
//     console.log('Number One is not Equal')
// }else if (nam1 <= nam2){
//     console.log('Number one is ')
// }else if (nam1 >= nam2){
//     console.log('Number two is')
// }
// else{
//     console.log('Number is Nothing')
// }
// Question NO- 05 & Question NO - 6
// let num1 = 480;
// let num2 = 408;
// let num3 = 506;
// if(num1 > num2 && num1 > num3){
//     console.log('Largest Number is : ' + num1);
// }else if (num2 > num1 && num2 > num3){
//     console.log('Largest Number is :'+ num2)
// }else{
//     console.log('Largest Number is :'+ num3)
// }

// if(num1 > num2 || num1 > num3){
//     console.log('Number one is not last');
// }else{
//     console.log('Number one is last');
// }
// Question No - 07
// var i = 7;
// while(i<19){
//     console.log(i);
//     i+=2;
// }
//Question No - 08
// var number = [12, 105, 48, 42, 81, 68, 50, 98];
// console.log(Array.isArray(number));
// console.log(number.length);
// number[3] = 100;
// console.log(number);
// number.splice(3, 1, 65, 80);
// console.log(number);
//Question No - 09
// for(var nam of number){
//     console.log(nam);
// }
//Question No - 10
// for(var i = 0; i<number.length; i++){
//     const element = number[i]
//     if(element > 80){
//         console.log(element);
//     }
// }
//Question No - 11
// function multipleMath(num1, num2, num3){
//     return num1*num2*num3;
// }
// console.log(multipleMath(10,2,32));

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

//Question No - 12
// var person = {
//     name: 'Omar Jafor',
//     age: 28,
//     blood: 'O+'
// }
// console.log(person);
// person.age = 30;
// console.log(person);
//Question NO - 13
// function feetToInch(feet) {
//     return feet * 12;
// }
// console.log(feetToInch(5));
//Question NO - 14
// function centimeterToMeter(centimeter) {
//     return centimeter / 100;
// }
// console.log(centimeterToMeter(50000));
//Question NO - 15
// function paperRequirements(book1, book2, book3) {
//     var paperForB1 = book1 * 100;
//     var paperForB2 = book2 * 200;
//     var paperForB3 = book3 * 300;
//     return paperForB1 + paperForB2 + paperForB3;
// }
// var totalPage = paperRequirements(2, 1, 2);
// console.log('Number of Total Page is : ', totalPage);
//Question NO - 16
// var names = ['German', 'Norwegian', 'Afghanistan', 'Danish', 'Icelandic', 'Dutch', 'Bulgarian']
// function bestFriend(names){
//     let myBestFrnd = names[0]
//     for(let i = 0; i<names.length; i++){
//         let element = names[i]
//         if(myBestFrnd.length < element.length){
//             myBestFrnd = element;
//         }
//     }
//     return myBestFrnd;
// }
// let myBestFrnd = bestFriend(names);
// console.log(myBestFrnd);
//Question NO - 17
// var number = [12, 105, 48, 42, 81, -68, -50, 98];
// function positiveVsNegative(numbers){
//     let positiveNumber = [];
//     for(let i = 0; i < numbers.length; i++){
//         let element = numbers[i];
//         if(element >= 0){
//             positiveNumber.push(element);
//         }else{
//             break;
//         }
//     }
//     return positiveNumber;
// }
// let positiveNumber = positiveVsNegative(number);
// console.log(positiveNumber);
//Question No - 18
// var names = ['German', 'Norwegian', 'Afghanistan', 'Danish', 'Icelandic', 'Dutch', 'Bulgarian', 'Afghanistan', 'Danish', 'German', 'Norwegian',];
// function duplicateName(names) {
//     let uniqueName = [];
//     for (let i = 0; i < names.length; i++) {
//         let element = names[i]
//         if (uniqueName.includes(element) === false) {
//             uniqueName.push(element);
//         }
//     }
//     return uniqueName;
// }
// const uniqueNames = duplicateName(names);
// console.log(uniqueNames);
//Question No - 19
// for(let i=1; i<=50; i++){
//     if(i % 3 == 0 && i % 5 == 0){
//         console.log('Foomar');
//     }else if (i % 3 == 0){
//         console.log('Foo');
//     }else if (i % 5 == 0){
//         console.log('Mar');
//     }else{
//         console.log(i);
//     }
// }
//Question No - 20
// function woodCalculator(chairQ, tableQ, bedQ){
//     var perChairQ = chairQ * 3;
//     var perTableQ = tableQ * 10;
//     var perBedQ = bedQ * 20;
//     return perBedQ+perChairQ+perTableQ;
// }
// var totalWood = woodCalculator(1, 1, 1);
// console.log('Total Woos Need is : ', totalWood);
//Question No - 21
// const phones = [
//     {name: 'Xiaomi', Network: '5G', camera:108, storage:'128gb', price: 62000, color:'Black'},
//     {name: 'Realme', Network: '4G', camera:64, storage:'128gb', price: 20000, color:'Silver'},
//     {name: 'Vivo', Network: '4G', camera:48, storage:'64gb', price: 15000, color:'Gray'},
//     {name: 'Apple', Network: '5G', camera:48, storage:'256gb', price: 120000, color:'Gold'},
//     {name: 'Oppo', Network: '4G', camera:12, storage:'64gb', price: 16000, color:'Black'},
//     {name: 'Samsung', Network: '5G', camera:64, storage:'256gb', price: 82000, color:'Red'},
//     {name: 'OnePlus', Network: '5G', camera:64, storage:'512gb', price: 52000, color:'Blue'}
// ];
// function cheapestPhone(phones){
//     let cheapestPhoneis = phones[0];
//     for(let i=0; i<phones.length; i++){
//         let phone = phones[i];
//         if(phone.price < cheapestPhoneis.price){
//             cheapestPhoneis = phone;
//         }
//     }
//     return cheapestPhoneis;
// }
// var cheapPhone = cheapestPhone(phones);
// console.log(cheapPhone);
//For Cheap Camera Phone..........................
// function cheapestPhone(phones){
//     let cheapestPhoneis = phones[0];
//     for(let i=0; i<phones.length; i++){
//         let phone = phones[i];
//         if(phone.camera < cheapestPhoneis.camera){
//             cheapestPhoneis = phone;
//         }
//     }
//     return cheapestPhoneis;
// }
// var cheapPhone = cheapestPhone(phones);
// console.log(cheapPhone);
//Shopping Cart Total Price Calculation ..........................
// const phoneShoping = [
//     {name: 'Xiaomi', Network: '5G', camera:108, storage:'128gb', price: 62000, color:'Black', quantity:5},
//     {name: 'Realme', Network: '4G', camera:64, storage:'128gb', price: 20000, color:'Silver', quantity:2},
//     {name: 'Vivo', Network: '4G', camera:48, storage:'64gb', price: 15000, color:'Gray', quantity:3},
//     {name: 'Apple', Network: '5G', camera:48, storage:'256gb', price: 120000, color:'Gold', quantity:4},
//     {name: 'Oppo', Network: '4G', camera:12, storage:'64gb', price: 16000, color:'Black', quantity:6},
//     {name: 'Samsung', Network: '5G', camera:64, storage:'256gb', price: 82000, color:'Red', quantity:2},
//     {name: 'OnePlus', Network: '5G', camera:64, storage:'512gb', price: 52000, color:'Blue', quantity:3},
// ];
// function shopingCost(products){
//     let totalCost = 0;
//     for(let i=0; i<products.length; i++){
//         let product = products[i];
//         totalCost = totalCost + product.price;
//     }
//     return totalCost;
// }
// var totalCost = shopingCost(phoneShoping);
// console.log(totalCost);
//For All Price with Also Quantity Calculated......................................
// function shopingCost(products){
//     let totalCost = 0;
//     for(let i=0; i<products.length; i++){
//         let product = products[i];
//         let productTotalPrice = product.price * product.quantity;
//         totalCost += productTotalPrice;
//     }
//     return totalCost;
// }
// var totalCost = shopingCost(phoneShoping);
// console.log(totalCost);
//Discount Shopping Cart With Discount Total Price Calculation ..........................
// function ticketPrice(ticketQuantity){
//     if(ticketQuantity <= 100){
//         const firstPrice = ticketQuantity * 100;
//         return firstPrice;
//     }else if (ticketQuantity <= 200){
//         let firstPrice = 100*100;
//         const secondPrice = (ticketQuantity - 100)*90 + firstPrice;
//         return secondPrice;
//     }else{
//         let firstPrice = 100*100;
//         let secondPrice = 100*90;
//         const thirdPrice = (ticketQuantity - 200)*80 + firstPrice + secondPrice;
//         return thirdPrice;
//     }
// }
// let ticketPrices = ticketPrice(320);
// console.log(ticketPrices);
//String Type Check Binary or decimal .......................................................
// function positiveVsNegative(strings){
//     let positiveNumber;
//     for(let i = 0; i < strings.length; i++){
//         let element = strings[i];
//         if(element == 0 || element == 1){
//             positiveNumber = true;
//         }else{
//             positiveNumber = false;
//             break;
//         }
//     }
//     return positiveNumber;
// }
// console.log(positiveVsNegative("01110101110010"));