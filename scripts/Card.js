export default class Card {
    constructor(item, templateSelector) {
        this._link = item.link;
        this._name = item.name;
        this._templateSelector = templateSelector;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content.querySelector('.element')
            .cloneNode(true);
        this._element = cardElement;
    }

    createCard() {
        this._getTemplate();
        const elementTitle = this._element.querySelector('.element__title');
        const elementImg = this._element.querySelector('.element__image');
        elementTitle.textContent = this._name;
        elementImg.src = this._link;
        elementImg.alt = this._name;

        const likeButton = this._element.querySelector('.element__like-button');
        const deleteButton = this._element.querySelector('.element__delete-button');
        deleteButton.addEventListener('click', this._deleteCard);
        likeButton.addEventListener('click', this._toggleLikeStatus);
        elementImg.addEventListener('click', this._openZoomedImg);
        return this._element;
    }

    _toggleLikeStatus(evt) {
        evt.target.classList.toggle('element__like-button_active');
    }

    _deleteCard (evt) {
        const element = evt.target.closest('.element');
        element.querySelector('.element__like-button').removeEventListener('click', this._toggleLikeStatus);
        element.querySelector('.element__delete-button').removeEventListener('click', this._deleteCard);
        element.querySelector('.element__image').removeEventListener('click', this._openZoomedImg);
        element.remove();
    }

    _openZoomedImg (evt) {
        const popupImage = document.querySelector('.popup_type_zoom-image');
        const popupFigcaption = document.querySelector('.popup__description');
        const popupZoomedImage = document.querySelector('.popup__zoom-image');
        popupZoomedImage.src = evt.target.src;
        popupZoomedImage.alt = evt.target.alt;
        popupFigcaption.textContent = evt.target.alt;
        popupImage.classList.add('popup_is-opened');
      }
}