const today = new Date();
console.log(today);

const date1 = new Date ('1971-03-26');
const date2 = new Date ('1971-12-16');
if(date1.getTime() < date2.getTime()){
    console.log('March Befor December');
}else{
    console.log('March is not befor december');
};

const number = 25;
if(typeof number === 'number'){
    console.log('Value is a number');
}else{
    console.log('Value is not a number');
}

const numbers = [12, 15, 48, 23, 48, 95];
console.log(typeof numbers);
// is this is an array then will return true if not return false
console.log(Array.isArray(numbers)); 