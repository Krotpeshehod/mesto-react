import { useState, useEffect } from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext'
import '../index.css';
import '../utils/api';
import loadingImage from '../image/gif/loading.gif'
import errorImage from '../image/gif/error.gif'
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup'
import EditProfilePopup from './EditProfilePopup'
import EditAvatarPopup from './EditAvatarPopup'
import AddPlacePopup from './AddPlacePopup'
import api from '../utils/api';
import DeletePopup from './DeletePopup';

function App() {
  
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false)
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState(false)
  const [currentUser, setCurrentUser] = useState('')
  const [cards, setCards] = useState([])

  const [loading, setLoading] = useState(true)
  const [loadingData, setLoadingData] = useState({image:loadingImage})

  const [saveButton, setSaveButton] = useState({add: 'Добавить', save: 'Сохранить', delete: 'Да'})
 
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

   function handleDeleteCardClick(card){
    setSelectedCard(card)
    setIsDeletePopupOpen(true)
  }

  function handleСhangeSaveButton(){
    setSaveButton({add: 'Сохранение...', save: 'Сохранение...', delete: 'Удаление...'})
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
    .then(()=> closeAllPopups())
    .catch((err) => {console.log(err)})
  }

  function handleUpdateUser(data){
    api.setUserInfo(data)
    .then((data)=> {setCurrentUser(data)})
    .then(()=> closeAllPopups())
    .catch((err)=>{console.log(err)})
  }

  function handleUpdateAvatar(data){
    api.setUserAvatar(data)
      .then((data)=> {setCurrentUser(data)})
      .then(()=> closeAllPopups())
      .catch((err)=>{console.log(err)})
  }

  function handleAddPlaceSubmit(data){
    api.setNewCard(data)
    .then((newCard)=> setCards([newCard, ...cards]))
    .then(()=> closeAllPopups())
    .catch((err)=>{console.log(err)})

  }

  function closeAllPopups(){
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen (false)
    setIsEditAvatarPopupOpen(false)
    setIsImagePopupOpen(false)
    setIsDeletePopupOpen(false)
    setSaveButton({add: 'Добавить', save: 'Сохранить', delete: 'Да'})
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
          onCardDeletePopup={handleDeleteCardClick}
          isLoading={loading}
          loadingData={loadingData}
        />
        <Footer/>

        <EditProfilePopup 
          isOpen={isEditProfilePopupOpen} 
          onClose={closeAllPopups} 
          onUpdateUser={handleUpdateUser}
          saveButton = {saveButton}
          saveButtonClick = {handleСhangeSaveButton}
        />

        <EditAvatarPopup 
          isOpen= {isEditAvatarPopupOpen}
          onClose = {closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
          saveButton = {saveButton}
          saveButtonClick = {handleСhangeSaveButton}
        />

        <AddPlacePopup 
          isOpen= {isAddPlacePopupOpen}
          onClose = {closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
          saveButton = {saveButton}
          saveButtonClick = {handleСhangeSaveButton}
        />

        <DeletePopup
          card = {selectedCard}
          isOpen={isDeletePopupOpen} 
          onClose={closeAllPopups} 
          onCardDelete={handleCardDelete}
          saveButton = {saveButton}
          saveButtonClick = {handleСhangeSaveButton}
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
