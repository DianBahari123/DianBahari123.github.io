// toggle icon navbar
// let menuicon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// menuicon.onclick = () => {
//     menuicon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// };

// scrool sections
let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.claasList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });

    // styky navbar 
    let header = document.querySelector('header');

    header.claasList.toggle('sticky' , window.scrollY > 100);

    // remuve toggle icon and navbar when klick navbar link scroll

    menuicon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length)
  {
    slideIndex = 1;
  }
  if (n < 1)
  {
    slideIndex = slides.length
  }
  for (i = 0; i < slides.length; i++)
  {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
};