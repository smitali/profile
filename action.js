var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


// When the user scrolls down 20px from the top of the document, show the button

window.addEventListener('scroll', scrollFunction)

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// portfolio - section

function filterSelection(c, target) {
  var items, i;
  items = document.getElementsByClassName("item");

  for (i = 0; i < items.length; i++) {
    if (c === 'all') {
      items[i].style.display = 'inline-block';
    } else {
      if (items[i].classList.contains(c)) {
        items[i].style.display = 'inline-block';
      } else {
        items[i].style.display = 'none';
      }
    }
  }
  activateTab('.type', target);
}

function activateTab(elem, target) {
  var allElem = document.querySelectorAll(elem);
  for (var i = 0; i < allElem.length; i++) {
    allElem[i].classList.remove('active');
  }
  target.classList.add('active');
}

// portfolio-section(check)

filterSelection("all", document.querySelectorAll('.type')[0]);

// sticky page-nav-space-holder

window.addEventListener('scroll', myFunction);

var pagenav = document.querySelector('.page-nav-space-holder');
var sticky = pagenav.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    pagenav.classList.add("sticky");
  } else {
    pagenav.classList.remove("sticky");
  }
}

// Used to toggle the menu on small screens when clicking on the menu button

function toggleFunction(event, elem) {
  event.preventDefault();
  var scrollElement = document.querySelector(elem.getAttribute('href'));
  var elemPos = scrollElement.offsetTop;
  window.scrollTo(0, elemPos - 60);
  activateTab('.page-nav .nav-item .scrollto', elem);
}


function renderSkillPercentage() {
  var skillsElement = document.querySelectorAll('.chart-theme');
  for (var el = 0; el < skillsElement.length; el++) {
    var percentage = skillsElement[el].getAttribute('data-percent');
    radialIndicator(skillsElement[el], {
      barColor: '#00BCD4',
      barWidth: 5,
      initValue: percentage,
      percentage: true,
      fontColor: '#565454',
      fontWeight: 80,
      fontSize: 16
    });
  }
}

renderSkillPercentage();