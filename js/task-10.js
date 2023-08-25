function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controlsDiv = document.querySelector('#controls');
const inputElement = controlsDiv.querySelector('input');
const createButton = controlsDiv.querySelector('[data-create]');
const destroyButton = controlsDiv.querySelector('[data-destroy]');
const boxesDiv = document.querySelector('#boxes');

createButton.addEventListener('click', () => {
  const amount = inputElement.value;
  createBoxes(amount);
});

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const divElement = document.createElement('div');
    const size = 30 + i * 10;
    divElement.style.width = size + 'px';
    divElement.style.height = size + 'px';
    divElement.style.backgroundColor = getRandomHexColor();
    boxesDiv.appendChild(divElement);
  }
}

destroyButton.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxesDiv.innerHTML = '';
}