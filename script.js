const slider = document.getElementById('slider');
const slides = slider.children;
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
let index = 0;

function updateSlides() {
  for (let i = 0; i < slides.length; i++) {
    const offset = i - index;
    if (offset === 0) {
      slides[i].style.transform = 'translateX(0) scale(1.2) rotateY(0deg)';
      slides[i].style.zIndex = 2;
      slides[i].style.opacity = 1;
    } else if (offset === -1) {
      slides[i].style.transform = 'translateX(-50%) scale(0.8) rotateY(30deg)';
      slides[i].style.zIndex = 1;
      slides[i].style.opacity = 0.7;
    } else if (offset === 1) {
      slides[i].style.transform = 'translateX(50%) scale(0.8) rotateY(-30deg)';
      slides[i].style.zIndex = 1;
      slides[i].style.opacity = 0.7;
    } else {
      slides[i].style.transform = 'translateX(0) scale(0.5)';
      slides[i].style.opacity = 0;
      slides[i].style.zIndex = 0;
    }
  }
}

nextBtn.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  updateSlides();
});

prevBtn.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  updateSlides();
});

updateSlides();


