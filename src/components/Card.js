import { cardConfig } from '../utils/constants.js';

export default class Card {
  constructor(
    { data, handleCardClick, handleDeleteCard, handleLikeCard },
    templateSelector,
    userId
  ) {
    this._data = data;
    this._userId = userId;
    this._cardId = data._id;
    this._myId = data.owner._id;
    this._likes = data.likes;
    this._link = data.link;
    this._name = data.name;
    this._handleCardClick = handleCardClick;
    this._handleDeleteCard = handleDeleteCard;
    this._handleLikeCard = handleLikeCard;
    this._templateSelector = templateSelector;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector('.element')
      .cloneNode(true);
    return cardElement;
  }

  _initializeCardAttributes() {
    this._deleteCardBtn = this._element.querySelector(
      '.element__delete-button'
    );
    this._likeCardBtn = this._element.querySelector('.element__like-button');
    this._likesCounter = this._element.querySelector('.element__like-counter');
    this._cardTitle = this._element.querySelector('.element__title');
    this._cardImg = this._element.querySelector('.element__image');
  }

  _toggleLikeStatus() {
    this._handleLikeCard(
      this._cardId,
      this._likes.some((item) => item._id === this._userId)
    )
      .then((res) => {
        this._likeCardBtn.classList.toggle('element__like-button_active');
        this._likes = res.likes;
        this._likesCounter.textContent = this._likes.length;
      })
      .catch((error) => console.error(error));
  }

  _getLikesAmount() {
    this._likesCounter.textContent = this._likes.length;
  }

  _setUserLike() {
    if (this._likes.some((item) => item._id === this._userId)) {
      this._likeCardBtn.classList.add('element__like-button_active');
    }
  }

  _setDelete() {
    if (this._myId !== this._userId) {
      this._deleteCardBtn.remove();
      this._deleteCardBtn = null;
    }
  }

  _deleteCard() {
    this._element.closest('.element').remove();
  }

  _setEventListeners() {
    this._deleteCardBtn.addEventListener('click', () =>
      this._handleDeleteCard({
        id: this._cardId,
        deleteCard: this._deleteCard.bind(this),
      })
    );
    this._element
      .querySelector(cardConfig.cardLikeSelector)
      .addEventListener('click', () => this._toggleLikeStatus());
    this._element
      .querySelector(cardConfig.cardImgSelector)
      .addEventListener('click', () => this._handleCardClick(this._data));
  }

  createCard() {
    this._element = this._getTemplate();
    this._initializeCardAttributes();
    this._setEventListeners();
    this._setUserLike();
    this._getLikesAmount();
    this._setDelete();
    this._element.querySelector(cardConfig.cardImgSelector).src = this._link;
    this._element.querySelector(cardConfig.cardImgSelector).alt = this._name;
    this._element.querySelector(cardConfig.cardTitleSelector).textContent =
      this._name;
    return this._element;
  }
}
