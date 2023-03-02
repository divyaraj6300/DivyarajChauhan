function myDropbtn(){
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event){
    if(!event.target.matches('.dropbtn')){
        let dropdwns = document.getElementsByClassName("dropdown-content");
        let i;
        for(i = 0; i < dropdwns.length; i++){
            let openDropdown = dropdwns[i];
            if(openDropdown.classList.contains('show'))
            {
                openDropdown.classList.remove('show');
            }
        }
    }
}


// Adding Hamburger
const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');
const menu_items = document.querySelectorAll('nav .mainMenu li a');




openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

// close menu when you click on a menu item 
menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}


// Sticky navbar 
window.onscroll = function() {myStickynav()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myStickynav() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

// Modal 
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// Slider
// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }



function myFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
      } else {
          li[i].style.display = "none";
      }
  }
}






function validateForm(){
  let email = document.forms["myForm"]["email"].value;
  let contact = document.forms["myForm"]["contacid"].value;
  let subject = document.forms["myForm"]["subject"].value;
  if(email==""){
      alert("Name must be filled out");
      // x.setCustomValidity("Its not be an empty");
      return false;
  }
  else if(contact==""){
      alert("Enter Contact");
      return false;
  }
  else if(subject == ""){
      alert("Khuchh Likhte v jaao");
      return false;
  }
}



function openMember(evt, memberName){
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for(i = 0; i < tabcontent.length; i++)
  {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for(i = 0; i < tablinks.length; i++)
  {
      tablinks[i].className = tablinks[i].className.replace("active", "");
  }
  document.getElementById(memberName).style.display = "block";
  evt.currentTarget.className += "active";
}
document.getElementById("default").click();
// document.getElementById("LilyWalker").style.display = "none";
// document.getElementById("MarkPierce").style.display = "none";
// document.getElementById("Aari Aadana").style.display = "none";


function openModal1() {
  document.getElementById("myModall").style.display = "block";
}

function closeModall() {
  document.getElementById("myModall").style.display = "none";
}

var slideIndex1 = 1;
showSlides(slideIndex1);

function plusSlidess(n) {
  showSlidess(slideIndex1 += n);
}

function currentSlidee(n) {
  showSlidess(slideIndex1 = n);
}

function showSlidess(n) {
  var i;
  var slidess = document.getElementsByClassName("mySlidess");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slidess.length) {slideIndex1 = 1}
  if (n < 1) {slideIndex1 = slidess.length}
  for (i = 0; i < slidess.length; i++) {
      slidess[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slidess[slideIndex1-1].style.display = "block";
  dots[slideIndex1-1].className += " active";
  captionText.innerHTML = dots[slideIndex1-1].alt;
}

// Back to top



// const carousel = document.querySelector(".carousel"),
// firstImg = carousel.querySelectorAll("img")[0],
// arrowIcons = document.querySelectorAll(".wrapper i");

// let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

// const showHideIcons = () => {
//     // showing and hiding prev/next icon according to carousel scroll left value
//     let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
//     arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
//     arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
// }

// arrowIcons.forEach(icon => {
//     icon.addEventListener("click", () => {
//         let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
//         // if clicked icon is left, reduce width value from the carousel scroll left else add to it
//         carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth; // Here using Ternary Operator...
//         setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
//     });
// });

// const autoSlide = () => {
//     // if there is no image left to scroll then return from here
//     if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

//     positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
//     let firstImgWidth = firstImg.clientWidth + 14;
//     // getting difference value that needs to add or reduce from carousel left to take middle img center
//     let valDifference = firstImgWidth - positionDiff;

//     if(carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
//         return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
//     }
//     // if user is scrolling to the left
//     carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
// }

// const dragStart = (e) => {
//     // updatating global variables value on mouse down event
//     isDragStart = true;
//     prevPageX = e.pageX || e.touches[0].pageX;
//     prevScrollLeft = carousel.scrollLeft;
// }

// const dragging = (e) => {
//     // scrolling images/carousel to left according to mouse pointer
//     if(!isDragStart) return;
//     e.preventDefault();
//     isDragging = true;
//     carousel.classList.add("dragging");
//     positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
//     carousel.scrollLeft = prevScrollLeft - positionDiff;
//     showHideIcons();
// }

// const dragStop = () => {
//     isDragStart = false;
//     carousel.classList.remove("dragging");

//     if(!isDragging) return;
//     isDragging = false;
//     autoSlide();
// }

// carousel.addEventListener("mousedown", dragStart);
// carousel.addEventListener("touchstart", dragStart);

// document.addEventListener("mousemove", dragging);
// carousel.addEventListener("touchmove", dragging);

// document.addEventListener("mouseup", dragStop);
// carousel.addEventListener("touchend", dragStop);









  function openForm() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtnn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }

  const body = document.body,
  scrollDiv = document.getElementsByClassName("container")[0],
  height = scrollDiv.getBoundingClientRect().height - 1,
  speed = 0.4;

  var offset = 0;
  body.style.height = Math.floor(height) + "px";
  function smoothScroll(){
    offset += (window.pageYOffset - offset)*speed;
    var scroll = "translateY(-" + offset + ")transalteZ(0)";
    scrollDiv.style.tranform = scroll;
    callscroll = requestAnimationFrame(smoothScroll);
    smoothScroll();
  }




//   let mybutton = document.getElementById("btn-back-to-top");

// window.onscroll = function () {
//     scrollFunction();
//     // toggleIconTheme();
//   };
  
//   function scrollFunction() {
//     if (
//       document.body.scrollTop > 20 ||
//       document.documentElement.scrollTop > 20
//     ) {
//       mybutton.style.display = "block";
//     } else {
//       mybutton.style.display = "none";
//     }
//   }
//   // When the user clicks on the button, scroll to the top of the document
//   mybutton.addEventListener("click", backToTop);
  
//   function backToTop() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
//   }
  
//   window.addEventListener(
//     "scroll",
//     () => {
//       document.body.style.setProperty(
//         "--scroll",
//         window.pageYOffset / (document.body.offsetHeight - window.innerHeight)
//       );
//     },
//     false
//   );




// var slideIndex = 0;
// var slides = document.querySelectorAll(".fig1");
// slides[slideIndex].style.display = "block";
// setInterval(function (){
//   slides[slideIndex].style.display = "none";
//   slideIndex = (slideIndex + 1) % slides.length;
//   slides[slideIndex].style.display = "block";
// }, 6000);


