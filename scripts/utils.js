export const popupImage = document.querySelector('.popup_type_zoom-image');
export const popupFigcaption = document.querySelector('.popup__description');
export const popupZoomedImage = document.querySelector('.popup__zoom-image');

function addEventListeners () {
    document.addEventListener('mousedown', overlayPressClosePopup);
    document.addEventListener('keydown', escPressClosePopup);
  }

function removeEventListeners (popup) {
    if (popup.classList.contains('popup_is-opened')) {
      popup.removeEventListener('mousedown', overlayPressClosePopup);
      popup.removeEventListener('keydown', escPressClosePopup);
    }
  }

export function escPressClosePopup (evt) {
    const openedPopup = document.querySelector('.popup_is-opened');
    if (evt.key === 'Escape') {
        closePopup(openedPopup);
    }
  }
  
export function overlayPressClosePopup (evt) {
    if (evt.target.classList.contains('popup')) {
      closePopup(evt.target);
    }
  }

export function openPopup (popup) {
    addEventListeners(popup);
    popup.classList.add('popup_is-opened');
  }

export function closePopup (popup) {
    removeEventListeners(popup);
    popup.classList.remove('popup_is-opened');
  }
