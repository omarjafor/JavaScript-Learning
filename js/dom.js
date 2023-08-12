// document.querySelector('#head').innerHTML="Good Bye";
// document.querySelector('#head1').innerHTML="Good Bye Bye";

// document.getElementById('para').innerHTML='Hello I am paragraph';
// document.querySelector('#para').innerHTML='Hello I am paragraph';
function myMessage(){
    alert('Hello Switch ON');
}
// function myMessage1(){
//     document.querySelector('#para').innerHTML='Hello I am Paragraph By On Click';
// }
function myMessage2(){
    alert('Hello Switch OFF');
}

// const sections = document.querySelectorAll('h1');
// for(const sec of sections){
//     sec.style.border = '2px solid red';
//     sec.style.margin = '15px';
//     sec.style.padding = '5px';
//     sec.style.backgroundColor = 'blue';
// }

const lisection = document.getElementById('lisection');
lisection.classList.add('newClass');
lisection.classList.add('newClass2');
lisection.classList.add('newClass3');
lisection.classList.add('newClass4');
lisection.classList.remove('newClass');

function textChange(){
    let sectionH2 = document.getElementById('sectionH2');
    sectionH2.innerHTML='Cricket List Football';
}

document.getElementById('changeButton').addEventListener('click', function(){
    const headText = document.getElementById('headtext');
    headText.innerText = 'Changed The Heading Now By OmarJafor';
})