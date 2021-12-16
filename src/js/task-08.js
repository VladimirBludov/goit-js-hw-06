// Напиши скрипт управления формой логина.

// 1. Обработка отправки формы form.login-form должна
//    быть по событию submit.
// 2. При отправке формы страница не должна перезагружаться.
// 3. Если в форме есть незаполненные поля, выводи alert
//    с предупреждением о том, что все поля должны быть заполнены.
// 4. Если пользователь заполнил все поля и отправил форму,
//    собери значения полей в объект, где имя поля будет
//    именем свойства, а значение поля - значением свойства.
//    Для доступа к элементам формы используй свойство elements.
// 5. Выведи объект с введенными данными в консоль и
//    очисти значения полей формы методом reset.

const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', event => {
  event.preventDefault();

  const target = event.currentTarget;
  const formData = {};

  if (!target.elements.email.value || !target.elements.password.value) {
    alert('Все поля должны быть заполнены!');
    event.preventDefault();
  } else {
    formData.email = target.elements.email.value;
    formData.password = target.elements.password.value;
    console.log('formData: ', formData);
    target.reset();
  }
});
