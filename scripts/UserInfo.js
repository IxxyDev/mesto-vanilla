export default class UserInfo {
    constructor({ name, description }) {
        this._name = document.querySelector(name);
        this._description = document.querySelector(description);
    }

    getUsersInfo() {
        this._userInfo = {};
        this._userInfo.name = this._name.textContent;
        this._userInfo.description = this._description.textContent;
        return this._userInfo;
    }

    setUserInfo(userInfo) {
        this._name.textContent = userInfo.name;
        this._description.textContent = userInfo.description;
    }
}