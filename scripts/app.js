let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/wolf.jpg') {
      myImage.setAttribute('src','images/horny.jpg');
    } else {
      myImage.setAttribute('src','images/wolf.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Tfw that blog, ' + myName;
}
if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Tfw that blog, ' + storedName;
}
myButton.onclick = function() {
    setUserName();
}