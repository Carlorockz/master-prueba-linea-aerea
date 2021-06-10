/*Animación que permite hacer scroll y cambiar el color de background del menu*/
var nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
  if (window.pageYOffset > 10) {
    nav.classList.add('bg-dark');
  } else {
    nav.classList.remove('bg-dark');
  }
});
/*fin*/

/*Animación que permite que ralentizar la transición del click del link de menú a la sección determinada*/
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
/*fin*/