export default class Popup {
    constructor(popupSelector) {
        this._popupSelector = document.querySelector(popupSelector);
    }

    close() {
        //removeEventListeners(this._popupSelector);//
        this._popupSelector.classList.remove('popup_is-opened');
     } 
    
    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    _handleClickClose(evt) {
        if (evt.target.classList.contains('popup__close-button')) {
            this.close();
        }
    }

    setEventListeners() {
        this._popupSelector.addEventListener('click', (evt) => {this._handleClickClose(evt)});
        this._popupSelector.addEventListener('keyup', (evt) => {this._handleEscClose(evt)});
    }

    open() {
        this.setEventListeners()
        this._popupSelector.classList.add('popup_is-opened');
      }
}