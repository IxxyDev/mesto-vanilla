const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
const saveButton = document.querySelector('.popup__button');

const profile = document.querySelector('.profile');
const popUp = document.querySelector('.popup');
const formElement = document.querySelector('.popup__form');

const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');

const nameInput = popUp.querySelector('.popup__input_type_name');
const descriptionInput = popUp.querySelector('.popup__input_type_description');

const cardsContainer = document.querySelector('.elements');
const cardTemplate = document.querySelector('#card').content;

const popupFigcaption = document.querySelector('.popup__description');
const popupZoomedImage = document.querySelector('.popup__image');

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
  }
];


function loadCards(cards) {
  return cards.map((card) => addCard(card));
};

function publicCards(cards) {
  cardsContainer.prepend(...cards); 
};

publicCards(loadCards(initialCards));

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
  togglePopup(evt.target);
};

function deleteCard(evt) {
  const element = evt.target.closest('.element');
  element.remove();
};

function toggleLikeStatus(evt) {
  evt.target.classList.toggle('element__like-button_active');
}

/* Open and close popUp */
function editForm () {
    popUp.classList.toggle('popup_is-opened');
    nameInput.value = profileName.textContent;
    descriptionInput.value = profileDescription.textContent;
};
editButton.addEventListener('click', editForm);
closeButton.addEventListener('click', editForm);

 
/* Saving data after editing + prep for submission */

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = descriptionInput.value;
    closeEditForm();
  };
saveButton.addEventListener('click', formSubmitHandler);
formElement.addEventListener('submit', formSubmitHandler);

 
// слушатель открытия формы редактирования профиля
// открываем попап редактирования профиля
editButton.addEventListener('click', (evt) => togglePopup(popUpEdit));

// слушатель открытия формы добавления карточки
addButton.addEventListener('click', (evt) => togglePopup(popUpAdd));

// слушатель закрытия формы редактирования профиля
closeEditFormButton.addEventListener('click', (evt) => togglePopup(popUpEdit));

// слушатель закрытия формы добавления карточки
closeAddFormButton.addEventListener('click', (evt) => togglePopup(popUpAdd));

// слушатель закрытия формы с большим изображением
closeImgFormButton.addEventListener('click', (evt) => togglePopup(popUpImg));

// Прикрепляем обработчик к форме редактирования профиля
formEditElement.addEventListener('submit', formEditSubmitHandler);

// Прикрепляем обработчик к форме добавления карточки
formAddElement.addEventListener('submit', formAddSubmitHandler);

// первоначальная загрузка карточек
