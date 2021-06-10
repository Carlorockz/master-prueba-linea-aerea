var nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 10) {
    nav.classList.add('bg-dark');
  } else {
    nav.classList.remove('bg-dark');
  }
});

$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 100, function(){
        window.location.hash = hash;
      });
    }
  });
});