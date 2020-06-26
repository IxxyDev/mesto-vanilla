import Popup from './Popup.js';
import { popupConfig } from '../utils/constants.js';

export default class PopupWithForm extends Popup {
  constructor(popupSelector, { handleFormSubmit, setInputs, resetValidation }) {
    super(popupSelector);
    this._form = this._popup.querySelector(popupConfig.formSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._setInputs = setInputs;
    this._resetValidation = resetValidation;
    this._inputList = this._popup.querySelectorAll(popupConfig.inputSelector);
    this._handleSubmit = (evt) => {
      this._submitFormHandler(evt);
    };
    this._form.addEventListener('submit', this._handleSubmit);
  }

  _getInputValues() {
    this._inputValues = {};
    this._inputList.forEach(
      (input) => (this._inputValues[input.name] = input.value)
    );
    return this._inputValues;
  }

  _submitFormHandler(evt) {
    evt.preventDefault();
    this._handleFormSubmit(this._getInputValues());
  }

  _setEventListeners() {
    super._setEventListeners();
  }

  open() {
    this._resetValidation();
    this._setInputs();
    super.open();
  }

  close() {
    super.close();
    this._form.reset();
  }
}
