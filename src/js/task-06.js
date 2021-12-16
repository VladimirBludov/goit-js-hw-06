// Напиши скрипт, который при потере фокуса
// на инпуте(событие blur), проверяет его
// содержимое на правильное количество введённых символов.

// Сколько символов должно быть в инпуте, указывается
// в его атрибуте data - length.
// Если введено подходящее количество символов, то
// border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы
// valid и invalid, которые мы уже добавили в исходные файлы задания.

const inputValidationEl = document.querySelector('#validation-input');

inputValidationEl.addEventListener('blur', event => {
  const inputLength = event.currentTarget.value.length;
  const inputValidationLength = Number(event.currentTarget.dataset.length);

  if (inputLength === inputValidationLength) {
    if (!isClassValue('valid', event)) {
      event.currentTarget.classList.add('valid');
    }
    if (isClassValue('invalid', event)) {
      event.currentTarget.classList.remove('invalid');
    }
  } else {
    if (!isClassValue('invalid', event)) {
      event.currentTarget.classList.add('invalid');
    }
    if (isClassValue('valid', event)) {
      event.currentTarget.classList.remove('valid');
    }
  }
});

function isClassValue(className, event) {
  return event.currentTarget.classList.contains(className);
}
