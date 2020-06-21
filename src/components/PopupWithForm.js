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
  }

  _getInputValues() {
    const [name, description] = this._inputList;
    return [name.value, description.value];
  }

  _setEventListeners() {
    super._setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }

  open() {
    this._resetValidation();
    this._setInputs();
    super.open();
  }

  close() {
    super.close();
    this._popup.querySelector(popupConfig.formSelector).reset();
  }
}
