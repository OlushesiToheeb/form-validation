"use strict"

const button = document.querySelector(".claim");

const inputs = document.querySelectorAll("#input");
const validInputs = document.querySelectorAll("input:valid");
const notValid = document.querySelectorAll("input:invalid");
const formContentInput = document.querySelector(".formContentInput");
const glyphicons = document.querySelectorAll(".glyphicon-exclamation-sign");
const glyphiconss = document.querySelector('.glyphiconss');
const smalls = document.querySelectorAll(".small");
const smalltag = document.querySelector('.smalltag');
const email = document.querySelector('.Email');


glyphicons.forEach(glyphicon => glyphicon.classList.add('no-style'));
smalls.forEach(small => small.classList.add('no-style'));
glyphiconss.classList.add('no-style');
smalltag.classList.add('no-style');


button.addEventListener('click', function(){
    inputs.forEach((inputField) => {
        const glyphicon = inputField.previousElementSibling;
        const small = inputField.parentElement.nextElementSibling;

        if (inputField.valid) {
          glyphicon.classList.add('no-style');
          small.classList.add('no-style');
        } else {
          glyphicon.classList.remove('no-style');
          small.classList.remove('no-style');
        }
    })
});


// for(i = "#"; i.length<8; i += "#"){
//     console.log(i)
// }

// function isPalindrome(word) {
//     word = word.toLowerCase()
//     let newWord =word .split('')
//                     .reverse()
//                     .join('');

//     if(newWord == word) {
//         return 'isPalindrome';
//     }
//     return 'is not palindrome';
// }
// console.log(isPalindrome("Deleveled"));

// const name = ['kunle', 'dele', 'rad'];

// let i = 0;
// while(i < name.length){
//     console.log(name[i]);
//     i++;

// }

const calcArea = radius => 3.14 * radius**2;


const area = calcArea(5);
console.log(area);

