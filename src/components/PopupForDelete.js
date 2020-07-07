// тут prettier и husky шалили

import Popup from './Popup.js';

export default class PopupForDelete extends Popup {
  constructor(popupSelector, { handleConfirmation }) {
    super(popupSelector);
    this._handleConfirmation = handleConfirmation;
  }

  _setEventListeners() {
    super._setEventListeners();
    this._form = this._popup.querySelector('.popup__form');
    console.log(this._form);
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleConfirmation({
        id: this._id,
        deleteCard: this._deleteCard,
      });
    });
  }

  open(data) {
    this._id = data.id;
    this._deleteCard = data.deleteCard;
    super.open();
  }
}
