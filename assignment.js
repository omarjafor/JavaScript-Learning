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