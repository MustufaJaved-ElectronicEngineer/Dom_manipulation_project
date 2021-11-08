var score1= 0;
var btn1=document.querySelector("#pr1");
var p1 = document.querySelector("#score1");

var score2= 0;
var btn2=document.querySelector("#pr2");
var p2 = document.querySelector("#score2");

var Reset = document.querySelector("#Reset");


btn1.addEventListener("click", function(){
    score1++;
    p1.textContent=score1;

});


btn2.addEventListener("click", function(){
    score2++;
    p2.textContent=score2;

});


Reset.addEventListener("click", function(){
    score1=0;
    score2=0;
    p1.textContent=score1;
    p2.textContent=score2;
   
})