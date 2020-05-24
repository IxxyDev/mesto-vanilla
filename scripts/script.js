/* Алексей, благодарю за ваше ревью! К сожалению, ввиду нехватки времени не успел исправить ваше замечание по разбиению логики togglePopup и toggleEventListeners. Все остальное поправил. Должен был предположить, что сроки проверки на границе дедлайна могут увеличиться...
Понимание, почему это нужно и как это реализовать – есть. Обязуюсь (если пройду дальше) отрефакторить эту часть кода к следующему спринту. 


/* buttons */
const editButton = document.querySelector('.profile__edit-button');
const closeEditButton = document.querySelector('.popup__close-button_type_edit-profile');
const createCardButton = document.querySelector('.profile__add-button');
const saveButton = document.querySelector('.popup__button');
const closeCreateCardButton = document.querySelector('.popup__close-button_type_new-card');
const closeZoomedImageButton = document.querySelector('.popup__close-button_type_zoom-image');

/* blocks and templates */
const formEditElement = document.querySelector('.popup__form_type_edit-profile');
const formCreateCardElement = document.querySelector('.popup__form_type_new-card');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const cardsContainer = document.querySelector('.elements');
const cardTemplate = document.querySelector('#card').content;

/* inputs */
const profileNameInput = document.querySelector('.popup__input_type_name');
const profileDescriptionInput = document.querySelector('.popup__input_type_description');
const cardNameInput = document.querySelector('.popup__input_type_card-name');
const cardUrlInput = document.querySelector('.popup__input_type_card-url');

/* popups elements */
const popupImage = document.querySelector('.popup_type_zoom-image')
const popupFigcaption = document.querySelector('.popup__description');
const popupZoomedImage = document.querySelector('.popup__zoom-image');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupCreateCard = document.querySelector('.popup_type_add-new-card');

/* input arrays */
const inputListEdit = Array.from(formEditElement.querySelectorAll('.popup__text'));
const inputListCreateCard = Array.from(formCreateCardElement.querySelectorAll('.popup__text'));
/* content */
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

function checkInput(inputList, formElement) {
  inputList.forEach((inputElement) => {
      hideError(formElement, inputElement, formObject);
  });
}

/* Open and close popup */
function togglePopup (popup) {
  if ((popup.classList.contains('popup_type_edit-profile')) && (!popup.classList.contains('popup_is-opened'))) {
    checkInput(inputListEdit, formEditElement);
    toggleButtonState(inputListEdit, saveButton, formObject);
  }
  if ((popup.classList.contains('popup_type_add-new-card')) && (!popup.classList.contains('popup_is-opened'))) {
    checkInput(inputListCreateCard, formCreateCardElement);
    toggleButtonState(inputListCreateCard, createCardButton, formObject);
  }
  toggleEventListeners(popup);
  popup.classList.toggle('popup_is-opened');
};

function toggleEventListeners(popup) {
  if (!popup.classList.contains('popup_is-opened')) {
      document.addEventListener('mousedown', overlayPressClosePopup);
      document.addEventListener('keydown', escPressClosePopup);
  } else {
      document.removeEventListener('mousedown', overlayPressClosePopup);
      document.removeEventListener('keydown', escPressClosePopup);
  }
};

function toggleLikeStatus(evt) {
  evt.target.classList.toggle('element__like-button_active');
};

function openZoomedImg(evt) {
  popupZoomedImage.src = evt.target.src;
  popupZoomedImage.alt = evt.target.alt;
  popupFigcaption.textContent = evt.target.alt;
  togglePopup(popupImage);
};

function deleteCard(evt) {
  const element = evt.target.closest('.element');
  element.querySelector('.element__like-button').removeEventListener('click', toggleLikeStatus);
  element.querySelector('.element__delete-button').removeEventListener('click', deleteCard);
  element.querySelector('.element__image').removeEventListener('click', openZoomedImg);
  element.remove();
};

/* main app logix */
function createCard(item) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardElementImg = cardElement.querySelector('.element__image');
  cardElementImg.src = item.link;
  cardElementImg.alt = item.name;
  cardElement.querySelector('.element__title').textContent = item.name;
  cardElement.querySelector('.element__like-button').addEventListener('click', toggleLikeStatus);
  cardElement.querySelector('.element__delete-button').addEventListener('click', deleteCard);
  cardElementImg.addEventListener('click', openZoomedImg);
  return cardElement;
};

function escPressClosePopup(evt) {
  const openedPopup = document.querySelector('.popup_is-opened');
  if ((evt.target.classList.contains('popup')) || (evt.key === 'Escape')) {
      togglePopup(openedPopup);
  }
};

const overlayPressClosePopup = (evt) => {
  if (evt.target.classList.contains('popup')) {
    const popup = evt.target.closest('.popup');
    togglePopup(popup);
  }
};

function isPopupOpened(evt) {
  const openedPopup = document.querySelector('.popup_is-opened');
  escPressClosePopup(evt, openedPopup);
};

/* cards renedring */
function loadCards(cards) {
  return cards.map((card) => createCard(card));
};

function renderCards(cards) {
  cardsContainer.prepend(...cards); 
};

renderCards(loadCards(initialCards));

/* Save data after editing + prep for submission */
function formEditProfileSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value
  profileDescription.textContent = profileDescriptionInput.value;
  togglePopup(popupEditProfile);
  toggleButtonState(inputListEdit, saveButton, formObject);
};

function formCreateCardSubmitHandler (evt) {
  evt.preventDefault();
  const newCard = createCard({
    name: cardNameInput.value,
    link: cardUrlInput.value,
  })
  renderCards([newCard]);
  togglePopup(popupCreateCard);
  toggleButtonState(inputListCreateCard, createCardButton, formObject);
};

function handleEditProfileButtonClick() {
  profileNameInput.value = profileName.textContent;
  profileDescriptionInput.value = profileDescription.textContent;
  togglePopup(popupEditProfile);
};

function handleCreateCardButtonClick() {
  cardNameInput.value = '';
  cardUrlInput.value = '';
  togglePopup(popupCreateCard);
};

/* listeners */
editButton.addEventListener('click', handleEditProfileButtonClick);
createCardButton.addEventListener('click', handleCreateCardButtonClick);
closeEditButton.addEventListener('click', (evt) => togglePopup(popupEditProfile));
closeCreateCardButton.addEventListener('click', (evt) => togglePopup(popupCreateCard));
formEditElement.addEventListener('submit', formEditProfileSubmitHandler);
formCreateCardElement.addEventListener('submit', formCreateCardSubmitHandler);
closeZoomedImageButton.addEventListener('click', (evt) => togglePopup(popupImage)); 