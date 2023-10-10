const errorCircle = document.querySelectorAll(".errorCircle");
const textError = document.querySelectorAll(".textError");
const input = document.getElementsByTagName("input");
const button = document.getElementsByTagName("button")[0];
let a;
let b;
let c;
let d; 

input[0].addEventListener('input', () => {
    const resultA = input[0].value;
if (resultA.match(/\d/) == null && resultA !== " " && resultA.length !== 0)    {
    errorCircle[0].style.visibility='hidden';
    textError[0].style.visibility='hidden';
    input[0].style.borderColor='hsl(249, 10%, 26%, 20%)';
    a=1;
    }
else {
    errorCircle[0].style.visibility='visible';
    textError[0].style.visibility='visible';
    input[0].style.borderColor='hsl(0, 100%, 74%)';
    a=0;
}});


input[1].addEventListener('input', () => {
    const resultB = input[1].value;
if (resultB.match(/\d/) == null && resultB !== " " && resultB.length !== 0)    {
    errorCircle[1].style.visibility='hidden';
    textError[1].style.visibility='hidden';
    input[1].style.borderColor='hsl(249, 10%, 26%, 20%)';
    b=1;
}
else {
    errorCircle[1].style.visibility='visible';
    textError[1].style.visibility='visible';
    input[1].style.borderColor='hsl(0, 100%, 74%)';
    b=0;
}});


input[2].addEventListener('input', () => {
const resultC = input[2].value;
var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if (resultC.match(validRegex)) {
    errorCircle[2].style.visibility='hidden';
    textError[2].style.visibility='hidden';
    input[2].style.borderColor='hsl(249, 10%, 26%, 20%)';
    c=1;
}
else {
    errorCircle[2].style.visibility='visible';
    textError[2].style.visibility='visible';
    input[2].style.borderColor='hsl(0, 100%, 74%)';
    c=0;
}});


input[3].addEventListener('input', () => {
    const resultD = input[3].value;
    let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
    let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))');

    if(strongPassword.test(resultD)) {
        textError[3].style.visibility='visible';
        textError[3].innerHTML="Your password is STRONG!";
        textError[3].style.color="green";
        errorCircle[3].style.visibility='hidden';
        input[3].style.borderColor='green';
        d=1;
       
    } 
    else if(mediumPassword.test(resultD)) {
        textError[3].style.visibility='visible';
        textError[3].innerHTML="Your password is MEDIUM!";
        textError[3].style.color="blue";
        errorCircle[3].style.visibility='hidden';
        input[3].style.borderColor='blue';
        d=1;

    } 
    else if (resultD === null) {
        errorCircle[3].style.visibility='visible';
        textError[3].style.visibility='visible'; 
        textError[3].style.color="red";
        input[3].style.borderColor='hsl(0, 100%, 74%)';
        d=0;      
    }
    else {
        errorCircle[3].style.visibility='visible';
        textError[3].style.visibility='visible';
        textError[3].innerHTML="Your password is too WEAK! It has to contain lowercase and uppercase letters, digit, special character, and is at least 6 characters long.";
        textError[3].style.color="red";
        input[3].style.borderColor='hsl(0, 100%, 74%)';
        d=0;
    }});

button.addEventListener("click", function(){
    let e=a+b+c+d;
    if (e>=4) {alert("You were registered!");}
    else {alert("Please fill the form correctly!");
}
});




