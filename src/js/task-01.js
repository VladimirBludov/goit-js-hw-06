//----- 1 ------//
const categoriesList = document.querySelector('ul#categories');

console.log('Number of categories: ', categoriesList.children.length);

//----- 2 ------//

const categoriesItems = categoriesList.querySelectorAll('li.item');

categoriesItems.forEach(item => {
  console.log('Category: ', item.firstElementChild.textContent);
  console.log('Elements: ', item.lastElementChild.children.length);
});
