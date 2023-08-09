function cubeNumber(number) {
    if(typeof(number) !== 'number'){
        console.log('Please Enter Valid Number');
    }else{
        let cube = number*number*number;
        return cube;
    }
    
}
console.log(cubeNumber(4));

function matchFinder(string1, string2) {
    if(typeof(string1) !== 'string' || typeof(string2) !== 'string'){
        console.log('Please Enter Valid Input');
    }
    else if(string1.includes(string2) == true){
        return true;
    }
    else{
        return false;
    }
}
console.log(matchFinder('Peter Parker', 'Pet'));

function sortMaker(arr) {
    if(arr[0] === arr[1]){
        return 'equal';
    }
    else if(arr[0] >= 0 && arr[1] >= 0){
        if(arr[1] > arr[0]){
            let temp = arr[0];
            arr[0] = arr[1];
            arr[1] = temp;
        }
        return arr;
    }
    else{
        return 'Invalid Input';
    }
}
let arrIs = [2,-1]
console.log(sortMaker(arrIs));

function findAddress(obj) {
        const street = obj.street || '__';
        const house = obj.house || '__';
        const society = obj.society || '__';
        return street +','+ house +','+ society;
}
let obj = {
    street: 10,
    house: '15A',
    society: 'Earth Perfect'
}
console.log(findAddress(obj));