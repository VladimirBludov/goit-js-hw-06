// Напиши скрипт, который реагирует на
// изменение значения input#font - size -
// control(событие input) и изменяет инлайн -
// стиль span#text обновляя свойство font - size.
// В результате при перетаскивании ползунка будет
// меняться размер текста.

const refs = {
  inputSize: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'),
};

refs.inputSize.value = 16;
refs.inputSize.style.paddingLeft = 0;
refs.inputSize.style.paddingRight = 0;

refs.inputSize.addEventListener('input', event => {
  refs.text.style.fontSize = event.currentTarget.value + 'px';
});
