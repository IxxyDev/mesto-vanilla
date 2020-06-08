import { popupImage, popupFigcaption, popupZoomedImage, openPopup } from './index.js'

export default class Card {
    constructor(title, url, templateSelector) {
        this._title = title;
        this._url = url;
        this._templateSelector = templateSelector;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content.querySelector('.element')
            .cloneNode(true);
        return cardElement;
    }

    generateCard() {
        this._element = this._getTemplate();
        const elementTitle = this._element.querySelector('.element__image');
        const elementImg = this._element.querySelector('.element__title');
        elementTitle.textContent = this._title;
        elementImg.src = this._url;
        elementImg.alt = this._title;

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
        element.querySelector('.element__like-button').removeEventListener('click', toggleLikeStatus);
        element.querySelector('.element__delete-button').removeEventListener('click', deleteCard);
        element.querySelector('.element__image').removeEventListener('click', openZoomedImg);
        element.remove();
    }

    _openZoomedImg (evt) {
        popupZoomedImage.src = evt.target.src;
        popupZoomedImage.alt = evt.target.alt;
        popupFigcaption.textContent = evt.target.alt;
        openPopup(popupImage);
      }
}