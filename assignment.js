function cubeNumber(number) {
    if(typeof(number) != 'number'){
        console.log('Please Enter Valid Number');
    }else{
        let cube = number*number*number;
        return cube;
    }
    
}
console.log(cubeNumber('school'));