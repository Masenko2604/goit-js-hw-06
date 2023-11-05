const form = document.querySelector('.login-form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const emailInput = form.querySelector('input[name="email"]');
  const passwordInput = form.querySelector('input[name="password"]');

  if (emailInput.value === '' || passwordInput.value === '') {
    alert('Будь ласка, заповніть всі поля');
  } else {
    // Виконується код для відправлення форми
    console.log('Form submitted');
  }
}