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