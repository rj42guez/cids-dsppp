const navbar = document.getElementById('navbarMain');

window.addEventListener('scroll', () => {
    if (window.scrollY > 20) { // Adjust this value based on when you want the color to change
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

function mobileNavbar() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  } 

function openNav() {
    document.getElementById("mobileNavbar").style.width = "100%";
  }
  
function closeNav() {
    document.getElementById("mobileNavbar").style.width = "0%";
  }



var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("rWorkshopDay1");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}