// Отримання посилань на елементи
const body = document.querySelector('body');
const colorSpan = document.querySelector('.color');
const changeColorButton = document.querySelector('.change-color');

// Функція, яка генерує випадковий колір та застосовує його до фону body
function changeBodyColor() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
}

// Додавання обробника події на кнопку
changeColorButton.addEventListener('click', changeBodyColor);