class FormValidator {
  constructor (formElement, formObject) {
    this._formElement = formElement;
    this._formObject = formObject;
  }

  _showInputError(formElement, inputElement, errorMessage, object) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`); 
    inputElement.classList.add(object.inputErrorClass); 
    errorElement.textContent = errorMessage;
    errorElement.classList.add(object.errorClass);
  }

  // Public, because used outside the class//
  hideInputError(formElement, inputElement, object) {
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(object.inputErrorClass);
    errorElement.classList.remove(object.errorClass);
    errorElement.textContent = '';
  }

  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
    })
  }

// Public, because used outside the class//
  setButtonState(buttonElement, object, isValid) {
    if (isValid === true) {
      buttonElement.classList.remove(object.inactiveButtonClass);
      buttonElement.removeAttribute("disabled");
    }

    if (isValid === false) {
      buttonElement.classList.add(object.inactiveButtonClass);
      buttonElement.setAttribute("disabled", true);
    }
  }

  _toggleButtonState(inputList, buttonElement, object) {
    if (hasInvalidInput(inputList)) {
      this.setButtonState(buttonElement, object, false);
    } else {
      this._setButtonState(buttonElement, object, true);
    }
  }
    
  _checkInputValidity(formElement, inputElement, object) {
    if (!inputElement.validity.valid) { 
      this._showInputError(formElement, inputElement, inputElement.validationMessage, object); 
    } else {
      this.hideInputError(formElement, inputElement, object);
    }
  }
  
  _setEventListeners(formElement, object) {
    const inputList = Array.from(formElement.querySelectorAll(object.inputSelector));
    const buttonElement = formElement.querySelector(object.submitButtonSelector);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(formElement, inputElement, object);
        this._toggleButtonState(inputList, buttonElement, object);
      });
    });
  }
   
  enableValidation() {
    this._setEventListeners(this._formElement, this._formObject);
  }
}

export default FormValidator;