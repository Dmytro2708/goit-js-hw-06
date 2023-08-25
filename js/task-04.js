const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const counterValueSpan = document.querySelector('#value');

let counterValue = 0;
decrementButton.addEventListener('click', onClickDec);
incrementButton.addEventListener('click', onClickInc);

function updateCounterValue(evn) {
    counterValueSpan.textContent = counterValue;
  };

function onClickDec(evn) {
    counterValue -= 1;
    updateCounterValue();
};

function onClickInc(evn) {
    counterValue += 1;
    updateCounterValue();
};

