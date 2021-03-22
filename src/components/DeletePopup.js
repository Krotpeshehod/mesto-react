import PopupWithForm from './PopupWithForm'

function DeletePopup(props){

  function handleDeleteClick (evt){
    evt.preventDefault()
    props.onCardDelete(props.card)
  }

  return(
    <PopupWithForm
      name= 'delete-card'
      title= 'Вы уверены?'
      isOpen= {props.isOpen}
      onClose = {props.onClose}
      onSubmit= {handleDeleteClick}
      saveButton= {props.saveButton.delete}
      saveButtonClick = {props.saveButtonClick}
    />
  )
}

export default DeletePopup