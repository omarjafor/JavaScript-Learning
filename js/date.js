const today = new Date();
console.log(today);

const date1 = new Date ('1971-03-26');
const date2 = new Date ('1971-12-16');
if(date1.getTime() < date2.getTime()){
    console.log('March Befor December');
}else{
    console.log('March is not befor december');
};