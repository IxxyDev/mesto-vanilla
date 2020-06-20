import { cardConfig } from '../utils/constants.js';

export default class Card {
    constructor({ data, handleCardClick }, templateSelector) {
        this._data = data;
        this._link = data.link;
        this._name = data.name;
        this._handleCardClick = handleCardClick;
        this._templateSelector = templateSelector;
    }

    _getTemplate() {
        const cardElement = document
            .querySelector(this._templateSelector)
            .content.querySelector('.element')
            .cloneNode(true);
        return cardElement;
    }

    _toggleLikeStatus() {
        this._element.querySelector(cardConfig.cardLikeSelector).classList.toggle('element__like-button_active');
    }

    _deleteCard() {
        this._element.closest('.element').remove();
    }

    _setEventlisteners() {
        this._element.querySelector(cardConfig.cardDeleteSelector).addEventListener('click', () => this._deleteCard());
        this._element.querySelector(cardConfig.cardLikeSelector).addEventListener('click', () => this._toggleLikeStatus());
        this._element.querySelector(cardConfig.cardImgSelector).addEventListener('click', () => this._handleCardClick(this._data));
    }

    createCard() {
        this._element = this._getTemplate();
        this._setEventlisteners();
        this._element.querySelector(cardConfig.cardImgSelector).src = this._link;
        this._element.querySelector(cardConfig.cardImgSelector).alt = this._name;
        this._element.querySelector(cardConfig.cardTitleSelector).textContent = this._name;
        return this._element;
    }
}