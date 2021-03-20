import '../index.css';
import '../utils/api';
import loadingImage from '../image/gif/loading.gif'
import errorImage from '../image/gif/error.gif'

import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'
import EditProfilePopup from './EditProfilePopup'
import EditAvatarPopup from './EditAvatarPopup'
import AddPlacePopup from './AddPlacePopup'
import api from '../utils/api';
 
import { useState, useEffect } from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext'

function App() {
  
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState(false)
  const [currentUser, setCurrentUser] = useState('')
  const [cards, setCards] = useState([])

  const [loading, setLoading] = useState(true)
  const [loadingData, setLoadingData] = useState({image:loadingImage})

  useEffect(()=>{
    Promise.all([api.getUserData(), api.getAllCards()])
      .then(([data, cards])=>{ 
        setCurrentUser(data)
        setCards(cards)
      })
      .then(()=> setLoading(false))
      .catch((err) => {
        console.log(err);
        setTimeout(() => setLoadingData(
          { image: errorImage,
            width: '300px',
            height: '300px',
            name: `${err}. Что-то пошло не так и мы уже прикладываем подорожник. Приходите попозже 😭`
          }
        ), 10000)
      })
  }, [])


  function handleEditProfileClick(){
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick(){
    setIsAddPlacePopupOpen (true)
  }

  function handleEditAvatarClick(){
    setIsEditAvatarPopupOpen(true)
  }

  function handleCardClick(card){
    setSelectedCard(card)
    setIsImagePopupOpen(true)
  }

  function handleCardLike(props){
    const isLiked = props.likes.some(item => item._id === currentUser._id)
    api.changeLikeCardStatus(props._id, !isLiked)
        .then((newCard) => {
          setCards((state) => state.map((c) => c._id === props._id ? newCard : c));
        })
        .catch((err) => {
          console.log(err)
      })
  } 

  function handleCardDelete(props){
    api.deleteCard(props._id)
      .then(setCards(cards.filter(newCards=> newCards._id !== props._id )))
      .catch((err) => {
        console.log(err)
    })
  }

  function handleUpdateUser(data){
    api.setUserInfo(data)
    .then((data)=> {setCurrentUser(data)})
    .catch((err)=>{console.log(err)})
    closeAllPopups()
  }

  function handleUpdateAvatar(data){
    api.setUserAvatar(data)
    .then((data)=> {setCurrentUser(data)})
    .catch((err)=>{console.log(err)})
    closeAllPopups()
  }

  function handleAddPlaceSubmit(data){
    api.setNewCard(data)
    .then((newCard)=> setCards([newCard, ...cards]))
    .catch((err)=>{console.log(err)})
    closeAllPopups()
  }

  function closeAllPopups(){
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen (false)
    setIsEditAvatarPopupOpen(false)
    setIsImagePopupOpen(false)
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Header/>
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          isLoading={loading}
          loadingData={loadingData}
        />
        <Footer/>

        <EditProfilePopup 
          isOpen={isEditProfilePopupOpen} 
          onClose={closeAllPopups} 
          onUpdateUser={handleUpdateUser}
        />

        <EditAvatarPopup 
          isOpen= {isEditAvatarPopupOpen}
          onClose = {closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />

        <AddPlacePopup 
          isOpen= {isAddPlacePopupOpen}
          onClose = {closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />

        <PopupWithForm
          name= 'delete-card'
          title= 'Вы Уверены?'
          saveButton = 'Да'
        />

        <ImagePopup
          card = {selectedCard}
          isOpen = {isImagePopupOpen}
          onClose = {closeAllPopups}
        />

      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
