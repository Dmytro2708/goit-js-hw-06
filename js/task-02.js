const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector('ul');

const markup = ingredients.map((ingredient) => {
  const li = document.createElement('li');
li.textContent = ingredient;
li.classList.add('item');
return li;
});
ul.append(...markup);

console.dir(ul);


