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
    return fetch(`${this._url}cards1`, {
      method: "GET",
      headers: this._headers
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