let scrollToTop = document.querySelector("#btn-back-to-top");
window.addEventListener('scroll', function (){
  if(window.pageYOffset > 300){
    scrollToTop.classList.add('show');
    scrollToTop.style.display = "block";

  }
  else{
    // scrollToTop.classList.remove('show');
    scrollToTop.style.display = "none";
  }
});
scrollToTop.addEventListener('click', function(){
  window.scrollTo({ top: 0, behavior: 'smooth' });
});