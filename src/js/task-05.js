// Напиши скрипт который, при наборе текста
// в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name -
// output.Если инпут пустой, в спане должна
// отображаться строка "Anonymous".

const refs = {
  inputName: document.querySelector('#name-input'),
  outputName: document.querySelector('#name-output'),
};

refs.inputName.addEventListener('input', event => {
  refs.outputName.textContent = event.currentTarget.value;
});
