function cubeNumber(number) {
    if(typeof(number) !== 'number'){
        return 'Please Enter Valid Number';
    }else{
        let cube = number*number*number;
        return cube;
    }
}

function matchFinder(string1, string2) {
    if(typeof(string1) !== 'string' || typeof(string2) !== 'string'){
        return 'Please Enter Valid Input';
    }
    else if(string1.includes(string2) == true){
        return true;
    }
    else{
        return false;
    }
}

function sortMaker(arr) {
    if(arr[0] < 0 || arr[1] < 0){
        return 'Invalid Input';
    }
    else if(arr[0] === arr[1]){
        return 'equal';
    }
    else{
        if(arr[1] > arr[0]){
            let temp = arr[0];
            arr[0] = arr[1];
            arr[1] = temp;
        }
        return arr;
    }
}

function findAddress(obj) {
        const street = obj.street || '__';
        const house = obj.house || '__';
        const society = obj.society || '__';
        return street +','+ house +','+ society;
}

function canPay(changeArray, totalDue) {
    if(changeArray.length == 0){
        return 'Empty Array! Enter Valid Input';
    }
    let sum = 0;
    for(let i=0; i<changeArray.length; i++){
        let element = changeArray[i];
        sum = sum + element;
    }
    if(sum >= totalDue){
        return true;
    }else{
        return false;
    }
}

function dubleNumber(num){
    return num*2;
}

console.log(dubleNumber(5));
console.log(cubeNumber(6));

console.log(matchFinder('Peter Parker', 'Pet'));

let arrIs = [2,3]
console.log(sortMaker(arrIs));

let obj = {
    street: 10,
    house: '15A',
    society: 'Earth Perfect'
}
console.log(findAddress(obj));

let newarr = [5,3,2];
const result = canPay(newarr, 10);
console.log(result);

function outPut(number) {
  return number % 2 !== 0;
}

function number() {
  for (let i = 1; i <= 50; i++) {
    if (outPut(i)) {
      console.log(i);
    }
  }
}

number();