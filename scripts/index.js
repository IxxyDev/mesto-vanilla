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
  profileConfig,
  editProfilePopup,
  createCardPopup
} from '../utils/constants.js';

//instances
const popupImg = new PopupWithImage(popupConfig.popupZoomedImgSelector);
const userInfo = new UserInfo({
  name: profileConfig.nameSelector,
  description: profileConfig.descriptionSelector
});
const addCardValidation = new FormValidator(validationConfig, createCardPopup);
const editProfileValdiation = new FormValidator(validationConfig, editProfilePopup);
const formsValidation = [editProfileValdiation, addCardValidation];


//card generation logix
const generateCard = (item) => {
  const newCard = new Card({
    data: item,
    handleCardClick: popupImg.open.bind(popupImg),
  }, cardConfig.cardSelector);
  return newCard.createCard();
}

const cardList = new Section({
  items: initialCards,
  renderer: (card) => {
    cardList.addItem(generateCard(card));
  },
}, cardConfig.cardsContainerSelector,
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
    editProfileValdiation.clearFormErrors(true);
  },
});

const addCardPopup = new PopupWithForm(popupConfig.popupCreateCardSelector, {
  handleFormSubmit: (card) => {
    const cardSection = new Section({
      items: [card], //array because of forEach fucntion in Section
      renderer: (item) => {
        cardSection.addItem(generateCard(item), true);
        }, 
      }, cardConfig.cardsContainerSelector);
      console.log(cardSection);
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


//enable validation, obviously)
formsValidation.forEach((form) => {
  form.enableValidation();
});

// listeners
editButton.addEventListener('click', () => editPopup.open());
addButton.addEventListener('click', () => addCardPopup.open());