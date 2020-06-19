import Popup from './Popup.js';
import { popupConfig } from '../utils/constants.js';

export default class PopupWithImage extends Popup {
  constructor(data, popupSelector) {
    super(popupSelector);
    this._src = data.link;
    this._alt = data.name;
  }

  open() {
    this._popupSelector.querySelector(popupConfig.popupImgSelector).src = this._src;
    this._popupSelector.querySelector(popupConfig.popupImgSelector).alt = this._alt;
    this._popupSelector.querySelector(popupConfig.popupFigcaptionSelector).textContent = this._alt;
    super.open();
  }
}