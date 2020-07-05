import './index.css';

import Card from '../components/Card.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupForDelete from '../components/PopupForDelete.js';
import Api from '../components/Api.js';

import {
  popupConfig,
  validationConfig,
  cardConfig,
  addButton,
  editButton,
  addCardName,
  addCardUrl,
  profileName,
  profileDescription,
  profileConfig,
  editProfilePopup,
  createCardPopup,
  editAvatarPopup,
  changeAvatarForm,
  baseUrl,
  headers,
  avatar,
} from '../utils/constants.js';

//instances
const popupImg = new PopupWithImage(popupConfig.popupZoomedImgSelector);
const userInfo = new UserInfo({
  name: profileConfig.nameSelector,
  description: profileConfig.descriptionSelector,
  avatar: '.profile__avatar',
});
const addCardValidation = new FormValidator(validationConfig, createCardPopup);
const editProfileValidation = new FormValidator(
  validationConfig,
  editProfilePopup
);
const changeAvatarValidation = new FormValidator(
  validationConfig,
  editAvatarPopup
);
const formsValidation = [
  editProfileValidation,
  addCardValidation,
  changeAvatarValidation,
];
const api = new Api({ baseUrl, headers });

//card generation logix
const generateCard = (item) => {
  const newCard = new Card(
    {
      data: item,
      handleCardClick: popupImg.open,
      handleDeleteCard: (item) => {
        deleteCardPopup.open(item);
      },
      handleLikeCard: api.likeCard.bind(api),
    },
    cardConfig.cardSelector,
    userInfo.getUserId()
  );
  return newCard.createCard();
};

//now let instead of const cuz of Api
let cardList = new Section(
  {
    renderer: (card) => {
      cardList.addInitialItem(generateCard(card));
    },
  },
  cardConfig.cardsContainerSelector
);

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([user, cards]) => {
    userInfo.setUserInfo(user);
    cardList.renderCards(cards);
  })
  .catch((error) => console.error(error));

//popups
const deleteCardPopup = new PopupForDelete('.popup_type_delete-card', {
  handleConfirmation: ({ id, deleteCard }) => {
    api.deleteCard(id).catch((error) => console.error(error));
    deleteCard();
    deleteCardPopup.close();
  },
});

const editPopup = new PopupWithForm(popupConfig.popupEditProfileSelector, {
  handleFormSubmit: (user) => {
    editPopup.showLoadingStatus(true);
    api
      .changeUserInfo({
        name: user.name,
        about: user.description,
      })
      .then((res) => {
        userInfo.setUserInfo(res);
        editPopup.close();
      })
      .catch((error) => console.error(error))
      .finally(() => editPopup.showLoadingStatus(false));
  },

  setInputs: () => {
    profileName.value = userInfo.getUsersInfo().name;
    profileDescription.value = userInfo.getUsersInfo().description;
  },

  resetValidation: () => {
    editProfileValidation.clearFormErrors(true);
  },
});

const addCardPopup = new PopupWithForm(popupConfig.popupCreateCardSelector, {
  handleFormSubmit: (item) => {
    addCardPopup.showLoadingStatus(true);
    api
      .addCard(item)
      .then((res) => {
        cardList.addItem(generateCard(res));
        addCardPopup.close();
      })
      .catch((error) => console.error(error))
      .finally(() => addCardPopup.showLoadingStatus(false));
  },

  setInputs: () => {
    addCardName.value = '';
    addCardUrl.value = '';
  },

  resetValidation: () => {
    addCardValidation.clearFormErrors(false);
  },
});

const changeAvatarPopup = new PopupWithForm('.popup_type_avatar-edit', {
  handleFormSubmit: (data) => {
    changeAvatarPopup.showLoadingStatus(true);
    api
      .changeUserAvatar({ avatar: data.link })
      .then((res) => {
        changeAvatarPopup.close();
        userInfo.setUserAvatar(res);
      })
      .catch((error) => console.error(error))
      .finally(() => changeAvatarPopup.showLoadingStatus(true));
  },

  setInputs: () => {
    changeAvatarForm.reset();
  },

  resetValidation: () => {
    changeAvatarValidation.clearFormErrors(false);
  },
});

//enable validation, obviously
formsValidation.forEach((form) => {
  form.enableValidation();
});

// listeners
editButton.addEventListener('click', () => editPopup.open());
addButton.addEventListener('click', () => addCardPopup.open());
avatar.addEventListener('click', () => changeAvatarPopup.open());
