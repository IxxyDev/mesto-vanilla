/*Мне тоже показалось странным помещение husky и prettier в dependencies (работали в Nuxt.js для РакЛечится, ментор
подключал именно так)*/

import './index.css';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm';
import PopupWithImage from '../components/PopupWithImage';

import {
  popupConfig,
  validationConfig,
  cardConfig,
  initialCards,
  addButton,
  editButton,
  addCardName,
  addCardUrl,
  profileName,
  profileDescription,
  profileConfig,
  editProfilePopup,
  createCardPopup,
} from '../utils/constants.js';

//instances
const popupImg = new PopupWithImage(popupConfig.popupZoomedImgSelector);
const userInfo = new UserInfo({
  name: profileConfig.nameSelector,
  description: profileConfig.descriptionSelector,
});
const addCardValidation = new FormValidator(validationConfig, createCardPopup);
const editProfileValidiation = new FormValidator(
  validationConfig,
  editProfilePopup
);
const formsValidation = [editProfileValidiation, addCardValidation];

//card generation logix
const generateCard = (item) => {
  const newCard = new Card(
    {
      data: item,
      handleCardClick: popupImg.open,
    },
    cardConfig.cardSelector
  );
  return newCard.createCard();
};

const cardList = new Section(
  {
    items: initialCards,
    renderer: (card) => {
      cardList.addInitialItem(generateCard(card));
    },
  },
  cardConfig.cardsContainerSelector
);

cardList.renderCards();

//popups
const editPopup = new PopupWithForm(popupConfig.popupEditProfileSelector, {
  handleFormSubmit: (info) => {
    userInfo.setUserInfo(info);
    editPopup.close();
  },

  setInputs: () => {
    profileName.value = userInfo.getUsersInfo().name;
    profileDescription.value = userInfo.getUsersInfo().description;
  },

  resetValidation: () => {
    editProfileValidiation.clearFormErrors(true);
  },
});

const addCardPopup = new PopupWithForm(popupConfig.popupCreateCardSelector, {
  handleFormSubmit: ([name, link]) => {
    const cardSection = new Section(
      {
        items: [{ name, link }], //array because of forEach fucntion in Section
        renderer: (item) => {
          cardSection.addItem(generateCard(item));
        },
      },
      cardConfig.cardsContainerSelector
    );
    cardSection.renderCards();
    addCardPopup.close();
  },

  setInputs: () => {
    addCardName.value = '';
    addCardUrl.value = '';
  },

  resetValidation: () => {
    addCardValidation.clearFormErrors(false);
  },
});

//enable validation, obviously
formsValidation.forEach((form) => {
  form.enableValidation();
});

// listeners
editButton.addEventListener('click', () => editPopup.open());
addButton.addEventListener('click', () => addCardPopup.open());
