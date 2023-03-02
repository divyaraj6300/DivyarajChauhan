// let answers = document.querySelectorAll(".accordion");
// answers.forEach((event) => {
//   event.addEventListener("click", () => {
//     if (event.classList.contains("active")) {
//       event.classList.remove("active");
//     } else {
//       event.classList.add("active");
//     }
//   });
// });  

document.querySelectorAll(".accordion").forEach((acc) =>{
acc.addEventListener("click",() =>{
  acc.classList.contains('.active')? ""
  :document.querySelector('.accordion.active')?.classList.remove('active');
  acc.classList.toggle("active");
});
});


// $('.question').click(function(e){
//   e.prevenDefault();
//   var notthis = $('.active').not(this);
//   notthis.find('.fa-solid fa-minus').addClass('.fa-solid fa-plus').removeClass('.fa-solid fa-minus');
//   notthis.toggleClass('active').next('.answer').slideToggle(300);

//   $(this).toggleClass('active').next().slideToggle("fast");
//   $(this).children(i).toggleClass('fa-solid fa-plus fa-solid fa-minus');
// });


