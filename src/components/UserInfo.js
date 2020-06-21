export default class UserInfo {
    constructor({ name, description }) {
        this._name = document.querySelector(name);
        this._description = document.querySelector(description);
    }

    getUsersInfo() {
        return this._userInfo = {
            name: this._name.textContent,
            description: this._description.textContent
        }
    }

    setUserInfo(user) {
        this._name.textContent = user.name;
        this._description.textContent = user.description;
    }
}