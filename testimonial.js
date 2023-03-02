var slideIndex = 0;
var slides = document.querySelectorAll(".fig1");
slides[slideIndex].style.display = "block";
setInterval(function (){
  slides[slideIndex].style.display = "none";
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].style.display = "block";
}, 1000);