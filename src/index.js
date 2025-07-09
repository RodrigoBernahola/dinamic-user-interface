import './style.css';

console.log('¡Webpack funcionando correctamente!');

const dropdownButton = document.querySelector('.dropdownButton');
const unorderedList = document.querySelector('ul.list');

dropdownButton.addEventListener('click', () => {
  const res = unorderedList.getAttribute('hidden');
  if (res) {
    unorderedList.removeAttribute('hidden');
  } else {
    unorderedList.setAttribute('hidden', 'on');
  }
});

// Seccion del carrusel

const imageOneURL = 'https://picsum.photos/id/237/900/590';
const imageTwoURL = 'https://picsum.photos/id/238/900/590';
const imageThreeURL = 'https://picsum.photos/id/28/900/590';
const imagesList = [imageOneURL, imageTwoURL, imageThreeURL];
const imageContainer = document.querySelector('div.imageContainer img');
let actualImageIndex = 0;
const limit = imagesList.length - 1;
const rightButton = document.querySelector('button.right');
const leftButton = document.querySelector('button.left');

function removeClass() {
  const dotButtons = document.querySelectorAll('.points button');
  dotButtons.forEach((boton) => {
    boton.classList.remove('active');
  });
}

function addClass(index) {
  const element = document.querySelector(`.point[data-index="${index}"]`);
  element.classList.add('active');
}

function setImage(index) {
  removeClass();
  imageContainer.setAttribute('src', imagesList[index]);
  addClass(index);
}

function setNextImage() {
  if (actualImageIndex === limit) {
    actualImageIndex = 0;
    setImage(0);
  } else {
    actualImageIndex++;
  }
  setImage(actualImageIndex);
  resetCarouselTimer();
}

function setPreviousImage() {
  if (actualImageIndex === 0) {
    actualImageIndex = limit;
  } else {
    actualImageIndex--;
  }
  setImage(actualImageIndex);
  resetCarouselTimer();
}

rightButton.addEventListener('click', setNextImage);
leftButton.addEventListener('click', setPreviousImage);
let carouselInterval = setInterval(setNextImage, 5000);
//Cargar imagen por defecto, la primera de la lista
setImage(actualImageIndex);

const dotButtons = document.querySelectorAll('.points button');

function getIndex(boton) {
  actualImageIndex = parseInt(boton.getAttribute('data-index'));
  setImage(actualImageIndex);
}

dotButtons.forEach((boton) => {
  boton.addEventListener('click', () => getIndex(boton));
  resetCarouselTimer();
});



function resetCarouselTimer() {
  clearInterval(carouselInterval);
  carouselInterval = setInterval(setNextImage, 5000);
}
