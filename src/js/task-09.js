// Напиши скрипт, который изменяет цвета фона
// элемента < body > через инлайн стиль при клике
// на button.change - color и выводит значение цвета в span.color.

const refs = {
  body: document.body,
  btnChangeColor: document.querySelector('.change-color'),
  valueBackgroundColor: document.querySelector('.color'),
};

refs.btnChangeColor.addEventListener('click', event => {
  const randomColor = getRandomHexColor();

  refs.body.style.backgroundColor = randomColor;
  refs.valueBackgroundColor.textContent = randomColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
