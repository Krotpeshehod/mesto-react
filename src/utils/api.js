import {onError} from '../utils/utils'

class Api{
  constructor({url, headers}){
    this._url = url;
    this._headers = headers;
  }

  getUserData(){
    return fetch(`${this._url}users/me`, {
      method: "GET",
      headers: this._headers
  })
  .then(onError)
  }

  
  getAllCards(){
    return fetch(`${this._url}cards`, {
      method: "GET",
      headers: this._headers
    })
    .then(onError)
  }


  changeLikeCardStatus(id, isLiked){
    return fetch(`${this._url}cards/likes/${id}`, {
      method: `${isLiked? "PUT" : "DELETE"}`,
      headers: this._headers
    })
    .then(onError)
  }

  deleteCard(id){
    return fetch(`${this._url}cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    })
    .then(onError)
  }

  setUserInfo(data){
    return fetch(`${this._url}users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about}),
  })
  .then(onError)
  }

  setUserAvatar(avatar){
    return fetch(`${this._url}users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(avatar),
  })
  .then(onError)
  }

  setNewCard(data){
  return fetch(`${this._url}cards`, {
    method: "POST",
    headers: this._headers,
    body: JSON.stringify({
      name: data.name,
      link: data.link
    }),
  })
  .then(onError)
}

}

const api = new Api ({
  url: "https://mesto.nomoreparties.co/v1/cohort-20/",
  headers: {
    "content-type": "application/json",
    "authorization": "a4e2a7e9-e2ca-4fbc-8dff-1e2c4b21f19a",
  }
})

export default api