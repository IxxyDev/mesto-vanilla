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
const allPopups = document.querySelectorAll('.popup');
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
      hideImputError(formElement, inputElement, inputErrorClass, errorClass);
  });
}

/* Open and close popup */
function togglePopup (popup) {
  popup.classList.toggle('popup_is-opened');
  toggleEventListeners(popup);
};

function toggleEventListeners(popup) {
  if (popup.classList.contains('popup_is-opened')) {
      document.addEventListener('click', isPopupOpened);
      document.addEventListener('keydown', isPopupOpened);
  } else {
      document.removeEventListener('click', isPopupOpened);
      document.removeEventListener('keydown', isPopupOpened);
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
  cardElement.querySelector('.element__image').addEventListener('click', openZoomedImg);
  return cardElement;
};

function closePopup(evt, formElement) {
  if ((evt.target.classList.contains('popup')) || (evt.key === 'Escape')) {
      togglePopup(formElement);
  }
};

function isPopupOpened(evt) {
  const openedPopup = document.querySelector('.popup_is-opened');
  closePopup(evt, openedPopup);
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
  checkImputBeforFormOpening(inputListEdit, formEditElement);
  toggleButtonState(inputListEdit, saveButton, allForms);
};

function formCreateCardSubmitHandler (evt) {
  evt.preventDefault();
  const newCard = createCard({
    name: cardNameInput.value,
    link: cardUrlInput.value,
  })
  renderCards([newCard]);
  togglePopup(popupCreateCard);
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