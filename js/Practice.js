// challenge #1 Print numbers from 1 to 10
// for(let i = 1; i<11; i++) {
//     console.log(i);
//     document.write(i + '<br>');
// }

// challenge #2: Print the odd numbers less than 100
// for (let i = 1; i < 100; i+=2) {
//     document.write(i + '<br>');
// }

// challenge #3: Print the multiplication table with 7
// for(let i=1; i<11; i++){
//     console.log(`7 * ${i} = ${7*i}`);
// }

// challenge #4: Print all the multiplication tables with numbers from 1 to 10
// function multiTable(num){
//     for(let i=1; i<11; i++){
//         console.log(`${num} * ${i} = ${num * i}`);
//     }
// }

// for(let i=1; i<11; i++){
//     multiTable(i);
//     console.log('\n');
// }

// challenge #5: Calculate the sum of numbers from 1 to 10
// let sum = 0;
// for(let i = 1; i<11; i++){
//     sum += i;
// }
// console.log(sum);

// challenge #6: Calculate 10!
// let prod = 1;
// for(let i = 1; i<11; i++){
//     prod *= i;
// }
// console.log(prod);

// challenge #7: Calculate the sum of odd numbers greater than 10 and less than 30
// let sum = 0;
// for(let i = 11; i<30; i++){
//     if(i%2==1){
//         sum += i;
//     }
// }
// console.log(sum);

// challenge #8: Create a function that will convert from Celsius to Fahrenheit
// function celsiusToFahrenheit(num){
//     return num * (9 / 5) + 32
// }
// console.log(celsiusToFahrenheit(15));
// challenge #9: Create a function that will convert from Fahrenheit to Celsius
// function fahrenheitToCelsius(num) {
//     return (num - 32) * 5/9;
// }
// console.log(fahrenheitToCelsius(15));
// challenge #10: Calculate the sum of numbers in an array of numbers
// const numArr = [ 1,2,3,4,5 ];
// const sum = numArr.reduce( (acc, cur) => acc + cur , 0 );
// console.log(sum);

// function sumArr(arr){
//     let sum = 0;
//     for(let i=0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     return sum;
// }
// const result = sumArr(numArr);
// console.log(sumArr(numArr));
// challenge #11: Calculate the average of the numbers in an array of numbers
// function avgArr(arr){
//     let sum = 0;
//     for(let i=0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     const avg = sum / arr.length;
//     return avg;
// }
// console.log(avgArr(numArr));
// challenge #12: Create a function that receives an array of numbers and returns an array containing only the positive numbers
// function positiveNum(arr) {
//     let posArr = [];
//     for(let i = 0; i <= arr.length; i++){
//         let pnum = arr[i];
//         if( pnum >= 0){
//             posArr.push(pnum);
//         }
//     }
//     return posArr;
// }

const newNum = [12, 15, -18, 44, -84, -55, 64]
// console.log(positiveNum(newNum));

function positiveNumArr(arr) {
    return arr.filter( num => num > 0 )
}

const newArr = newNum.filter(el => el > 0)
console.log(newArr);

console.log(positiveNumArr(newArr));

// Mock Test Interview Question Solve 
console.log(2+3+'7');
const nums = [1, 3, 4, 2, 2, 3, 5, 8, 1]

var findDuplicate = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return nums[i];
            }
        }
    }
};

console.log(findDuplicate(nums));

// challenge #13: Find the maximum number in an array of numbers 
function maxNumber(arr){
    let max = arr[0]
    for(let i=0; i<arr.length; i++){
        if(arr[i] > max ){
            max = arr[i]
        }
    }
    return max;
}
console.log(maxNumber(newNum));

console.log(typeof('5'+3));
console.log(typeof(5-3));