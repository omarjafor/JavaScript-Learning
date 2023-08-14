// document.querySelector('#head').innerHTML="Good Bye";
// document.querySelector('#head1').innerHTML="Good Bye Bye";

// document.getElementById('para').innerHTML='Hello I am paragraph';
// document.querySelector('#para').innerHTML='Hello I am paragraph';
function myMessage() {
    alert('Hello Switch ON');
}
// function myMessage1(){
//     document.querySelector('#para').innerHTML='Hello I am Paragraph By On Click';
// }
function myMessage2() {
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

function textChange() {
    let sectionH2 = document.getElementById('sectionH2');
    sectionH2.innerHTML = 'Cricket List Football';
}

document.getElementById('changeButton').addEventListener('click', function () {
    const headText = document.getElementById('headtext');
    headText.innerText = 'Changed The Heading Now By OmarJafor';
});

document.getElementById('btn-upd').addEventListener('click', function () {
    const inputField = document.getElementById('inputField');
    const inputText = inputField.value;

    const headText = document.getElementById('headtext');
    headText.innerText = inputText;
    inputField.value = '';
})

// document.getElementById('textInp').addEventListener('focus', function(){
//     console.log('Inside The input Field');
// })
// document.getElementById('textInp').addEventListener('blur', function(){
//     console.log('Outside The input Field blur');
// })
// document.getElementById('textInp').addEventListener('keydown', function(event){
//     console.log(event.target.value);
// })
// document.getElementById('textInp').addEventListener('keypress', function(event){
//     console.log(event.target.value);
// })
// document.getElementById('textInp').addEventListener('keyup', function(event){
//     console.log(event.target.value);
// })

// document.getElementById('btn-more').addEventListener('mousemove', function(){
//     console.log('btn clicked');
// })

document.getElementById('inputBox').addEventListener('keyup', function (event) {
    const text = event.target.value;
    const deleteButton = document.getElementById('btn-delete');
    if (text.toLowerCase() == 'delete') {
        deleteButton.removeAttribute('disabled')

    } else {
        deleteButton.setAttribute('disabled', true)
    }
})
document.getElementById('btn-delete').addEventListener('click', function () {
    const secret = document.getElementById('secretinfo');
    secret.style.display = 'none';
    const inputBox = document.getElementById('inputBox');
    inputBox.value = '';
})

// document.getElementById('li-2').addEventListener('click', function(event){
//     console.log('list 2 clicked');
//     event.stopPropagation();
//     event.stopImmediatePropagation();
// })
// document.getElementById('list-ul').addEventListener('click', function(){
//     console.log('UL clicked');
// })
// document.getElementById('sec-li').addEventListener('click', function(){
//     console.log('FULL Section clicked');
// })

// const items = document.getElementsByClassName('item');
// for (const item of items) {
//     item.addEventListener('click', function (event) {
//         event.target.parentNode.removeChild(event.target);
//     })
// }

document.getElementById('list-ul').addEventListener('click', function(event){
    event.target.parentNode.removeChild(event.target);
})

document.getElementById('btn-li').addEventListener('click', function(){
    const listUl = document.getElementById('list-ul');
    const li = document.createElement('li');
    li.classList.add('item');
    li.innerText = 'This is new line added for js';
    listUl.appendChild(li);
})

function upperName(name){
    console.log(name.toUpperCase());
}