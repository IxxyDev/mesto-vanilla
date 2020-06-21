export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeButton = this._popup.querySelector('.popup__close-button');
  }

  _setEventListeners() {
    document.addEventListener('keyup', (evt) => this._handleEscClose(evt), {
      once: true,
    });
    document.addEventListener('click', (evt) => {
      if (
        !evt.target.classList.contains('popup__content') &&
        evt.target.classList.contains('popup_is-opened')
      ) {
        this.close();
      }
    });
    this._closeButton.addEventListener('click', () => this.close(), {
      once: true,
    });
  }

  open() {
    this._setEventListeners();
    this._popup.classList.add('popup_is-opened');
  }

  close() {
    this._popup.classList.remove('popup_is-opened');
  }

  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }
}
