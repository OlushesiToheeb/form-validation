"use strict"

const button = document.querySelector(".claim");

const inputs = document.querySelectorAll("#input");
const validInputs = document.querySelectorAll("input:valid");
const notValid = document.querySelectorAll("input:invalid");
const form = document.querySelector(".formcontent");
const glyphicons = document.querySelectorAll(".glyphicon-exclamation-sign");
const glyphiconss = document.querySelector('.glyphiconss');
const smalls = document.querySelectorAll(".small");
const smalltag = document.querySelector('.smalltag');
const email = document.querySelector('.Email');


glyphicons.forEach(glyphicon => glyphicon.classList.add('no-style'));
smalls.forEach(small => small.classList.add('no-style'));
glyphiconss.classList.add('no-style');
smalltag.classList.add('no-style');


button.addEventListener('click', () => {
    inputs.forEach((inputField) => {
        if(inputField.value === "") {
            glyphicons.forEach(glyphicon => {
                glyphicon.classList.remove('no-style');
            });
            smalls.forEach(small => {
                small.classList.remove('no-style');
            });
        }else{
            glyphicons.forEach(glyphicon =>{
                glyphicon.classList.add('no-style');
            });
            smalls.forEach(small =>{
                small.classList.add('no-style');
            });
        }
    })

    if (email != email.type){
        glyphiconss.classList.remove('no-style');
        smalltag.classList.remove('no-style');
        email.placeholder = "email@example/com";
    }else{
        glyphiconss.classList.add('no-style');
        smalltag.classList.add('no-style');
        email.placeholder = "Email address";
    }
    
    inputs.forEach((inputField) => {
        inputField.addEventListener('keyup', e => {
           if(e.target.value !== ''){
            glyphicons.forEach(glyphicon =>{
                glyphicon.classList.add('no-style');
            });
            smalls.forEach(small =>{
                small.classList.add('no-style');
            })
        }else{
            glyphicons.forEach(glyphicon => {
                glyphicon.classList.remove('no-style');
            });
            smalls.forEach(small => {
                small.classList.remove('no-style');
            });
        } 
        });
        
    }); 
});


// inputs.addEventListener('keyup', e => {
//     e.preventDefault();
    
    
// });




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

// const calcArea = radius => 3.14 * radius**2;


// const area = calcArea(5);
// console.log(area);

  
// function findSolution(target){
//    function find(current, history){
//        if(current == target){
//            return history;
//        }else if (current > target){
//            return null;
//        }else{
//            return find(current + 5, `(${history} + 5)`) || find(current *3, `(${history *3})`);
//        }
//    }
//    return find(1, "1");
// }

// console.log(findSolution(24));
