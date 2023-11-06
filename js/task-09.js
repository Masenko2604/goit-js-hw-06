// Отримання посилань на елементи
const body = document.querySelector('body');
const colorSpan = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// Функція, яка генерує випадковий колір та застосовує його до фону body
function changeBodyColor() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
}

// Додавання обробника події на кнопку
changeColorButton.addEventListener('click', changeBodyColor);