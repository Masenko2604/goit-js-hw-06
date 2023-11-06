const form = document.querySelector('.login-form');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {email, password} = event.currentTarget.elements

  if (email.value === '' || password.value === '') {
    alert('Будь ласка, заповніть всі поля');
  } else {
    // Виконується код для відправлення форми
    console.log({ email: email.value, password: password.value });
    form.reset();
  }
}