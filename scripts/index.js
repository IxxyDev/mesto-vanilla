import Card from './Card.js';
import FormValidator from './FormValidator.js';
import Section from './Section.js';
import UserInfo from './UserInfo.js';
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';

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
  popupForms,
  profileConfig
} from '../utils/constants.js';

const enableValidation = (validationConfig, templateSelector) => {
  const validator = new FormValidator(validationConfig, templateSelector);
  return validator.enableValidation();
}

popupForms.forEach((popupForm) => {
  enableValidation(validationConfig, popupForm);
})

const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card({
      item,
      handleCardClick: (evt) => {
        const popupImg = new PopupWithImage(item, popupConfig.popupZoomedImgSelector);
        popupImg.open(evt);
        }, 
      }, cardConfig.cardSelector);
        const cardElement = card.createCard();
        cardList.addItem(cardElement);
    },
  }, cardConfig.cardsContainerSelector
);

cardList.renderCards();

const addCardPopup = new PopupWithForm(popupConfig.popupCreateCardSelector, {
  handleFormSubmit: (cardItem) => {
    const cardSection = new Section({
      items: cardItem,
      renderer: (item) => {
        const card = new Card({
          item,
          handleCardClick: (evt) => {
            const popupImg = new PopupWithImage(item, popupConfig.popupZoomedImgSelector);
            popupImg.open(evt);
          },
        }, cardConfig.cardSelector);
        const cardElement = card.createCard();
        cardSection.addItem(cardElement);
      },
    }, cardConfig.cardsContainerSelector);
    cardSection.renderCards();
    addCardPopup.close();
  },

  fillInputs: () => {
    addCardName.value = '';
    addCardUrl.value = '';
  },
});

const editPopup = new PopupWithForm(popupConfig.popupEditProfileSelector, {
  handleFormSubmit: (info) => {
    userInfo.setUserInfo(info);
    editPopup.close();
  },

  fillInputs: () => {
    profileName.value = userInfo.getUsersInfo().name;
    profileDescription.value = userInfo.getUsersInfo().description;
  }
});

const userInfo = new UserInfo ({
  name: profileConfig.nameSelector,
  description: profileConfig.descriptionSelector
});

// listeners
editButton.addEventListener('click', editPopup.open());
addButton.addEventListener('click', addCardPopup.open());