import PopupWithForm from './PopupWithForm'

function DeletePopup(props){

  function handleDeleteClick (evt){
    evt.preventDefault()
    props.onCardDelete(props.card)
    props.onClose()
  }

  return(
    <PopupWithForm
      name= 'delete-card'
      title= 'Вы уверены?'
      saveButton = 'Да'
      isOpen= {props.isOpen}
      onClose = {props.onClose}
      onSubmit= {handleDeleteClick}
    />
  )
}

export default DeletePopup