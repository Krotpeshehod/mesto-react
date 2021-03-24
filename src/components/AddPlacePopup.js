import { useRef } from 'react';

import PopupWithForm from './PopupWithForm';

function AddPlacePopup (props){

  const newNameRef = useRef('')
  const newLinkRef = useRef('')

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onAddPlace({
      name: newNameRef.current.value,
      link: newLinkRef.current.value
    });
    evt.target.reset()
  }

  return(
    <PopupWithForm
      name='element'
      title='Новое место'
      isOpen={props.isOpen} 
      onClose={props.onClose}
      onSubmit={handleSubmit}
      saveButton={props.saveButton.addImage}
      saveButtonInvalid={props.saveButton.invalid}
      saveButtonClick={props.saveButtonClick}
    >
      <input ref={newNameRef} className="popup__form-text popup__form-text_type_element-name" type="text" id="name-card" name="name"
        required placeholder="Название" minLength="2" maxLength="30" autoComplete="off"/>
      <span className="error error_place_image-name-error" id="name-card-error"></span>
      <input ref={newLinkRef} className="popup__form-text popup__form-text_type_image" type="url" id="link" name="link" required
        placeholder="Ссылка на картинку" autoComplete="off"/>
      <span className="error error_place_image-error" id="link-error"></span>
    </PopupWithForm>
  )
}

export default AddPlacePopup 