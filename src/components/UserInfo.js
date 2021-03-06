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

  setUserInfo(user) {
    this._setUserId(user);
    this._name.textContent = user.name;
    this._description.textContent = user.about;
    this.setUserAvatar(user);
  }
}
