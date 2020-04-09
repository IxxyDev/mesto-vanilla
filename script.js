const editButton = document.querySelector('.profile__edit-button');
const closeButton = document.querySelector('.popup__close-button');
const saveButton = document.querySelector('.popup__button');
const profile = document.querySelector('.profile');
const popUp = document.querySelector('.popup');

/* Open and close popUp */
function openEditForm () {
    popUp.classList.toggle('popup_status_is-opened');
    popUp.classList.toggle('popup_status_is-closed');
};
editButton.addEventListener('click', openEditForm);

function closeEditForm () {
    popUp.classList.toggle('popup_status_is-opened');
    popUp.classList.toggle('popup_status_is-closed');
};
closeButton.addEventListener('click', closeEditForm);

 
/* Saving data after editing + prep for submission */
const formElement = document.querySelector('.popup__form');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const nameInput = popUp.querySelector('.popup__input_type_name');
const descriptionInput = popUp.querySelector('.popup__input_type_description');

function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileDescription.textContent = descriptionInput.value;
    closeEditForm();
  };
saveButton.addEventListener('click', formSubmitHandler);
formElement.addEventListener('submit', formSubmitHandler);