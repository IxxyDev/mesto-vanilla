export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(cardItem) {
    this._container.prepend(cardItem);
  }

  addInitialItem(cardItem) {
    this._container.append(cardItem);
  }

  renderCards(data = false) {
    if (data) {
      this._renderer(data);
    } else {
      this._renderedItems.forEach((item) => {
        this._renderer(item);
      });
    }
  }
}
