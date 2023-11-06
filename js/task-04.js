
// Отримуємо елементи кнопок та лічильника
const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="increment"]');
const valueSpan = document.querySelector('#value');

let currentValue = 0;
// Додаємо слухача до кнопки, яка зменшує значення лічильника
decrementButton.addEventListener('click', () => {
 
  valueSpan.textContent = currentValue -= 1;
});

// Додаємо слухача до кнопки, яка збільшує значення лічильника
incrementButton.addEventListener('click', () => {
 
  valueSpan.textContent = currentValue += 1;
});
