// var name = "Jaber JaBed";
// name = "JaBed";
// document.write(name);

// var number = 20;

// num = toString(number);
// console.log(typeof(num));

// var number = "20";

// num = parseInt(number);
// console.log(typeof(num));

// var number = 20.567;

// num = parseFloat(number);
// console.log(typeof(num));

// var number = 2.56789;

// console.log(number.toFixed(1)); //it's use for how much number shown after .point
// console.log(number.toPrecision(3)); // it's use for total how much digit to shown

// console.log(Number("12"));
// console.log(Number("12.5"));
// console.log(Number(true));
// console.log(Number(false));

// document.write("<br>JaBer " + "JaBed<br>");

// var firstName = "Omar Jafor ";
// var lastName = " Chowdhury Jaber <br>";

// var fullName = firstName + lastName;
// document.write(fullName);

// var fullName = "Omar Jafor Chy Jaber";
// document.write("My Full Name is " + fullName);

// var num1, num2;
// num1 = 20;
// num2 = 30;

// document.write("<br>Number 1 is = " + num1 + "<br>Number 2 is = " + num2);

// var text = "Bangladesh";
// var text = prompt("Enter Your Text To Know Length: ");

// document.write("<br>Number of character: " + text.length);

// text = text.charAt(2);
// document.write("<br>"+text);

// text = text.toUpperCase();
// document.write("<br>"+text);

// text = text.toLowerCase();
// document.write("<br>"+text);

// var text1 = "Bangladesh";
// var text2 = " is a beautiful country";
// var text = text1.concat(text2);
// document.write("<br>"+text);

// var text1 = "Bangladesh";
// var text = text1.slice(2, 6);
// document.write("<br>"+text);

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

// num1 = parseInt(num1);
// num2 = parseInt(num2);

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
//     document.write("<br>Even");
// else
//     document.write("<br>Odd");

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
// document.write("<br>");

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
// document.write("<br>");

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

// Using While Loop
// var i=0;
// while(i<=10){
//     document.write("<br>Result = "+i);
//     i++;
// }

// document.write("<br><br>");

// Using Do While Loop
// var i=0;
// do{
//     document.write("<br>Result = "+i);
//     i++;
// }while(i<=10);

// document.write("<br><br>");

// New Program Code using break and continue ------------->
// Using break 
// for (i=1; i<=100; i++){
//     if(i==10){
//         break;
//     }
//     document.write(" " + i);
// }
// document.write("<br><br>");

// Using continue
// for (i=1; i<=20; i++){
//     if(i==10){
//         continue;
//     }
//     document.write(" " + i);
// }
// document.write("<br><br>");

// Using continue Code No:-2
// for (i=1; i<=100; i++){
//     if(i%2 == 0){
//         continue;
//     }
//     document.write(" " + i);
// }
// document.write("<br><br>");

// Using continue Code No:-3
// for (i=1; i<=100; i++){
//     if(i%2 != 0){
//         continue;
//     }
//     document.write(" " + i);
// }
// document.write("<br><br>");

// New Program Code Using Ternary Operator ------------->

// var num = prompt("Enter Your Number : ");

// if(num > 0){
//     document.write("Positive");
// }else if( num < 0){
//     document.write("Negative");
// }else{
//     document.write("Zero")
// }
// document.write("<br><br>");

// var result = num > 0 ? "Positive" : "Negative"
// document.write(result);
// document.write("<br><br>");

// result = num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero"
// document.write(result);
// document.write("<br><br>");

// New Program Code Using Ternary Operator Find large number------------->
// var num = prompt("Enter Your Number 1 : ");
// var num1 = prompt("Enter Your Number 2 : ");
// var num2 = prompt("Enter Your Number 3 : ");

// if(num > num1 && num > num2){
//     document.write("Large Number is : " + num);
// }else if( num1 > num2 && num1 > num){
//     document.write("Large Number is : " + num1);
// }else{
//     document.write("Large Number is : " + num2);
// }

// result = num > num1 && num > num2 ? "Large number is: "+num : num1 > num2 && num1 > num ? "Large number is: "+num1 : "Large number is: "+num2
// document.write(result);

// New Program Code For Creating Function---------------------------->
// sample for multification we use earlier
// var num = 5;
// var result = num * num;
// document.write("Result = " + result);

// Creating a function for mulification
// function sqaure(num){
//     var result = num * num;
//     document.write("<br>Result = " + result);
// }
// sqaure(8);

// Creating a function for multifly 2 perameter
// var num1 = 0;
// var num2 = 0;
// function sqaure2(num1, num2){
//     var result = num1 * num2;
//     document.write("<br>Result = " + result);
// }
// sqaure2(2,5);

// Creating a function for multifly 2 perameter and return result
// function sqaure3(num1, num2){
//     var result = num1 * num2;
//     return result;
// }
// document.write("<br>Result = " + sqaure3(6,5));

// Creating a function make Additon of two number
// var num1, num2;
// function addition(num1, num2){
//     var result = num1 + num2;
//     document.write("<br>Result of Addition = " + result);
// }
// addition(546,59);

// Creating a function make subtraction of two number
// var num1, num2;
// function sub(num1, num2){
//     var result = num1 - num2;
//     document.write("<br>Result of subtraction = " + result);
// }
// sub(505,354);

// Creating a function make Division of two number
// var num1, num2;
// function division(num1, num2){
//     var result = num1 / num2;
//     document.write("<br>Result of Division = " + result);
// }
// division(55,5);

// // Creating a function make modulous of two number
// var num1, num2;
// function modulous(num1, num2){
//     var result = num1 % num2;
//     document.write("<br>Result of Modulous = " + result);
// }
// modulous(18,5);

// document.write("<br><br>");
// New Program Code For Creating Imidiate Function---------------------------->
//IIFEs (Immediately Invokeable Function Expresions)

// (function word(){
//     document.write("<br> Hello World");
// })();

// (function word(msg){
//     document.write("<br> "+ msg);
// })("Hello My New World");

// // Task Number :- 07 Code For Creating 2 Number sum with IIFE------------->
// (function add(num1,num2){
//     result = num1 + num2;
//     document.write("<br> Addition is = "+ result);
// })(10,20);

// document.write("<br><br>");
// // New Program Code For Creating Function Expression---------------------------->
// var display2 = function display(){
//     document.write("<br>Hello This is my Message");
// }
// display2();

// var display3 = function display(msg){
//     document.write("<br> Your message = "+ msg);
// }
// display3("I am Omar Jafor, it's new");
// document.write("<br>");
// display2();
// display3("Writing new message for you");
// document.write("<br><br>");

// // New Program Code For Creating Array---------------------------->
// var names = new Array(6);
// names[0] = "Abul";
// names[1] = "Kalam";
// names[2] = "Jamal";
// names[3] = "Rohim";
// names[4] = "Pagol";
// names[5] = "Chagol";

// console.log("Array Length is = "+names.length); //using for finding array length
// console.log(names);
// console.log(names[3]);

// var country1 =["Bangladesh", "India", "Pakistan"];
// var country2 =["Japan", "Chaina", "Rusia"];
// country1.push("Nepal","Maldives"); //adding an array in the last
// country2.push("Mayanmar");
// console.log(country1);
// console.log(country2);
// country1.pop(); // deleting an array in the last
// country2.pop();
// console.log(country1);
// console.log(country2);
// country1.shift(); // opposite of pop
// country2.unshift("Jabed"); // opposite of push
// console.log(country1);
// console.log(country2);

// New Program Code For Creating Loop in Array---------------------------->
// Printing Array Number
// var num = [10, 20, 30, 40, 50];
// for(i=0; i<5; i++){
//     console.log(num[i]);
// }
// Finding sum of all array number
// var sum = 0;
// for(i=0; i<5; i++){
//     sum = sum + num[i];
// }
// console.log("Sum = "+ sum);

// Taking number from a user
// var num = new Array();
// for(i=0; i<5; i++){
//     num[i] = parseInt(prompt("Enter Your Number = "));
//     console.log(num[i]);
// }

// var sum = 0;
// for(i=0; i<5; i++){
//     sum = sum + num[i];
// }
// console.log("Sum = "+ sum);

// New Program Code For Creating Array Library Method---------------------------->
// country1.splice(2,0,"Newzilan", "Thailand"); // Adding Elements using splice or remove an array
// console.log(country1);
// country1.splice(3,1);
// console.log(country1);
// slice or remove an array
// var newArray = country1.slice(2);
// console.log(newArray);
// console.log(country1); // here main array not changed by slice
// Sorting String or name
// country1.sort();
// console.log(country1);

// Sorting number
// var nums = [10, 5, 15, 9, 2];
// console.log(nums.sort());

// var nums1 = [12, 1, 15, 9, 3, 6];
// console.log(nums1.sort(function(a,b){
//     return a-b;
// }));


// New Program Code For 1D- One dimensional Array ---------------------------->
// var names = ["Kabir", "Arjun", "Mahi", "Kanika", "Putul", "Anika"];
// for(i=0; i<names.length; i++){
//     console.log(names[i]);
// }

// Task Number :- 08
// Finding max number from an array by function
// function highestScore(scores){
//     var max = scores[0];
//     for(i=1; i<scores.length; i++){
//         if(max < scores[i]){
//             max = scores[i];
//         }
//     }
//     return max; 
// }
// var scores = [10, 95, 49, 64, 98, 48];
// var maxScore = highestScore(scores);
// console.log("Highest Score is = "+ maxScore);


// New Program Code For 2D- Two dimensional Array ---------------------------->
// var names = [
//     ["Kabir", 95],
//     ["Arjun", 45],
//     ["Mahi", 65],
//     ["Kanika", 70],
//     ["Putul", 105],
//     ["Anika", 17]
// ];

// for(i=0; i<names.length; i++){
//     for(var n=0; n<2; n++){
//         console.log(names[i][n]);
//     }
// }

// Task Number :- 09
// Finding highest Scorer Name from 2D Array ----------------------------->
// var playersInfo = [
//     ["Kabir", 95],
//     ["Arjun", 145],
//     ["Mahi", 65],
//     ["Kanika", 70],
//     ["Putul", 15],
//     ["Anika", 17]
// ];
// function highestRunScorer(playersInfo){
//     var highestScorer = playersInfo[0][0];
//     var highestScore = playersInfo[0][1];
//     for(x=1; x<playersInfo.length; x++){
//         if(highestScore < playersInfo[x][1]){
//             highestScore = playersInfo[x][1];
//             highestScorer = playersInfo[x][0];
//         }
//     }
//     return highestScorer;
// }
// console.log(highestRunScorer(playersInfo));

// New Program Code For Create Object---------------------------->
// Varibale VS Object
// var name = "Kabir";
// var age = 24;
// var cgpa = 3.25;
// var fname = "Karim";
// This is how an object help us to create multi variable in a simple object
// var student = {
//     name: "Kabir",
//     age: 24,
//     cgpa: 3.25,
//     fname: "Karim",
// }
// Print the value from an object
// console.log(student);
// console.log(student.name);
// Adding a constructor for an object
// function Students(name,age,cgpa,lang){
//     this.name = name;
//     this.age = age;
//     this.cgpa = cgpa;
//     this.lang = lang;
// }
// var student1 = new Students("Kabir Khan", 26, 3.96, ["Bangla", "Hindi", "English"]);
// console.log(student1);
// console.log(student1.name);
// console.log(student1.lang);

// Adding a function for multiple object identify
// function Student(name,age,cgpa,lang){
//     this.name = name;
//     this.age = age;
//     this.cgpa = cgpa;
//     this.lang = lang;
//     //Creating function in constractor
//     this.display = function(){
//         console.log(this.name);
//         console.log(this.age);
//         console.log(this.cgpa);
//         console.log(this.lang);
//     }    
// }
// var student2 = new Student("Kabir Hossain", 28, 4.92, ["Bangla", "Nepali", "English"]);
// var student3 = new Student("Jaber Islam", 25, 5.00, ["Bangla", "Germany", "English"]);
// var student4 = new Student("Arif Ahmed", 29, 3.80, ["Bangla", "Spain", "English"]);

// student2.display();
// student3.display();
// student4.display();

// console.log(student2.lang);

// New Program Code For Math Object---------------------------->
// Findin Maximum number by Math Object
// var num1 = parseInt(prompt("Enter Your 1st Number: "));
// var num2 = parseInt(prompt("Enter Your 2nd Number: "));

// var max = Math.max(num1, num2);
// document.write("Maximum Number is = " + max);

// // Guessing Game Using Math Object ---------------->
// var numOfWon = 0;
// var numOfLost = 0;

// for(i=1; i<=5; i++){
//     var guessNum = parseInt(prompt("Enter Your 1st Number From 1 To 5: "));
//     var randomNum = Math.floor(Math.random()*6);

//     if(randomNum == guessNum){
//         console.log("You Have Won, Random Number is = "+ randomNum);
//         numOfWon++;
//     }else{
//         console.log("You Have Lost, Random Number is = "+ randomNum);
//         numOfLost++;
//     }
// }
// document.write("<br><br>Total Number of Won = "+ numOfWon);
// document.write("<br><br>Total Number of Lost = "+ numOfLost);

// New Program Code For Date Object & date methods---------------------------->
// var date = new Date();
// console.log(date);
// console.log(date.getFullYear());
// console.log(date.getDate());
// console.log(date.getMonth());
// console.log(date.getDay());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getTimezoneOffset());

// New Program Code For DOM - Document object Model---------------------------->
// var heading = document.getElementById("hh1")
// heading.innerHTML = "Hello Heading One";

// document.getElementById("hh2").innerHTML = "Hello Heading Two";

// querySelector is very flexiable, id class tagg name all can select
// document.querySelector("h2").innerHTML = "This is change by QuerySelector";
// document.querySelectorAll("h2")[1].innerHTML = "This is change by QuerySelector";

// document.querySelector("a").innerHTML = "Change Text";
// document.querySelector("li a").innerHTML = "Change Text";
// document.querySelector(".my-div a").innerHTML = "Change Text";

// New Program Code For Event Handler OnClick Event---------------------------->
function myAlert(){
    alert("Hello You Clicked Button 1");
}

function myAlert1(){
    alert("Hello You Clicked Button 2");
}

function myAlert2(){
    alert("Hello You Clicked A Paragraph");
}

var myVar = document.querySelector("#myPara");
function myClick(){
    myVar.innerHTML = "Hello Everyone! Paragraph Button ONE";
}

function myClick1(){
    myVar.innerHTML = "See Change! This is Paragraph Button TWO";
}


// New Program Code For Find create add remove html element ------------------------>
// var head = document.createElement("h1");
// var text = document.createTextNode("This is new Heading");
// head.appendChild(text);

// var myDiv = document.getElementById("mydiv");
// myDiv.appendChild(head);

// var head1 = document.getElementsByTagName("h1")[1];
// myDiv.removeChild(head1);

// // New program for add befor any element
// var head0 = document.createElement("h1");
// var text0 = document.createTextNode("This is befor Heading");
// head0.appendChild(text0);

// var h10 = document.getElementsByTagName("h1")[0];
// myDiv.insertBefore(head0, h10);

// // note for add, remove or check classname
// document.getElementById("mydiv").classList;
// document.getElementById("mydiv").classList.add("myClass");
// document.getElementById("mydiv").classList.remove("myClass");

// New Program Code For How to Select html element ------------------------>
// Select Downword parent then children
// var stuList = document.querySelector(".stdlist");
// var stuListA = stuList.querySelector(".stdlist-a");
// var stuListA = stuList.children[0];
// stuListA.innerHTML = "New Student";

// Select Upword children then parent
// var stuListA = document.querySelector("li");
// var stuList = stuListA.parentElement;

// // Select sideway elements sibling
// var stuListA = document.querySelector("li");
// var stuListB = stuListA.nextElementSibling;
// var stuListC = stuListB.nextElementSibling;

// var stuListB = stuListC.previousElementSibling;

// New Program Code For Creating an image slider by JavaScript-------------------->
// var photos = ["images/couple.jpg", "images/jabed.jpg", "images/shantu.jpg"];
// var imgTag = document.querySelector("img");

// var count = 0;

// function next(){
//     count++;
//     if(count>=photos.length){
//         count = 0;
//         imgTag.src = photos[count];
//     }else{
//         imgTag.src = photos[count];
//     }
// }

// function prev(){
//     count--;
//     if(count < 0){
//         count = photos.length - 1;
//         imgTag.src = photos[count];
//     }else{
//         imgTag.src = photos[count];
//     }
// }

// New Program Code For Change CSS Style by JavaScript -------------------->
// var myVar = document.querySelector("#para");
// function addStyle(){
//     myVar.classList.add("para");
// }
// function remStyle(){
//     myVar.classList.remove("para");
// }

// New Program Code For Event Listener -------------------->
// document.querySelector("button").addEventListener("click", function(){
//     alert("Hello You Clicked on Button");
// });

// var myVar = document.querySelector("h1");
// myVar.addEventListener("click", function(){
//     alert("You Clicked on Heading");
// })

// myVar.addEventListener("mouseover", function(){
//     myVar.classList.add("h1Class");
// })

// myVar.addEventListener("mouseout", function(){
//     myVar.classList.remove("h1Class");
// })

// New Program Code For Event Listener with Multiple element-------------------->
// for (var i=0; i<3; i++){
//     document.querySelectorAll(".myButt")[i].addEventListener("click", function(){
//         text = this.innerHTML;
//         document.querySelector("h1").innerHTML = text + " is Clicked";
//     });
// }

// New Program Code For Play Audio in JavaScript-------------------->
// for(i=0; i<3; i++){
//     document.querySelectorAll(".myAud")[i].addEventListener("click",function(){
//         var text = this.innerHTML;
//         audioPlay(text);
//     });
// }
// function audioPlay(text){
//     switch(text){
//         case "A":
//             var audio = new Audio("../sound/a.mp3");
//             audio.play();
//             document.querySelector("h1").innerHTML = text + " for Apple";
//             break;
//         case "B":
//             var audio = new Audio("../sound/b.mp3");
//             audio.play();
//             document.querySelector("h1").innerHTML = text + " for Ball";
//             break;
//         case "C":
//             var audio = new Audio("../sound/c.mp3");
//             audio.play();
//             document.querySelector("h1").innerHTML = text + " for Cat";
//             break;
//     }
// }

// New Program Code For Play Audio in JavaScript With Animation-------------------->
// for(i=0; i<3; i++){
//     document.querySelectorAll(".myAud")[i].addEventListener("click",function(){
//         var text = this.innerHTML;
//         audioPlay(text);
//         playAnim(text);
//     });
// }
// document.addEventListener("keypress",function(event){
//     var text = event.key;
//     audioPlay(text);
//     playAnim(text);
// });
// document.addEventListener("keypress", function(event){
//     var text = event.key;
//     document.querySelector("p").innerHTML = "You have Pressed = "+text;
// });

// function audioPlay(text){
//     switch(text){
//         case "A":
//             var audio = new Audio("../sound/a.mp3");
//             audio.play();
//             document.querySelector("h1").innerHTML = text + " for Apple";
//             break;
//         case "B":
//             var audio = new Audio("../sound/b.mp3");
//             audio.play();
//             document.querySelector("h1").innerHTML = text + " for Ball";
//             break;
//         case "C":
//             var audio = new Audio("../sound/c.mp3");
//             audio.play();
//             document.querySelector("h1").innerHTML = text + " for Cat";
//             break;
//     }
// }
// function playAnim(text){
//     var selectButton = document.querySelector("."+text);
//     selectButton.classList.add("anim");

//     setTimeout(function(){
//         selectButton.classList.remove("anim");
//     }, 1000);
// }
// New Program Code For KeyPress Listener in JavaScript ------------------>
// var count = 0;
// document.querySelector("textarea").addEventListener("keypress", function(event){
//     count++
//     var text = event.key;
//     document.querySelector("p").innerHTML = "You have Pressed = "+count;
// });

// window.addEventListener("scroll", function(event){
//     console.log("Scrolling.......");
// });

// New Program Code For Event Listener OnChange in JavaScript ------------------>
//Onchange to uppercase sample 1
// function upperCase(){
//     var input = document.querySelector("input");
//     input.value = input.value.toUpperCase();
// }
//Onchange to uppercase sample 2
// var input = document.querySelector("#lname");
// input.addEventListener("change",function(){
//     input.value = input.value.toUpperCase();
// });
//on mouse over event
// function mover(e){
//     e.innerHTML = "Thank You";
// }

//on mouse out event
// function mout(e){
//     e.innerHTML = "Mouse Over Me";
// }
//on mouse over event
// var mover = document.querySelector(".moverout2");
// mover.addEventListener("mouseover",function(){
//     mover.innerHTML = "Thank You";
// });
//on mouse out event
// mover.addEventListener("mouseout",function(){
//     mover.innerHTML = "Mouse Over Me";
// });

// New Program Code For Dom Event - Submit Event JavaScript ------------------>
// const form =document.querySelector("form");
// const name =form.querySelector("#name");
// const email =form.querySelector("#email");
// const password =form.querySelector("#password");

// form.addEventListener("submit",formHandler);

// function formHandler(e){
//     e.preventDefault();
//     console.log(name.value);
//     console.log(email.value);
//     console.log(password.value);
//     const userInfo = {
//         name : name.value,
//         email : email.value,
//         password : password.value,
//     };
//     console.log(userInfo);
//     name.value = "";
//     email.value = "";
//     password.value = "";
// }
// New Program Code For Dom Event - Video Event JavaScript ------------------>
// var video = document.querySelector("video");
// video.addEventListener("canplay", function(){
//     console.log("Canplay");
// });

// video.addEventListener("play", function(){
//     console.log("Video Play");
// });

// video.addEventListener("pause", function(){
//     console.log("Pause Video");
// });

// video.addEventListener("playing", function(){
//     console.log("Playing......");
// });
// New Program Code For Dom Event Object- Scroll,Resize,Toggle JavaScript ------------------>
// window.addEventListener("load", function(){
//         console.log("Loading.......");
//     });

// window.addEventListener("unload", function(){
//         console.log("Unloding.......");
//     });

// window.addEventListener("scroll", function(){
//         console.log("Scrolling.......");
//     });

// window.addEventListener("resize", function(){
//     const width = window.outerWidth;
//     const height = window.outerHeight;
//     console.log(`height : ${height}, width : ${width}`);
// });

// var details = document.querySelector("details");
// details.addEventListener("toggle", function(){
//     console.log("Toggled....");
// });
// New Program Code For Dom Event Object- Mouse Events JavaScript ------------------>
// // on mouse over event
// var mouse = document.querySelector(".moverout2");
// mouse.addEventListener("mouseover",function(){
//     mouse.innerHTML = "Thank You";
// });
// // on mouse out event
// mouse.addEventListener("mouseout",function(){
//     mouse.innerHTML = "Mouse Over Me";
// });
// // on click event
// mouse.addEventListener("click", function(e){
//     console.log("Clicked");
//     console.log(e.target.innerHTML);
// });
// //dblclick event
// mouse.addEventListener("dblclick", function(){
//     console.log("Duble Clicked");
// });
// //mousedown event
// mouse.addEventListener("mousedown", function(){
//     console.log("Mouse Down Occured");
// });
// //mouseup event
// mouse.addEventListener("mouseup", function(){
//     console.log("Mouse Up Occured");
// });
// //mouse enter event
// mouse.addEventListener("mouseenter", function(){
//     console.log("Mouse Enter Occured");
// });
// //mouse leave event
// mouse.addEventListener("mouseleave", function(){
//     console.log("Mouse Leave Occured");
// });
// //mousemove event
// mouse.addEventListener("mousemove", function(){
//     console.log("Mouse Move Occured");
// });
// New Program Code For Dom Event - Keyboard Event Object JavaScript ------------------>
//Keydown, Keypress, KeyUp Event
// var key = document.querySelector("textarea");
// key.addEventListener("keydown",function(e){
//     console.log("Key Down Working..");
//     if(e.repeat){
//         alert("Do Not Repeat Key Pressing");
//     }
// });

// key.addEventListener("keypress",function(){
//     console.log("Key Press Working..");
// });

// key.addEventListener("keyup",function(){
//     console.log("Key Up Working..");
// });

// key.addEventListener("keyup",function(e){
//     console.log(e.key);
//     console.log(e.code);
//     console.log(e.shiftKey);
// });
// New Program Code For Dom Event - Focus Event Object JavaScript ------------------>
// var input = document.querySelector("input");
// input.addEventListener("blur", function(){
//     console.log("Blur is working...");
// });

// input.addEventListener("focus", function(){
//     console.log("Focus is working...");
//     input.style.backgroundColor = "blue";
// });

// input.addEventListener("focusin", function(){
//     console.log("Focus in is working...");
// });

// input.addEventListener("focusout", function(e){
//     console.log("Focus Out is working...");
//     input.style.backgroundColor = "";
//     console.log(e.target.value);
// });
// New Program Code For Dom Event - Clip Board Event Object JavaScript ------------------>
// var input = document.querySelector("input");
// input.addEventListener("copy", function(){
//     console.log("Copy is done");
// });

// input.addEventListener("cut", function(){
//     console.log("Cut is done");
// });

// input.addEventListener("paste", function(){
//     console.log("Paste is done");
// });
// New Program Code For Dom Event - Drag Event Object JavaScript ------------------>
// var div = document.querySelector("div");
// var p = document.querySelector("p");

// p.addEventListener("dragstart", function(e){
//     e.dataTransfer.setData("text", e.target.id);
// });

// div.addEventListener("dragover", function(e){
//     e.preventDefault();
// });

// div.addEventListener("drop", function(e){
//     let id = e.dataTransfer.getData("text");
//     div.appendChild(document.getElementById(id));
//     e.preventDefault();
// });
// New Program Code For Bom Event - Browser Object Model - Locationg object ------------------>
// console.log(window);
// console.log(location.href);
// console.log(location.protocol);
// console.log(location.port);
// console.log(location.host);
// console.log(location.pathname);

// var loDiv = document.querySelector(".loDiv");
// console.log(loDiv);

// var p1 = loDiv.children[0];
// p1.textContent = location.href;

// var p2 = loDiv.children[1];
// p2.textContent = location.protocol;

// var p3 = loDiv.children[2];
// p3.textContent = location.port;

// var myButton = document.getElementById("myButton");
// myButton.addEventListener("click", function(){
//     location.assign("https://www.google.com");
// });
// New Program Code For Bom Event - PopUp Boxes Object ------------------>
// Confirm Box --------->
// function deleteSomething(){
//     let value = confirm("Do You Want to Delete?");
//     if(value){
//         console.log("Deleted");
//     } else {
//         console.log("Not Deleted");
//     }
// }
// deleteSomething();
// Prompt Box --------->
// function welcomeMessage(){
//     var h1 = document.createElement('h1');
//     let text;
//     var name = prompt("Enter Your Name : ");
//     if (name == null || name == ""){
//         text = 'No name found';
//     }else{
//         text = "Welcome "+name;
//     }
//     var textNode = document.createTextNode(text);
//     h1.appendChild(textNode);
//     document.body.appendChild(h1);
// }
// welcomeMessage();
// New Program Code For Bom Event - Timing Event Object ------------------>
// SetTime Out Event ----->
// setTimeout( () => {
//     console.log("Hi");
// }, 2000);

// setTimeout(display, 2000);
// function display(){
//     console.log('Display Function Working...');
// }

// var myButton = document.querySelector(".myButton");
// var message = document.querySelector(".message");
// myButton.addEventListener("click", saveUser);
// function saveUser(){
//     message.textContent = "User Registration Successful";
//     setTimeout(()=>{
//         message.textContent = "";
//     }, 2000);
// }
// Set Interval Event ----->
// var myButton = document.querySelector(".myButton");
// var message = document.querySelector(".message");
// myButton.addEventListener("click", displayCount);
// function displayCount(){
//     let count = 1;
//     message.textContent = count;
//     setInterval(()=>{
//         count++
//         message.textContent = count;
//     }, 1000);
// }
// New Program Code For Bom Event - Creating a Clock ------------------>
// var myButton = document.querySelector(".myButton");
// myButton.addEventListener("click", startTime);
// function startTime() {
//     const today = new Date();
//     let h = today.getHours();
//     let m = today.getMinutes();
//     let s = today.getSeconds();
//     m = checkTime(m);
//     s = checkTime(s);
//     document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
//     setInterval(startTime, 1000);
//   }
  
//   function checkTime(i) {
//     if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
//     return i;
//   }
// New Program Code For Error Handaling in JavaScript ------------------>
// try{
//     alert("This is one");
//     alert(x);
//     alert("This is two");
// }catch(err){
//     alert("Inside Catch Error");
//     console.log(err);
// }finally{
//     alert("Finally End This Program");
// }
// var check = document.getElementById("check");
// var text = document.getElementById("text");
// check.addEventListener("click", function(){
//     var num = text.value;
//     try{
//         if(num<5){
//             throw "Input Number is Too Low"
//         }else if(num>10){
//             throw "Input Number is Too High"
//         }
//     }catch(err){
//         console.log(err);
//     }
// });
// New Program Code For Canvas Drawing in JavaScript ------------------>
// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");

// ctx.lineWidth=3;
// ctx.strokeStyle = "black";
// ctx.strokeRect(10,10,385,285);

// ctx.fillStyle = "green";
// ctx.fillRect(12,12,380,280);

// var centerX = c.width / 2;
// var centerY = c.height / 2;
// ctx.beginPath();
// ctx.arc(centerX,centerY,65,0,2*Math.PI,false);

// ctx.fillStyle = "red";
// ctx.fill();
// ctx.stroke();
// New Program Code For variable and function in ES6------------------>
// Variable in ES6
// let x = 5;
// let y = 7;
// document.write(`Sum is = ${x+y}<br>`);
// let sum = x+y;
// document.write("<br>Sum is = " + sum);
// document.write(`<br>Sum is = ${sum}`); //this is the way of ES6
// Function in ES6
// function sum(x,y){
//     var sum = x+y;
//     console.log(sum);
// }
// sum(5,6);
// sum(10,2);

// const add = (x,y) => {
//     var sum = x+y;
//     console.log(sum);
// }
// add (20,30);
// New Program Code For Hoisting and Strict in ES6------------------>
// x=5;
// console.log(x);
// var x; 
// Hoisting js default behaviour
// var x = 10;
// if(true){
//     y = 20;
//     console.log(`Y = ${y}`);
//     var y;
// }
// console.log(`X = ${x}`);
// when you use strict then can't run without variable diclare
// "use strict"
// x = 20;
// console.log(`X = ${x}`);
// New Program Code For Defualt and rest parameter in ES6------------------>
// function message(text = "This is JS <br>"){
//     document.write(text);
// }
// message();
// message("Hello I love JavaScript");

// function message2(x,y, ...z){
//     document.write(`<br> X = ${x} <br> Y = ${y} <br> Z = ${z}`);
// }
// message2(10,20,30,40,50);
// New Program Code For Spread Operator in ES6------------------>
// function addNumbers(x,y,z){
//     return x+y+z;
// }
// let number = [10,20,30];
// document.write(addNumbers(...number));

// let number1 = [5, 6, ...number, 7, 8]; // Concatination by spread operator
// document.write(number1);
// Array Concatination
// let number1 = [1,2,3];
// let number2 = [4,5,6];
// let number = [...number1, ...number2];
// document.write(number);
//Object concatination
// let p1 = {
//     name : 'Abidur Rahman',
//     age : 28
// }
// let p2 = {
//     address : 'Fatickchari',
//     mobile : '01828-456545'
// }
// let p = {...p1, ...p2}
// console.log(p);
// New Program Code For Object Literals in ES6--------------------->
// Object Literal
// function personInfo(name, age){
//     return{
//         name : name,
//         age : age
//     } 
// }
// console.log(personInfo("Rakib Ullah", 25));
// This is the difference with object literal effect in es6
// function personInfo(name, age){
//     return{
//         name,
//         age
//     } 
// }
// console.log(personInfo("Jahanara Khatun", 52));
// return a message by object function
// let message = {
//     body : function(){
//         return `Hi, This is object function`;
//     }
// }
// console.log(message.body());
// same object function in es6
// let message2 = {
//     body(){
//         return `Hi, This is object function in es6`;
//     }
// }
// console.log(message2.body());
// function name using space
// let message3 = {
//     'just name' (){
//         return `Hi, This is object function in es6 again`;
//     }
// }
// console.log(message3['just name']());
// New Program Code - For of loop/ for in loop in ES6--------------------->
// For of in es6
// const names = ["Shakib", "Rakib", "Akib"];
// for(let x of names){
//     console.log(x);
// }
// For in loop - specially use in object
// let students = {
//     ID : 12023,
//     name : "Kalid Hossain",
//     age : 28
// }
// for(let x in students){
//     console.log(x);
// }
// for(let x in students){
//     console.log(students[x]);
// }
// for(let x in students){
//     console.log(`${x} : ${students[x]}`);
// }
// New Program Code ForEach vs For Loop in ES6--------------------->
// For Loop 
// for (let i=0; i<10; i++){
//     document.write(i);
// }
// For Each Loop
// let num = [10, 20, 30, 40, 50];
// num.forEach(myFunction)

// function myFunction(x){
//     document.write(x);
// }
// For each loop way2
// let num = [10, 20, 30, 40, 50];
// num.forEach(function(x){
//     document.write(x);
// });
// For each function for square
// let num = [2, 3, 4, 5, 6];
// let squareNum = [];
// num.forEach(function(x){
//     squareNum.push(x*x);
// })
// console.log(squareNum);
// add num with foreach loop on a array
// let num = [10, 20, 30, 40, 50];
// num.forEach(function(x,index,arr){
//     arr[index] = x+5;
// })
// console.log(num);
// New Program Code Map and Filter Array in ES6 JavaScript--------------------->
// Map Function
// let num = [2, 3, 4, 5, 6];
// let squareNum = num.map(function(x){
//     return x*x;
// })
// console.log(squareNum);
// Filter Array Function
// let num = [20, 30, 40, 5, 6, 22, 38];
// let squareNum = num.filter(function(x){
//     return x>10;
// })
// console.log(squareNum);
// console.log(squareNum.sort());
//New Program Code Arrow Function in ES6 JavaScript--------------------->
// function display(){
//     console.log("I am display one");
// }
// display();
// Traditional function vs arrow function
// const display2 = () => {
//     console.log("I am display Two");
// }
// Arrow Function in one line without 2nd bracket
// const display2 = () => console.log("I am display Two");
// display2();
// Traditional function finding name
// var students = [
//     {
//         id : 101,
//         name : "Abul Hossain",
//         age : 23
//     },
//     {
//         id : 102,
//         name : "Imam Hossain",
//         age : 28
//     },
//     {
//         id : 103,
//         name : "Rakib Hossain",
//         age : 27
//     },
//     {
//         id : 104,
//         name : "Korim Ullah",
//         age : 24
//     }
// ]
// function studentNames(){
//     return students.filter(function(x){
//        return x.age > 25
//     }).map(function(y){
//         return y.name;
//     });
// }
// console.log(studentNames());
// Arrow function finding name from array
// const studentNames1 = () =>
//     students.filter((x) => x.age > 25).map((y) => y.name);
// console.log(studentNames1());
//New Program Code Arrary Destructure in ES6 JavaScript--------------------->
// let number = [10, 20, 30, 40, 50]
// let [num1, num2, num3, num4, num5] = number;
// console.log(num1, num3);
// let number = [10, 20, 30, 40, 50]
// let [num1, num2, ...num3] = number;
// console.log(num1, num2, num3);
//New Program Code Swap Variable in ES6 JavaScript--------------------->
// let a=10, b=20;
// [a,b] = [b,a]
// console.log(a);
// console.log(b);
//New Program Code Object Destructure in ES6 JavaScript--------------------->
// var students = {
//             id : 101,
//             name : "Abul Hossain",
//             age : 23,
//             cgpa : 3.25,
//             language : {
//                 native : "Bangla",
//                 beginner : "English"
//             }
//         }
// const {id, name, age, cgpa, language} = students
// console.log(id);
// console.log(cgpa);
// console.log(language.beginner);
//New Program Code Function Destructure in ES6 JavaScript--------------------->
// Traditional function
// const studentInfo = (student) => {
//     console.log(`${student.id}, ${student.name}`);
// }
// var students = {
//                 id : 102,
//                 name : "Ahsfiq Ahmed",
//                 age : 23,
//                 cgpa : 3.25
//             }
// studentInfo(students);
// Function destruction
// const studentInfo = ({id, name, cgpa}) => {
//     console.log(`${id}, ${name}, ${cgpa}`);
// }
// var students = {
//                 id : 102,
//                 name : "Ahsfiq Ahmed",
//                 age : 23,
//                 cgpa : 3.25
//             }
// studentInfo(students);
//New Program Code find or findIndex in ES6 JavaScript--------------------->
// let number = [11, 21, 32, 43, 52]
// let evenNumber = number.find(x => x%2==0);
// console.log(evenNumber);
// let evenNumberIn = number.findIndex(x => x%2==0);
// console.log(evenNumberIn);
// function findNumber(value){
//     if(value%2==0)
//     return value;
// }
// let evenNumber = number.find(findNumber);
// console.log(evenNumber);
// let evenNumberIn = number.findIndex(findNumber);
// console.log(evenNumberIn);
//New Program Code String Method in ES6 JavaScript--------------------->
// let message = "My Name is Omar Jafor";
// console.log(message.startsWith("My"));
// console.log(message.includes("Omar"));
//because of string method is case sensetive it will be false
// console.log(message.includes("omar"));
// console.log(message.endsWith("Jafor"));
//New Program Code ES6 Module and Class in ES6 JavaScript--------------------->
// ES6 Module
// import {text, setText} from './myModule.js';
// console.log(text);
// setText("Good Bye From ES6");
// console.log(text);
// import {message} from './myModule.js';
// console.log(message);
// ES6 Class
// class Student{
//     constructor(id, name){
//         this.id = id;
//         this.name = name;
//     }
//     set studentName(name){
//         this.name = name;
//     }
//     get studentInfo(){
//         return this.id + " " + this.name;
//     }
// }
// let std = new Student(101, "JaBed");
// console.log(std);

// std.studentName = "Jaber JaBed";
// console.log(std);
// console.log(std.studentInfo);
//New Program Code Synchronous Programming in ES6 JavaScript--------------------->
// const taskOne = () => {
//     console.log("Task One");
// }
//Asynchronous Function
// const dataLoading = () => {
//     console.log("Task Two, Data Loading");
// }
// const taskTwo = () => {
//     setTimeout(dataLoading, 2000);
// }
// const taskThree = () => {
//     console.log("Task Three");
// }
// const taskFour = () => {
//     console.log("Task Four");
// }
// const taskFive = () => {
//     console.log("Task Five");
// }
// taskOne();
// taskTwo();
// taskThree();
// taskFour();
// taskFive();
//New Program Code callback and higher order function in ES6 JavaScript--------------------->
// function square(x){
//     console.log(`square of ${x} : ${x*x}`);
// }
// square(5);
// const y = square;
// y(6);
// function higherorder(num, callback){
//     callback(num);
// }
// higherorder(7, square)
// callback function -------->
// const taskOne = (callback) => {
//     console.log("Task One");
//     callback();
// }
// const dataLoading = () => {
//     console.log("Task Two, Data Loading");
// }
// const taskTwo = (callback) => {
//     setTimeout(dataLoading, 2000);
//     callback();
// }
// const taskThree = (callback) => {
//     console.log("Task Three");
//     callback();
// }
// const taskFour = (callback) => {
//     console.log("Task Four");
//     callback();
// }
// const taskFive = () => {
//     console.log("Task Five");
// }
// taskOne(()=>{
//     taskTwo(()=>{
//         taskThree(()=>{
//             taskFour(()=>{
//                 taskFive();
//             });
//         });
//     });
// });
//New Program Code Promise in ES6 JavaScript--------------------->
// const promise1 = new Promise((resolve, reject) => {
//     let completedPromise = false;
//     if(completedPromise){
//         resolve('completed promise 1');
//     }else{
//         reject('Not completed promise 1');
//     }
// });
// promise1.then((res)=>{
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })
// Promise Race Function ------------>
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve('completed promise 1');
//     }, 2000);
// });
// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         resolve('completed promise 2');
//     }, 1000);
// });
// Promise.all([promise1, promise2]).then((res) => console.log(res));
// Promise.race([promise1, promise2]).then((res) => console.log(res));
// Promise Chaining Function ------------>
// const taskOne = () => {
//     return new Promise((resolve, reject) => {
//         resolve('Task One is Completed');
//     })
// }
// const taskTwo = () => {
//     return new Promise((resolve, reject) => {
//         resolve('Task Two is Completed');
//     })
// }
// const taskThree = () => {
//     return new Promise((resolve, reject) => {
//         resolve('Task Three is Completed');
//     })
// }
// const taskFour = () => {
//     return new Promise((resolve, reject) => {
//         resolve('Task Four is Completed');
//     })
// }
// taskOne()
//     .then((res)=>console.log(res))
//     .then(taskTwo)
//     .then((res)=>console.log(res))
//     .then(taskThree)
//     .then((res)=>console.log(res))
//     .then(taskFour)
//     .then((res)=>console.log(res))
// console.log("End");
//New Program Code For Async and await in ES6 JavaScript--------------------->
// async function callAllTask(){
//     const t1 = await taskOne();
//     console.log(t1);
//     const t2 = await taskTwo();
//     console.log(t2);
//     const t3 = await taskThree();
//     console.log(t3);
//     const t4 = await taskFour();
//     console.log(t4);
// }
// callAllTask();
//New Program Code For XMLHttpRequest Api in ES6 JavaScript--------------------->
// const makeReqst = (method, url, data) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(method, url);

//     xhr.setRequestHeader('Content-type','application/json; charset=UTF-8');

//     xhr.onload = () => {
//         let data = xhr.response;
//         console.log(xhr.status);
//         console.log(JSON.parse(data));
//     }
    
//     xhr.onerror = () => {
//         console.log('Error is Here');
//     }

//     xhr.send(JSON.stringify(data));
// }

// const getData = () =>{
//     makeReqst('GET', 'https://jsonplaceholder.typicode.com/posts');
// }
// const sendData = () =>{
//     makeReqst('POST', 'https://jsonplaceholder.typicode.com/posts', {
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//       });
// }
// const upDateData = () =>{
//     makeReqst('POST', 'https://jsonplaceholder.typicode.com/posts', {
//         title: 'Jaber',
//         body: 'Large',
//         userId: 12,
//       });
// }
// sendData();
// upDateData();
//New Program Code For Fetch Api in ES6 JavaScript--------------------->
// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       userId: 1,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//   .then((res) => {
//     if(!res.ok){
//         const message = 'Error : ${res.status}';
//         throw new Error(message);
//     }
//     return res.json();
//   })
//   .then((json) => console.log(json))
//   .catch((err) => console.log(err));
//New Program Code For Fetch Api with async and await in ES6 JavaScript--------------------->
// const makeReqst = async (url, config) => {
//   const res = await fetch(url, config);
//   if(!res.ok){
//     const message = 'Error : ${res.status}';
//     throw new Error(message)
//   }
//   const data = await res.json();
//   return data;
// };
// const sendData = () => {
//   makeReqst('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//       title: 'foo',
//       body: 'bar',
//       userId: 1,
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
// };
// sendData();

// const getData = () => {
//   makeReqst('https://jsonplaceholder.typicode.com/posts')
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));
// };
// getData();
//New Program Code For Axios Api in ES6 JavaScript--------------------->
// console.log(window);

// axios.get('https://jsonplaceholder.typicode.com/posts/102')
// .then((res) => console.log(res.data))
// .catch((err) => console.log(err));

// axios
// .post('https://jsonplaceholder.typicode.com/posts', {
//     method: "POST",
//     body: JSON.stringify({
//         title: "JaBed",
//         body: "Good",
//         userID: 1,
//     }),
// })
// .then((res) => console.log(res.data))
// .catch((err) => console.log(err));

// axios
// .put('https://jsonplaceholder.typicode.com/posts/1', {
//     method: "POST",
//     body: JSON.stringify({
//         id: 1,
//         title: "JaBed",
//         body: "Good",
//         userID: 1,
//     }),
// })
// .then((res) => console.log(res.data))
// .catch((err) => console.log(err));

// axios
// .patch('https://jsonplaceholder.typicode.com/posts/1', {
    
//     body: JSON.stringify({
//         body: "Best",
//     }),
// })
// .then((res) => console.log(res.data))
// .catch((err) => console.log(err));

// axios
// .delete('https://jsonplaceholder.typicode.com/posts/1')
// .then((res) => console.log(res.data))
// .catch((err) => console.log(err));
// const makeReqst = (config) => {
//     return axios(config)
// }
// const getData = () =>{
//     makeReqst('https://jsonplaceholder.typicode.com/posts/')
//     .then((res) => console.log(res));
// }
// getData();
//New Program Code For Ajax Jquery Api in ES6 JavaScript--------------------->
// const makeReqst = async (url, method, data) => {
//     try{
//         const result = await $.ajax({
//             url : url,
//             method : method,
//             data : data,
//         })
//         console.log(result);
//         return result;
//     }catch(err){
//         console.log(err);
//     }
// }

// const getData = () => {
//     makeReqst("https://jsonplaceholder.typicode.com/posts/1", "GET")
//     .then ((res) => console.log(res));
// }
// getData();

// const createData = () => {
//     makeReqst("https://jsonplaceholder.typicode.com/posts/1", "POST", {
//         title : 'Foohad',
//         body : 'Baro',
//         userId: 1,
//     }).then ((res) => console.log(res));
// }
// createData();

// const updateData = () => {
//     makeReqst("https://jsonplaceholder.typicode.com/posts/2", "PUT", {
//         id: 1,
//         title : 'Fooma',
//         body : 'Zooma',
//         userId: 2,
//     }).then ((res) => console.log(res));
// }
// updateData();

// const deleteData = () => {
//     makeReqst("https://jsonplaceholder.typicode.com/posts/1", "DELETE")
//     .then ((res) => console.log(res));
// }
// deleteData();
//New Program Code For Web Storage Api in ES6 JavaScript--------------------->
//setItem(key, value)
// localStorage.setItem("UserName", "Jaber JaBed");
// localStorage.setItem("Password", "100200");
// console.log(localStorage);
//getItem(key)
// const userName = localStorage.getItem("UserName");
// const password = localStorage.getItem("Password");
// console.log(userName, password);
//removeItem(key)
// localStorage.removeItem("UserName");
// localStorage.removeItem("Password");
//Update setItem(key, value)
// localStorage.setItem("UserName", "JaBed");
// localStorage.setItem("Password", "102030");
// const countries = ["Bangladesh", "India", "Pakistan"];
// localStorage.setItem("Countries", JSON.stringify(countries));
// get Item from JSON
// const country = JSON.parse(localStorage.getItem("Countries"));
// console.log(country);
// localStorage.clear();
//session Storage
// sessionStorage.setItem("User1", "Jaber");
// sessionStorage.setItem("User2", "JaBed");
// const userName = sessionStorage.getItem("UserName");
// console.log(userName);
// sessionStorage.removeItem("UserName");
// sessionStorage.clear();
// const user = {
//     id : "101",
//     name : "Jaber",
//     age : 28
// }
// sessionStorage.setItem("user", JSON.stringify(user));
// const userJson = JSON.parse(sessionStorage.getItem("user"));
// console.log(userJson);
// Cookie Set and Get
// document.cookie = 'username=JaBed; expires=Fri, 05 Nov 2022 10:53:00 GMT';
// console.log(document.cookie);