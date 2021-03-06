
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()}

function scrollFunction() {
  //Get the button:
  var mybutton = document.getElementById("myBtn");

  // get percent scrolled
//   var scrollTop = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop;
//   var pctScrolled = Math.floor(scrollTop/trackLength * 100);

//   var pxScrolled = document.body.scrollTop;

  if (document.body.scrollTop > 200) {
    mybutton.style.display = "none";
  } else {
    mybutton.style.display = "block";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

/* MODAL STUFF */

// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "flex";
}
  
// Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == document.getElementById("myModal")) {
        document.getElementById("myModal").style.display = "none";
    }
}

var slideIndex = 1;
    showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}