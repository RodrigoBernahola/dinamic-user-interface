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
