import { useRef } from 'react';
import PopupWithForm from './PopupWithForm'

function EditAvatarPopup(props){

  const avatarRef = useRef('')

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateAvatar({avatar: avatarRef.current.value})
    evt.target.reset()
  } 

  return(
    
    <PopupWithForm
      name='avatar'
      title='Обновить аватар'
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
      saveButton={props.saveButton.saveAvatar}
      saveButtonInvalid={props.saveButton.invalid}
      saveButtonClick={props.saveButtonClick}
    >
      <input className="popup__form-text popup__form-text_type_avatar" type="url" id="avatar" name="avatar" required
        placeholder="Ссылка на аватар" autoComplete="off" ref={avatarRef} />
      <span className="error error_place_avatar-error" id="avatar-error"></span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup