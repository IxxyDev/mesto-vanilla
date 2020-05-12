/* buttons */
const editButton = document.querySelector('.profile__edit-button');
const closeEditButton = document.querySelector('.popup__close-button_type_edit-profile');
const addCardButton = document.querySelector('.profile__add-button');
const closeAddCardButton = document.querySelector('.popup__close-button_type_new-card');
const closeZoomedImageButton = document.querySelector('.popup__close-button_type_zoom-image');

/* blocks and templates */
const profile = document.querySelector('.profile');
const formEditElement = document.querySelector('.popup__form_type_edit-profile');
const formAddCardElement = document.querySelector('.popup__form_type_new-card');
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
const popUp = document.querySelector('.popup');
const popupImage = document.querySelector('.popup_type_zoom-image')
const popupFigcaption = document.querySelector('.popup__description');
const popupZoomedImage = document.querySelector('.popup__zoom-image');
const popupEditProfile = document.querySelector('.popup_type_edit-profile');
const popupAddCard = document.querySelector('.popup_type_add-new-card');

/* content */
const newCard = [{}];
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

function loadCards(cards) {
  return cards.map((card) => addCard(card));
};

function renderCards(cards) {
  cardsContainer.prepend(...cards); 
};

renderCards(loadCards(initialCards));


function addCard(item) {
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

function toggleLikeStatus(evt) {
  evt.target.classList.toggle('element__like-button_active');
}

/* Open and close popUp */
function togglePopup (popup) {
  if ((popup.classList.contains('popup_type_edit-profile') && !popup.classList.contains('popup_is-opened'))) {
    profileNameInput.value = profileName.textContent;
    profileDescriptionInput.value = profileDescription.textContent;
  } if ((popup.classList.contains('popup_type_add-new-card') && !popup.classList.contains('popup_is-opened'))) {
    cardNameInput.value = '';
    cardUrlInput.value = '';
  }
  popup.classList.toggle('popup_is-opened');
}


/* Saving data after editing + prep for submission */

function formEditProfileSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value
  profileDescriptionInput.value = profileDescription.textContent;
  profileDescription.textContent = profileDescriptionInput.value;
  togglePopup(popupEditProfile);
};

function formAddCardSubmitHandler (evt) {
    evt.preventDefault();
    const newCard = addCard({
      name: cardNameInput.value,
      link: cardUrlInput.value,
   })
    renderCards([newCard]);
    togglePopup(popupAddCard);
};


editButton.addEventListener('click', (evt) => togglePopup(popupEditProfile));
closeEditButton.addEventListener('click', (evt) => togglePopup(popupEditProfile));
addCardButton.addEventListener('click', (evt) => togglePopup(popupAddCard));
closeAddCardButton.addEventListener('click', (evt) => togglePopup(popupAddCard));
formEditElement.addEventListener('submit', formEditProfileSubmitHandler);
formAddCardElement.addEventListener('submit', formAddCardSubmitHandler);
closeZoomedImageButton.addEventListener('click', (evt) => togglePopup(popupImage)); 