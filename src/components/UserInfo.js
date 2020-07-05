export default class UserInfo {
  constructor({ name, description, avatar }) {
    this._name = document.querySelector(name);
    this._description = document.querySelector(description);
    this._avatar = document.querySelector(avatar);
  }

  getUsersInfo() {
    return {
      name: this._name.textContent,
      description: this._description.textContent,
    };
  }

  getUserId() {
    return this._userId;
  }

  _setUserId(user) {
    this._userId = user._id;
  }

  setUserAvatar(user) {
    this._avatar.src = user.avatar;
  }

  setUserInfo(data) {
    this._setUserId(data);
    this._name.textContent = data.name;
    this._description.textContent = data.about;
    this.setUserAvatar(data);
  }
}
