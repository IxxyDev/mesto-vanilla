import Popup from './Popup.js';

export default class PopupForDelete extends popup {
  constructor(popupSelector, { handleConfirmation }) {
    super(popupSelector), (this._handleConfirmation = handleConfirmation);
    this._form = this._popup.querySelector('.popup__form');
  }

  _setEventListeners() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleConfirmation({
        id: this._id,
        deleteCard: this._deleteCard,
      });
    });
    super._setEventListeners();
  }

  open(data) {
    (this._id = data._id), (this._deleteCard = data.deleteCard), super.open();
  }
}
