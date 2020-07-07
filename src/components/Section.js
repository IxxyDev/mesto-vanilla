export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(cardItem) {
    this._container.prepend(cardItem);
  }

  addInitialItem(cardItem) {
    this._container.append(cardItem);
  }

  renderCards(cards) {
    cards.forEach((item) => {
      this._renderer(item);
    });
  }
}
