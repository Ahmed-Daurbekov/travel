const slideNumberAll = document.querySelector('.slide-number_all')

document.querySelector('input[type=submit]').addEventListener('click', e => {
  e.preventDefault()
})

document.addEventListener('DOMContentLoaded', e => {
  slideNumberAll.innerHTML = document.querySelectorAll('.slide').length
})


const slides = document.querySelector('.slides');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let slideIndex = 0;
const slideWidth = slides.clientWidth;
const slideNumberCurrent = document.querySelector('.slide-number_current')

prevButton.addEventListener('click', () => {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.childElementCount - 1;
    slideNumberCurrent.innerHTML = slideIndex + 1
  }
  slideNumberCurrent.innerHTML = slideIndex + 1
  updateSlidePosition();
});

nextButton.addEventListener('click', () => {
  slideIndex++;
  if (slideIndex >= slides.childElementCount) {
    slideIndex = 0;
    slideNumberCurrent.innerHTML = slideIndex + 1
  }
  slideNumberCurrent.innerHTML = slideIndex + 1
  updateSlidePosition();
});

function updateSlidePosition() {
  slides.style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}
// burger-menu
const burgerMenu = document.querySelector('.burger-menu')
const header_navBlock = document.querySelector('.header_nav-block')

burgerMenu.addEventListener('click', e => {
  document.body.classList.toggle('hide')
  burgerMenu.classList.toggle('active')
  header_navBlock.classList.toggle('active')
})
// modal
const modal = document.querySelector('.modal')
const appointment = document.querySelector('.appointment')
const closeModal = document.querySelector('.close')

appointment.addEventListener('click', () => {
  modal.classList.add('active')
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  });
  document.body.classList.add('hide')
})

closeModal.addEventListener('click', () => {
  modal.classList.remove('active')
  document.body.classList.remove('hide')
})