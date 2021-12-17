// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает
// кнопку Создать, после чего рендерится коллекция.При нажатии
// на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Создай функцию createBoxes(amount), которая принимает один параметр -
// число.Функция создает столько < div >, сколько указано в amount и
// добавляет их в div#boxes.

// 1. Размеры самого первого <div> - 30px на 30px.
// 2. Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// 3. Все элементы должны иметь случайный цвет фона в формате HEX. Используй
// готовую функцию getRandomHexColor для получения цвета.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.

const refs = {
  inputQuantity: document.querySelector('#controls > input'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

let upSize = 0;

refs.btnCreate.addEventListener('click', () => {
  const amount = Number(refs.inputQuantity.value);
  refs.boxes.append(...createBoxes(amount));
  refs.inputQuantity.value = '';
});

refs.btnDestroy.addEventListener('click', () => {
  refs.boxes.innerHTML = '';
  refs.inputQuantity.value = '';
  upSize = 0;
});

function createBoxes(amount) {
  const boxesArr = [];

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${30 + upSize}px`;
    box.style.height = `${30 + upSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesArr.push(box);
    upSize += 10;
  }

  return boxesArr;
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
