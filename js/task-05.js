const nameInput = document.querySelector('#name-input');
 const nameOutput = document.querySelector('#name-output');

 nameInput.addEventListener('input', onInput)

 function onInput(evn) {
    
 const inputValue = nameInput.value;

 if (inputValue.trim() === '') {
     nameOutput.textContent = 'Anonymous';
   } else {
     nameOutput.textContent = inputValue;
   }
 };

