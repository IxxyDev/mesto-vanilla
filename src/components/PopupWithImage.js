import Popup from './Popup.js';
import { popupConfig } from '../utils/constants.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImg = this._popup.querySelector(popupConfig.popupImgSelector);
    this._popupFigcaption = this._popup.querySelector(
      popupConfig.popupFigcaptionSelector
    );
  }

  open(data) {
    this._popupImg.src = data.link;
    this._popupImg.alt = data.name;
    this._popupFigcaption.textContent = data.name;
    super.open();
  }
}
