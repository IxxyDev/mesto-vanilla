export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  addItem(cardItem, prepend) {
    if (prepend) {
      this._container.prepend(cardItem);
    } else {
      this._container.append(cardItem);
    }
  }

  renderCards() {
    console.log(typeof this._renderedItems);
    this._renderedItems.forEach((item) => {
      this._renderer(item);
    });
  }
}
