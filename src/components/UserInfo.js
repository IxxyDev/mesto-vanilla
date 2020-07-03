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

  setUserId(user) {
    this._userId = data.id;
  }

  setUserAvatar(user) {
    this._avatar.src = user.avatar;
  }

  setUserInfo(user) {
    this._name.textContent = user.name;
    this._description.textContent = user.description;
    this.setUserId(user);
    this.setUserAvatar(user);
  }
}
