import { useState, useEffect, useContext } from 'react';
import {CurrentUserContext} from '../contexts/CurrentUserContext'

import PopupWithForm from './PopupWithForm'

function EditProfilePopup(props){

  const currentUser = useContext(CurrentUserContext);
  const [nameUser, setNameUser] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if ((currentUser.name) && ((currentUser.about))){
    setNameUser(currentUser.name);
    setDescription(currentUser.about);
    }
  }, [currentUser]); 

  function handleChangeName(evt) {
    setNameUser(evt.target.value);
  }

  function handleChangeDescription(evt){
    setDescription(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault()
    props.onUpdateUser({name: nameUser, about: description})
    evt.target.reset()
  }

  return(
    <PopupWithForm
      name='profile'
      title='Редактировать профиль'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      saveButton={props.saveButton.saveProfile}
      saveButtonInvalid={props.saveButton.invalid}
      saveButtonClick={props.saveButtonClick}
    >
      <input className="popup__form-text popup__form-text_type_profile-name" type="text" id="name-profile" name="name"
        required placeholder="Имя" minLength="2" maxLength="40" autoComplete="off" value={nameUser} onChange={handleChangeName}/>
      <span className="error error_place_name-error" id="name-profile-error"></span>
      <input className="popup__form-text popup__form-text_type_profile-about" type="text" id="about" name="about" required
        placeholder="О себе" minLength="2" maxLength="200" autoComplete="off" value={description} onChange={handleChangeDescription}/>
      <span className="error error_place_about-error" id="about-error"></span>
    </PopupWithForm>
  )
}

export default EditProfilePopup