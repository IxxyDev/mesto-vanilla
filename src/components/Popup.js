export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = (evt) => {
      this._escClose(evt);
    };
    this._handleClickClose = (evt) => {
      this._clickClose(evt);
    };
  }

  _setEventListeners() {
    document.addEventListener('keyup', (evt) => this._handleEscClose(evt));
    this._popup.addEventListener('mousedown', (evt) =>
      this._handleClickClose(evt)
    );
  }

  _removeEventListeners() {
    document.removeEventListener('keyup', (evt) => this._handleEscClose(evt));
    this._popup.removeEventListener('mousedown', (evt) =>
      this._handleClickClose(evt)
    );
  }

  open() {
    this._setEventListeners();
    this._popup.classList.add('popup_is-opened');
  }

  close() {
    this._removeEventListeners();
    this._popup.classList.remove('popup_is-opened');
  }

  _escClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }

  _clickClose(evt) {
    if (
      evt.target.classList.contains('popup_is-opened') ||
      evt.target.classList.contains('popup__close-button')
    ) {
      this.close();
    }
  }
}
