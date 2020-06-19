import Popup from './Popup.js';
import { popupConfig, validationConfig } from '../utils/constants.js';

//Реализацию с fillInputs (для двух разных экземпляров класса/форм) подсказали в slack((
export default class PopupWithForm extends Popup {
    constructor(popupSelector, { handleFormSubmit, fillInputs }) {
        super(popupSelector);
        this._fillInputs = fillInputs;
        this._handleFormSubmit = handleFormSubmit;
    }

    _clearFormErrors() {
        this._inputList = this._popupSelector.querySelectorAll(validationConfig.inputSelector);
        this._inputErrorList = this._popupSelector.querySelectorAll(validationConfig.errorSelector);
        inputList.forEach((input) => {
            input.classList.remove(validationConfig.errorClass);
        });
        inputErrorList.forEach((errorElement) => {
          errorElement.textContent = '';
        });
      }

    _resetButtonState() {
        this._submitButton = this._popupSelector.querySelector(popupConfig.submitButtonSelector);
        this._submitButton.disabled = true;
        this._submitButton.classList.add(validationConfig.inactiveButtonClass);
    }

    _getInputValues() {
        this._inputValues = {};
        this._inputList.forEach((input) => {
            this._inputValues[input.name] = input.value;
            return this._inputValues;
        })
    }

    open() {
        this._resetButtonState();
        this._fillInputs();
        super.open();
    }

    close() {
        this._popupSelector.querySelector(popupConfig.formSelector).reset();
        super.close();
    }
}