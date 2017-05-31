document.addEventListener("DOMContentLoaded", function(){

var next = document.querySelector(".slider__arrow-right");
var prev = document.querySelector(".slider__arrow-left");
var lis = [...document.querySelectorAll(".slider__left li")];
var indeks = 0;

lis[indeks].classList.add("visible");

next.addEventListener("click", function (event){
  lis[indeks].classList.remove("visible");
  if (indeks >= lis.length-1) {
    indeks = -1;
  }
  indeks++;
  lis[indeks].classList.add("visible");
});

prev.addEventListener("click", function(event){
  lis[indeks].classList.remove("visible");
  indeks--;
  if (indeks < 0) {
    indeks = lis.length-1;
  }
  lis[indeks].classList.add("visible");
});
});
