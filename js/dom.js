document.querySelector('#head').innerHTML="Good Bye";
document.querySelector('#head1').innerHTML="Good Bye Bye";

// document.getElementById('para').innerHTML='Hello I am paragraph';
// document.querySelector('#para').innerHTML='Hello I am paragraph';
function myMessage(){
    alert('Hello Switch ON');
}
function myMessage1(){
    document.querySelector('#para').innerHTML='Hello I am Paragraph By On Click';
}
function myMessage2(){
    alert('Hello Switch OFF');
}

const sections = document.querySelectorAll('h1');
console.log(sections);