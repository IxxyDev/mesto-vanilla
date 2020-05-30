const formObject = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
};

const showInputError = (formElement, inputElement, errorMessage, object) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`); 
    inputElement.classList.add(object.inputErrorClass); 
    errorElement.textContent = errorMessage;
    errorElement.classList.add(object.errorClass);
};

const hideInputError = (formElement, inputElement, object) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(object.inputErrorClass);
    errorElement.classList.remove(object.errorClass);
    errorElement.textContent = '';
};

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
    })
};

const setButtonState = (buttonElement, object, boolean) => {
  if (boolean === true) {
    buttonElement.classList.remove(object.inactiveButtonClass);
    buttonElement.removeAttribute("disabled");
  }

  if (boolean === false) {
    buttonElement.classList.add(object.inactiveButtonClass);
    buttonElement.setAttribute("disabled", true);
  }
};

const toggleButtonState = (inputList, buttonElement, object) => {
    if (hasInvalidInput(inputList)) {
      setButtonState(buttonElement, object, false);
    } else {
      setButtonState(buttonElement, object, true);
    }
};
    
const checkInputValidity = (formElement, inputElement, object) => {
    if (!inputElement.validity.valid) { 
      showInputError(formElement, inputElement, inputElement.validationMessage, object); 
    } else {
      hideInputError(formElement, inputElement, object);
    }
};
  
const setEventListeners = (formElement, object) => {
    const inputList = Array.from(formElement.querySelectorAll(object.inputSelector));
    const buttonElement = formElement.querySelector(object.submitButtonSelector);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        checkInputValidity(formElement, inputElement, object);
        toggleButtonState(inputList, buttonElement, object);
      });
    });
};
   
const enableValidation = (object) => {
    const formList = Array.from(document.querySelectorAll(object.formSelector));
    formList.forEach((formElement) => {
      setEventListeners(formElement, formObject);
    });
};

enableValidation(formObject);