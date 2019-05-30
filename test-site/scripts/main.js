let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/22.jpg') {
      myImage.setAttribute('src', 'images/1.png');
    } else {
      myImage.setAttribute('src', 'images/22.jpg');
    }
}

function setHeading(name){
  let myHeading = document.querySelector('h1');
  myHeading.textContent = 'Mozilla 酷毙了,'+ name + '！';
}

function setUserName(){
  let myName = prompt('请输入你的名字');
  localStorage.setItem('name',myName);
  setHeading(myName);
}

let storedName = localStorage.getItem('name');
if(!storedName){
  setUserName();
}else{
  setHeading(storedName);
}

let myButton = document.querySelector('button');
myButton.onclick = setUserName;
