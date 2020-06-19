//Распространил логику конфига на все элементы страницы. Вероятно, понадобится в будущем

export const popupConfig = {
    popupSelector: '.popup',
    formSelector: '.popup__form',
    popupEditProfileSelector: '.popup_type_edit-profile',
    popupCreateCardSelector: '.popup_type_add-new-card',
    popupZoomedImgSelector: '.popup_type_zoom-image',
    popupImgSelector: '.popup__zoom-image',
    popupFigcaptionSelector: '.popup__description',
    inputNameSelector: '.popup__input_type_name',
    inputDescriptionSelector: '.popup__input_type_description',
    submitButtonSelector: '.popup__button'
};

export const cardConfig = {
    cardSelector: '#card',
    cardsContainerSelector: '.elements',
    cardElementSelector: '.element',
    cardDeleteSelector: '.element__delete-button',
    cardLikeSelector: '.element__like-button',
    cardImgSelector: '.element__image',
    cardTitleSelector: '.element__title'
};

export const validationConfig = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    errorSelector: '.popup__input-error_active',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
};

export const profileConfig = {
    nameSelector: '.profile__name',
    descriptionSelector: '.profile__description',
    editButtonSelector: '.profile__edit-button',
    addButtonSelector: '.profile__add-button',
}

export const editProfilePopup = document.querySelector(popupConfig.popupEditProfileSelector);
export const createCardPopup = document.querySelector(popupConfig.popupCreateCardSelector);

export const profileName = editProfilePopup.querySelector(popupConfig.inputNameSelector);
export const profileDescription = editProfilePopup.querySelector(popupConfig.inputDescriptionSelector);
export const editButton = editProfilePopup.querySelector(popupConfig.submitButtonSelector);
export const addCardName = createCardPopup.querySelector(popupConfig.inputNameSelector);
export const addCardUrl = createCardPopup.querySelector(popupConfig.inputDescriptionSelector);
export const addButton = createCardPopup.querySelector(popupConfig.submitButtonSelector);
export const popupForms = Array.from(document.querySelectorAll(popupConfig.formSelector));

export const initialCards = [
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