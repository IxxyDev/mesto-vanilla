!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);n(0);var r=".popup__form",o=".popup_type_edit-profile",i=".popup_type_add-new-card",u=".popup_type_zoom-image",a=".popup__zoom-image",s=".popup__description",c=".popup__input",l=".popup__input_type_name",f=".popup__input_type_description",p="#card",h=".elements",_=".element__like-button",d=".element__image",y=".element__title",v={formSelector:".popup__form",inputSelector:".popup__input",errorSelector:".popup__input-error_active",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},m=".profile__name",b=".profile__description",k=".profile__edit-button",S=".profile__add-button",g=document.querySelector(o),C=document.querySelector(i),w=document.querySelector(".popup_type_avatar-edit"),E=document.querySelector(k),O=document.querySelector(S),L=(Array.from(document.querySelectorAll(r)),g.querySelector(l)),I=g.querySelector(f),j=document.querySelector(l),P=C.querySelector(f),q=document.querySelector(".profile__avatar-background"),R=w.querySelector(".popup__form");function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var B=function(){function e(t,n,r){var o=t.data,i=t.handleCardClick,u=t.handleDeleteCard,a=t.handleLikeCard;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._data=o,this._userId=r,this._cardId=o._id,this._myId=o.owner._id,this._likes=o.likes,this._link=o.link,this._name=o.name,this._handleCardClick=i,this._handleDeleteCard=u,this._handleLikeCard=a,this._templateSelector=n}var t,n,r;return t=e,(n=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".element").cloneNode(!0)}},{key:"_initializeCardAttributes",value:function(){this._deleteCardBtn=this._element.querySelector(".element__delete-button"),this._likeCardBtn=this._element.querySelector(".element__like-button"),this._likesCounter=this._element.querySelector(".element__like-counter"),this._cardTitle=this._element.querySelector(".element__title"),this._cardImg=this._element.querySelector(".element__image")}},{key:"_toggleLikeStatus",value:function(){var e=this;this._handleLikeCard(this._cardId,this._likes.some((function(t){return t._id===e._userId}))).then((function(t){e._likeCardBtn.classList.toggle("element__like-button_active"),e._likes=t.likes,e._likesCounter.textContent=e._likes.length})).catch((function(e){return console.error(e)}))}},{key:"_getLikesAmount",value:function(){this._likesCounter.textContent=this._likes.length}},{key:"_setUserLike",value:function(){var e=this;this._likes.some((function(t){return t._id===e._userId}))&&this._likeCardBtn.classList.add("element__like-button_active")}},{key:"_setDelete",value:function(){this._myId!==this._userId&&(this._deleteCardBtn.remove(),this._deleteCardBtn=null)}},{key:"_deleteCard",value:function(){this._element.closest(".element").remove()}},{key:"_setEventListeners",value:function(){var e=this;this._deleteCardBtn.addEventListener("click",(function(){return e._handleDeleteCard({id:e._cardId,deleteCard:e._deleteCard.bind(e)})})),this._element.querySelector(_).addEventListener("click",(function(){return e._toggleLikeStatus()})),this._element.querySelector(d).addEventListener("click",(function(){return e._handleCardClick(e._data)}))}},{key:"createCard",value:function(){return this._element=this._getTemplate(),this._initializeCardAttributes(),this._setEventListeners(),this._setUserLike(),this._getLikesAmount(),this._setDelete(),this._element.querySelector(d).src=this._link,this._element.querySelector(d).alt=this._name,this._element.querySelector(y).textContent=this._name,this._element}}])&&U(t.prototype,n),r&&U(t,r),e}();function T(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var x=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._templateSelector=n,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._submitButton=this._templateSelector.querySelector(this._submitButtonSelector),this._inputList=Array.from(this._templateSelector.querySelectorAll(this._inputSelector))}var t,n,r;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._templateSelector.querySelector("#".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._templateSelector.querySelector("#".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_setButtonState",value:function(e){!0===e&&(this._submitButton.classList.remove(this._inactiveButtonClass),this._submitButton.disabled=!1),!1===e&&(this._submitButton.classList.add(this._inactiveButtonClass),this._submitButton.disabled=!0)}},{key:"_toggleButtonState",value:function(){this._setButtonState(!this._hasInvalidInput())}},{key:"_checkInputValidity",value:function(e){e.validity.valid?this._hideInputError(e):this._showInputError(e,e.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState()}))}))}},{key:"clearFormErrors",value:function(e){var t=this;this._inputList.forEach((function(e){t._hideInputError(e)})),e?this._setButtonState(!0):this._setButtonState(!1)}},{key:"enableValidation",value:function(){this._setEventListeners()}}])&&T(t.prototype,n),r&&T(t,r),e}();function A(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var D=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n,r;return t=e,(n=[{key:"addItem",value:function(e){this._container.prepend(e)}},{key:"addInitialItem",value:function(e){this._container.append(e)}},{key:"renderCards",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}}])&&A(t.prototype,n),r&&A(t,r),e}();function V(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var F=function(){function e(t){var n=t.name,r=t.description,o=t.avatar;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._description=document.querySelector(r),this._avatar=document.querySelector(o)}var t,n,r;return t=e,(n=[{key:"getUsersInfo",value:function(){return{name:this._name.textContent,description:this._description.textContent}}},{key:"getUserId",value:function(){return this._userId}},{key:"_setUserId",value:function(e){this._userId=e._id}},{key:"setUserAvatar",value:function(e){this._avatar.src=e.avatar}},{key:"setUserInfo",value:function(e){this._setUserId(e),this._name.textContent=e.name,this._description.textContent=e.about,this.setUserAvatar(e)}}])&&V(t.prototype,n),r&&V(t,r),e}();function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var z=function(){function e(t){var n=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=function(e){n._escClose(e)},this._handleClickClose=function(e){n._clickClose(e)},this._popup.addEventListener("mousedown",this._handleClickClose)}var t,n,r;return t=e,(n=[{key:"_setEventListeners",value:function(){document.addEventListener("keyup",this._handleEscClose)}},{key:"_removeEventListeners",value:function(){document.removeEventListener("keyup",this._handleEscClose)}},{key:"open",value:function(){this._setEventListeners(),this._popup.classList.add("popup_is-opened")}},{key:"close",value:function(){this._removeEventListeners(),this._popup.classList.remove("popup_is-opened")}},{key:"_escClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"_clickClose",value:function(e){(e.target.classList.contains("popup_is-opened")||e.target.classList.contains("popup__close-button"))&&this.close()}}])&&M(t.prototype,n),r&&M(t,r),e}();function H(e){return(H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function J(e,t,n){return(J="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Q(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function $(e,t){return($=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function G(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Q(e);if(t){var o=Q(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return K(this,n)}}function K(e,t){return!t||"object"!==H(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Q(e){return(Q=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var W=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&$(e,t)}(u,e);var t,n,o,i=G(u);function u(e,t){var n,o=t.handleFormSubmit,a=t.setInputs,s=t.resetValidation;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._form=n._popup.querySelector(r),n._handleFormSubmit=o,n._setInputs=a,n._resetValidation=s,n._inputList=n._popup.querySelectorAll(c),n._submitBtn=n._popup.querySelector(".popup__button"),n._submitBtnText=n._submitBtn.textContent,n._handleSubmit=function(e){n._submitFormHandler(e)},n._form.addEventListener("submit",n._handleSubmit),n}return t=u,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputValues={},this._inputList.forEach((function(t){return e._inputValues[t.name]=t.value})),this._inputValues}},{key:"_submitFormHandler",value:function(e){e.preventDefault(),this._handleFormSubmit(this._getInputValues())}},{key:"showLoadingStatus",value:function(e){this._submitBtn.textContent=e?"Сохранение...":this._submitBtnText}},{key:"_setEventListeners",value:function(){J(Q(u.prototype),"_setEventListeners",this).call(this)}},{key:"open",value:function(){this._resetValidation(),this._setInputs(),J(Q(u.prototype),"open",this).call(this)}},{key:"close",value:function(){J(Q(u.prototype),"close",this).call(this),this._form.reset()}}])&&N(t.prototype,n),o&&N(t,o),u}(z);function X(e){return(X="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Z(e,t,n){return(Z="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=oe(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function ee(e,t){return(ee=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function te(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=oe(e);if(t){var o=oe(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return ne(this,n)}}function ne(e,t){return!t||"object"!==X(t)&&"function"!=typeof t?re(e):t}function re(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function oe(e){return(oe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var ie=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ee(e,t)}(i,e);var t,n,r,o=te(i);function i(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(t=o.call(this,e))._popupImg=t._popup.querySelector(a),t._popupFigcaption=t._popup.querySelector(s),t.open=t.open.bind(re(t)),t}return t=i,(n=[{key:"open",value:function(e){this._popupImg.src=e.link,this._popupImg.alt=e.name,this._popupFigcaption.textContent=e.name,Z(oe(i.prototype),"open",this).call(this)}}])&&Y(t.prototype,n),r&&Y(t,r),i}(z);function ue(e){return(ue="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ae(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function se(e,t,n){return(se="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=pe(e)););return e}(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(n):o.value}})(e,t,n||e)}function ce(e,t){return(ce=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function le(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=pe(e);if(t){var o=pe(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return fe(this,n)}}function fe(e,t){return!t||"object"!==ue(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function pe(e){return(pe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var he=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ce(e,t)}(i,e);var t,n,r,o=le(i);function i(e,t){var n,r=t.handleConfirmation;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(n=o.call(this,e))._handleConfirmation=r,n}return t=i,(n=[{key:"_setEventListeners",value:function(){var e=this;se(pe(i.prototype),"_setEventListeners",this).call(this),this._form=this._popup.querySelector(".popup__form"),console.log(this._form),this._form.addEventListener("submit",(function(t){t.preventDefault(),e._handleConfirmation({id:e._id,deleteCard:e._deleteCard})}))}},{key:"open",value:function(e){this._id=e.id,this._deleteCard=e.deleteCard,se(pe(i.prototype),"open",this).call(this)}}])&&ae(t.prototype,n),r&&ae(t,r),i}(z);function _e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var de=function(){function e(t){var n=t.baseUrl,r=t.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=n,this._headers=r}var t,n,r;return t=e,(n=[{key:"_returnResponse",value:function(e){return e.ok?e.json():Promise.reject("Произошла ошибка: ".concat(e.status))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._baseUrl,"cards"),{headers:this._headers}).then(this._returnResponse)}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._baseUrl,"users/me"),{headers:this._headers}).then(this._returnResponse).then((function(t){return e.mainId=t._id,t}))}},{key:"changeUserInfo",value:function(e){return fetch("".concat(this._baseUrl,"users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._returnResponse)}},{key:"changeUserAvatar",value:function(e){return fetch("".concat(this._baseUrl,"users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(e)}).then(this._returnResponse)}},{key:"addCard",value:function(e){return fetch("".concat(this._baseUrl,"cards"),{method:"POST",headers:this._headers,body:JSON.stringify(e)}).then(this._returnResponse)}},{key:"likeCard",value:function(e,t){var n;return n=t?"DELETE":"PUT",fetch("".concat(this._baseUrl,"cards/likes/").concat(e),{method:n,headers:this._headers}).then(this._returnResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this._baseUrl,"cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._returnResponse)}}])&&_e(t.prototype,n),r&&_e(t,r),e}();function ye(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var u,a=e[Symbol.iterator]();!(r=(u=a.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==a.return||a.return()}finally{if(o)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return ve(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ve(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ve(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var me=new ie(u),be=new F({name:m,description:b,avatar:".profile__avatar"}),ke=new x(v,C),Se=new x(v,g),ge=new x(v,w),Ce=[Se,ke,ge],we=new de({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-12/",headers:{authorization:"d6770652-b28e-4007-834e-116536b370da","Content-Type":"application/json"}}),Ee=function(e){return new B({data:e,handleCardClick:me.open,handleDeleteCard:function(e){Le.open(e)},handleLikeCard:function(e,t){return we.likeCard(e,t)}},p,be.getUserId()).createCard()},Oe=new D({renderer:function(e){Oe.addInitialItem(Ee(e))}},h);Promise.all([we.getUserInfo(),we.getInitialCards()]).then((function(e){var t=ye(e,2),n=t[0],r=t[1];be.setUserInfo(n),Oe.renderCards(r)})).catch((function(e){return console.error(e)}));var Le=new he(".popup_type_delete-card",{handleConfirmation:function(e){var t=e.id,n=e.deleteCard;we.deleteCard(t).catch((function(e){return console.error(e)})),n(),Le.close()}}),Ie=new W(o,{handleFormSubmit:function(e){Ie.showLoadingStatus(!0),we.changeUserInfo({name:e.name,about:e.description}).then((function(e){be.setUserInfo(e),Ie.close()})).catch((function(e){return console.error(e)})).finally((function(){return Ie.showLoadingStatus(!1)}))},setInputs:function(){L.value=be.getUsersInfo().name,I.value=be.getUsersInfo().description},resetValidation:function(){Se.clearFormErrors(!0)}}),je=new W(i,{handleFormSubmit:function(e){je.showLoadingStatus(!0),we.addCard(e).then((function(e){Oe.addItem(Ee(e)),je.close()})).catch((function(e){return console.error(e)})).finally((function(){return je.showLoadingStatus(!1)}))},setInputs:function(){j.value="",P.value=""},resetValidation:function(){ke.clearFormErrors(!1)}}),Pe=new W(".popup_type_avatar-edit",{handleFormSubmit:function(e){Pe.showLoadingStatus(!0),we.changeUserAvatar({avatar:e.link}).then((function(e){Pe.close(),be.setUserAvatar(e)})).catch((function(e){return console.error(e)})).finally((function(){return Pe.showLoadingStatus(!0)}))},setInputs:function(){R.reset()},resetValidation:function(){ge.clearFormErrors(!1)}});Ce.forEach((function(e){e.enableValidation()})),E.addEventListener("click",(function(){return Ie.open()})),O.addEventListener("click",(function(){return je.open()})),q.addEventListener("click",(function(){return Pe.open()}))}]);