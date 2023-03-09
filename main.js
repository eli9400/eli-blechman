let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
function openbox(x) {
  console.log(x);
  if (x == 1) {
    let card = document.getElementById("biz");
    card.style.display = "block";
  }
  if (x == 2) {
    let card = document.getElementById("biz1");
    card.style.display = "block";
  }
  if (x == 3) {
    let card = document.getElementById("biz2");
    card.style.display = "block";
  }
  if (x == 4) {
    let card = document.getElementById("biz3");
    card.style.display = "block";
  }
  if (x == 5) {
    let card = document.getElementById("biz4");
    card.style.display = "block";
  }
  if (x == 6) {
    let card = document.getElementById("biz5");
    card.style.display = "block";
  }
  if (x == 7) {
    let card = document.getElementById("biz6");
    card.style.display = "block";
  }
  if (x == 8) {
    let card = document.getElementById("biz7");
    card.style.display = "block";
  }
}
function closebox(x) {
  if (x == 1) {
    let close = document.getElementById("biz");
    close.style.display = "none";
  }
  if (x == 2) {
    let close = document.getElementById("biz1");
    close.style.display = "none";
  }
  if (x == 3) {
    let close = document.getElementById("biz2");
    close.style.display = "none";
  }
  if (x == 4) {
    let close = document.getElementById("biz3");
    close.style.display = "none";
  }
  if (x == 5) {
    let close = document.getElementById("biz4");
    close.style.display = "none";
  }
  if (x == 6) {
    let close = document.getElementById("biz5");
    close.style.display = "none";
  }
  if (x == 7) {
    let close = document.getElementById("biz6");
    close.style.display = "none";
  }
  if (x == 8) {
    let close = document.getElementById("biz7");
    close.style.display = "none";
  }
}
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
function validateForm() {
  let x = document.forms["myfrom"]["first-Name"].value;
  let y = document.forms["myfrom"]["last-name"].value;
  if (x == "" || y == "") {
    return alert("Name must be filled out");
  }

  let z = document.forms["myfrom"]["email"].value;
  const regexmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  console.log(z);
  if (regexmail.test(z)) {
    alert("yor meseg past");
  } else {
    return alert("mail addres fuild");
  }
}
