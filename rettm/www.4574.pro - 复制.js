var mainUrl = 'https://cdn.jsdelivr.net/gh/s01o/sitesg';

document.getElementById('videoSrc').src = `${mainUrl}/rettm/head1.mp4`;
document.getElementById('imgOverlay').src = `${mainUrl}/rettm/head1.png`;
document.getElementById('btnImage').src = `${mainUrl}/btn18.png`;
document.getElementById('btn2Image').src = `${mainUrl}/btn19.png`;

function btnHover(isHover) {
  document.getElementById('btnImage').src = `${mainUrl}/btn18${isHover ? 'a' : ''}.png`;
}
function btn2Hover(isHover) {
  document.getElementById('btn2Image').src = `${mainUrl}/btn19${isHover ? 'a' : ''}.png`;
}

document.getElementById('slide1').src = `${mainUrl}/rettm/hd01.png`;
document.getElementById('slide2').src = `${mainUrl}/rettm/hd02.png`; 
document.getElementById('slide3').src = `${mainUrl}/rettm/hd03.png`;
document.getElementById('slide4').src = `${mainUrl}/rettm/hd04.png`;

var swiper = new Swiper(".swiper", {
  effect: 'fade',
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  on: {
    init: function () {
      animateProgressBar();
    },
    slideChangeTransitionStart: function () {
      animateProgressBar();
    },
  },
});

function animateProgressBar() {
  var progressBars = document.querySelectorAll('.swiper-progress-bar');
  progressBars.forEach(function (progressBar) {
    progressBar.style.width = '0';
    progressBar.style.transition = 'none';
  });
  setTimeout(function () {
    progressBars.forEach(function (progressBar) {
      progressBar.style.width = '100%';
      progressBar.style.transition = 'width 5s linear';
    });
  }, 50);
}

document.getElementsByClassName('swiper-background')[0].style.backgroundImage = `url(${mainUrl}/hdt1.png)`;
document.getElementsByClassName('swiper-button-next')[0].style.backgroundImage = `url(${mainUrl}/hdbr.png)`; 
document.getElementsByClassName('swiper-button-prev')[0].style.backgroundImage = `url(${mainUrl}/hdbl.png)`;