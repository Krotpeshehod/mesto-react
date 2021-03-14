import '../index.css';
import '../utils/api';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm'
import ImagePopup from './ImagePopup'
import { useState } from 'react';


function App() {
  
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState(false)

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

  function closeAllPopups(){
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen (false)
    setIsEditAvatarPopupOpen(false)
    setIsImagePopupOpen(false)
  }

  return (
    <div className="App">
      <Header/>
      <Main
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer/>
      <PopupWithForm
        name= 'profile'
        title= 'Редактировать профиль'
        saveButton = 'Сохранить'
        isOpen= {isEditProfilePopupOpen}
        onClose = {closeAllPopups}
      >
        <input className="popup__form-text popup__form-text_type_profile-name" type="text" id="name-profile" name="name"
          required placeholder="Имя" minLength="2" maxLength="40" autoComplete="off" />
        <span className="error error_place_name-error" id="name-profile-error"></span>
        <input className="popup__form-text popup__form-text_type_profile-about" type="text" id="about" name="about" required
          placeholder="О себе" minLength="2" maxLength="200" autoComplete="off" />
        <span className="error error_place_about-error" id="about-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name= 'element'
        title= 'Новое место'
        saveButton = 'Добавить'
        isOpen= {isAddPlacePopupOpen}
        onClose = {closeAllPopups}
      >
        <input className="popup__form-text popup__form-text_type_element-name" type="text" id="name-card" name="name"
          required placeholder="Название" minLength="2" maxLength="30" autoComplete="off" />
        <span className="error error_place_image-name-error" id="name-card-error"></span>
        <input className="popup__form-text popup__form-text_type_image" type="url" id="link" name="link" required
          placeholder="Ссылка на картинку" autoComplete="off" />
        <span className="error error_place_image-error" id="link-error"></span>
      </PopupWithForm>

      <PopupWithForm
        name= 'avatar'
        title= 'Обновить аватар'
        saveButton = 'Сохранить'
        isOpen= {isEditAvatarPopupOpen}
        onClose = {closeAllPopups}
      >
        <input className="popup__form-text popup__form-text_type_avatar" type="url" id="avatar" name="avatar" required
          placeholder="Ссылка на аватар" autoComplete="off" />
        <span className="error error_place_avatar-error" id="avatar-error"></span>
      </PopupWithForm>

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
  );
}

export default App;
