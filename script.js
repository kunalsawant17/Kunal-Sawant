// Typing Animation

const words = [
"Web Developer",
"Data Analyst",
"Cybersecurity",
"UI / UX Designer"
];

let word = 0;
let letter = 0;
let reverse = false;

const typing = document.getElementById("typing");

function type(){

if(!typing) return;

if(!reverse){

typing.innerHTML = words[word].substring(0,letter+1);

letter++;

if(letter === words[word].length){

reverse = true;

setTimeout(type,1500);

return;

}

}else{

typing.innerHTML = words[word].substring(0,letter-1);

letter--;

if(letter === 0){

reverse = false;

word++;

if(word === words.length){

word = 0;

}

}

}

setTimeout(type, reverse ? 60 : 120);

}

type();


// Smooth Scroll

document.querySelectorAll('a[href^="#"]').forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior:"smooth"

});

});

});


// Header Shadow

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>20){

header.style.boxShadow="0 10px 25px rgba(0,0,0,.35)";

}else{

header.style.boxShadow="none";

}

});