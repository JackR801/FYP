const spinnerWrapperEl = document.querySelector('.spinner-wrapper');

window.addEventListener('load', () => {
    spinnerWrapperEl.style.opacity = '0';

    setTimeout(() => {
        spinnerWrapperEl.style.display = 'none';
    }, 200);
}), 1000;

const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})

/*

window.addEventListener('scroll', function() {
    var scrolled = window.pageYOffset;
    var parallax = document.querySelector('.parallax');
    var coords = '50% ' + -(scrolled * 0.5) + 'px';
    parallax.style.backgroundPosition = coords;
  });

*/

/*
setTimeout(() => {
    spinnerWrapperEl.style.opacity = '0';
}, 1000);
*/