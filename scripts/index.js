//Путь с utils.js тянет за собой много логики из index.js. Поэтому просто перенес нужную логику в методо zoomedImg Card.js, чтобы избавится от взаимных импортов"

import Card from './Card.js';
import FormValidator from './FormValidator.js';
/* buttons */
const editButton = document.querySelector('.profile__edit-button');
const closeEditButton = document.querySelector('.popup__close-button_type_edit-profile');
const createCardButton = document.querySelector('.profile__add-button');
const closeCreateCardButton = document.querySelector('.popup__close-button_type_new-card');
const closeZoomedImageButton = document.querySelector('.popup__close-button_type_zoom-image');

/* blocks and templates */
const formEditElement = document.querySelector('.popup__form_type_edit-profile');
const formCreateCardElement = document.querySelector('.popup__form_type_new-card');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const cardsContainer = document.querySelector('.elements');

/* inputs */
const profileNameInput = document.querySelector('.popup__input_type_name');
const profileDescriptionInput = document.querySelector('.popup__input_type_description');
const cardNameInput = document.querySelector('.popup__input_type_card-name');
const cardUrlInput = document.querySelector('.popup__input_type_card-url');

/* popups elements */
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupCreateCard = document.querySelector('.popup_type_add-new-card');

const popupForms = Array.from(document.querySelectorAll('.popup__form'));

/* content */
const validationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

const initialCards = [
  {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  },
];

function clearFormErrors(formElement) {
  const inputList = Array.from(formElement.querySelectorAll(`${validationConfig.inputSelector}`));
    inputList.forEach((inputElement) => {
      inputElement.textContent = '';
  });
  const inputErrorList = Array.from(formElement.querySelectorAll(`${validationConfig.errorClass}`));
  inputErrorList.forEach((errorElement) => {
    errorElement.textContent = '';
  });
}

export function openPopup (popup) {
  addEventListeners();
  popup.classList.add('popup_is-opened');
}

function closePopup (popup) {
  removeEventListeners(popup);
  popup.classList.remove('popup_is-opened')
}

const resetButtonState = (formElement) => {
  const submitButton = formElement.querySelector(validationConfig.submitButtonSelector);
  submitButton.disabled = true;
  submitButton.classList.add(validationConfig.inactiveButtonClass);
}

function addEventListeners () {
  document.addEventListener('mousedown', overlayPressClosePopup);
  document.addEventListener('keydown', escPressClosePopup);
}

function escPressClosePopup (evt) {
  const openedPopup = document.querySelector('.popup_is-opened');
  if (evt.key === 'Escape') {
      closePopup(openedPopup);
  }
}

function overlayPressClosePopup (evt) {
  if (evt.target.classList.contains('popup')) {
    closePopup(evt.target);
  }
}

function removeEventListeners (popup) {
  if (popup.classList.contains('popup_is-opened')) {
    popup.removeEventListener('mousedown', overlayPressClosePopup);
    popup.removeEventListener('keydown', escPressClosePopup);
  }
}

/* cards renedring */
initialCards.forEach((item) => {
  const card = new Card(item, '#card');
	const cardElement = card.createCard();
	cardsContainer.append(cardElement);
})

/* Save data after editing + prep for submission */
function formEditProfileSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value
  profileDescription.textContent = profileDescriptionInput.value;
  closePopup(popupEditProfile);
}

function formCreateCardSubmitHandler (evt) {
  evt.preventDefault();
  const newCard = new Card({
    name: cardNameInput.value,
    link: cardUrlInput.value,
  }, '#card')
  const newCardItem = newCard.createCard();
	cardsContainer.prepend(newCardItem);
  closePopup(popupCreateCard);
}

function handleEditProfileButtonClick() {
  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  clearFormErrors(formEditElement);
  openPopup(popupEditProfile);
}

function handleCreateCardButtonClick() {
  cardNameInput.value = '';
  cardUrlInput.value = '';
  clearFormErrors(formCreateCardElement);
  resetButtonState(formCreateCardElement);
  openPopup(popupCreateCard);
}

const enableValidation = (validationConfig, templateSelector) => {
  const addCardValidation = new FormValidator(validationConfig, templateSelector);
  return addCardValidation.enableValidation();
}

/* listeners */
editButton.addEventListener('click', handleEditProfileButtonClick);
createCardButton.addEventListener('click', handleCreateCardButtonClick);
closeEditButton.addEventListener('click', () => closePopup(popupEditProfile));
closeCreateCardButton.addEventListener('click', () => closePopup(popupCreateCard));
formEditElement.addEventListener('submit', formEditProfileSubmitHandler);
formCreateCardElement.addEventListener('submit', formCreateCardSubmitHandler);
closeZoomedImageButton.addEventListener('click', () => closePopup(popupImage));

popupForms.forEach((popupForm) => {
  enableValidation(validationConfig, popupForm);
})