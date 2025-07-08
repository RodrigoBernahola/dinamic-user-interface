import './style.css';

console.log('¡Webpack funcionando correctamente!');

// Ejemplo de código JavaScript
const app = document.getElementById('app');
if (app) {
  const button = document.createElement('button');
  button.textContent = 'Haz clic aquí';
  button.addEventListener('click', () => {
    alert('¡El template funciona perfectamente!');
  });
  app.appendChild(button);
}

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
