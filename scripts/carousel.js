document.addEventListener('DOMContentLoaded', slideShow);

// ==============================    CITATION    ==============================
//
// All code below is from taken from from W3 Schools at
// https://www.w3schools.com/howto/howto_js_slideshow.asp . I have put comments
// to indicate my understanding of what is happening.

var slideIndex = 0;

var dots = document.getElementsByClassName("dot");
var slides = document.getElementsByClassName("mySlides");

function slideShow() {
  var i;
  
  // All images are there, but only one will be visible.
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  console.log(slideIndex, slides.length)
  
  // Make one image visible, beginning with 0
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  
  // Call slideShow again, but only after 3.5 seconds
  setTimeout(slideShow, 3500);
}


function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Make image 'n' visible manually.  I chose not to terminate the automatic
// carousel, because I thought continuing the animation made a better user
// experience.
function showSlides(n) {
  var j;
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}

  for (j = 0; j < slides.length; j++) {
    slides[j].style.display = "none";
  }
  
  for (j = 0; j < dots.length; j++) {
    dots[j].className = dots[j].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}