export default class FormValidator {
  constructor(data, templateSelector) {
    this._templateSelector = templateSelector;
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._templateSelector.querySelector(`#${inputElement.id}-error`); 
    inputElement.classList.add(this._inputErrorClass); 
    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._templateSelector.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    })
  }

  _setButtonState(buttonElement, isValid) {
    if (isValid === false) {
      buttonElement.classList.remove(this._inactiveButtonClass);
      buttonElement.disabled = false;
    }

    if (isValid === true) {
      buttonElement.classList.add(this._inactiveButtonClass);
      buttonElement.disabled = true;
    }
  }

  _toggleButtonState(inputList, buttonElement) {
    this._setButtonState(buttonElement, this._hasInvalidInput(inputList));
  }
    
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) { 
      this._showInputError(inputElement, inputElement.validationMessage); 
    } else {
      this._hideInputError(inputElement);
    }
  }
  
  _setEventListeners() {
    const inputList = Array.from(this._templateSelector.querySelectorAll(this._inputSelector));
    const buttonElement = this._templateSelector.querySelector(this._submitButtonSelector);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState(inputList, buttonElement);
      });
    });
  }
   
  enableValidation() {
    this._setEventListeners();
  }
}