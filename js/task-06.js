const validationInput = document.querySelector('#validation-input');

validationInput.addEventListener('blur', onBlur);

function onBlur(evn) {
 const expectedLength = parseInt(validationInput.getAttribute('data-length'));
    const inputValue = validationInput.value.trim().length;
  
    if (inputValue === expectedLength) {
      validationInput.classList.remove('invalid');
      validationInput.classList.add('valid');
    } else {
      validationInput.classList.remove('valid');
      validationInput.classList.add('invalid');
    }
};

