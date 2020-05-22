const allForms = [{
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
}];

const showInputError = (formElement, inputElement, errorMessage, inputErrorClass, errorClass) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`); 
    inputElement.classList.add(inputErrorClass); 
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
  };

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
    })
  };
  
const toggleButtonState = (inputList, buttonElement, inactiveButtonClass) => {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(inactiveButtonClass);
      buttonElement.classList.remove(inactiveButtonClass);
    }
  }
  
 
  const hideInputError = (formElement, inputElement, inputErrorClass, errorClass) => {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(inputErrorClass);
    errorElement.classList.remove(errorClass);
    errorElement.textContent = '';
};
  
const checkInputValidity = (formElement, inputElement, inputErrorClass, errorClass) => {
    if (!inputElement.validity.valid) { //если у инпута состояние валидности ложно
      showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass); //вызываем описанную ранее функцию отображения ошибки с тремя параметрам пар1 форма, пар2 инпут, пар3 сообщение валидации
    } else {
      hideInputError(formElement, inputElement, inputErrorClass, errorClass); //иначе вызываем функцию убирающую сообщение об ошибке
    }
};
  
const setEventListeners = (formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);
    toggleButtonState(inputList, buttonElement, inactiveButtonClass);
  
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        toggleButtonState(inputList, buttonElement, inactiveButtonClass);
        checkInputValidity(formElement, inputElement, inputErrorClass, errorClass);
      });
    });
};
 
const refreshButtonState = (formElement, inputSelector, submitButtonSelector, inactiveButtonClass) => {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector));
    const buttonElement = formElement.querySelector(submitButtonSelector);
    toggleButtonState(inputList, buttonElement, inactiveButtonClass);
};
  
const enableValidation = ({ formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass }) => {
    const formList = Array.from(document.querySelectorAll(formSelector));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
      setEventListeners(formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass);
  
    });
};

allForms.forEach(item => enableValidation(item));