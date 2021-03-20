import { useContext } from "react"
import {CurrentUserContext} from '../contexts/CurrentUserContext'

function Card(props){

  const currentUser = useContext(CurrentUserContext)

  const isOwn = props.owner._id === currentUser._id
  const isLiked = props.likes.some(item => item._id === currentUser._id);

  const cardDeleteButtonClassName = (
    `element__button-delete ${isOwn ? 'element__button-delete_active' : ''}`
  ); 

  const cardLikeButtonClassName = (
    `element__button-like ${isLiked ? 'element__button-like_active' : ''}`
  )

  function handleClick() {
    props.onCardClick(props);
  }
  
  function handleLikeClick (){
    props.onCardLike(props)
  }
  
  function handleDeleteClick (){
    props.onCardDelete(props)
  }

  return(
      <li className="element">
        <button className={cardDeleteButtonClassName} type="button" aria-label="удалить" onClick={handleDeleteClick}/>
        <img className="element__image" src={props.link} alt={props.name} onClick={handleClick}/>
        <div className="element__container">
          <h2 className="element__title">{props.name}</h2>
          <div className="element__container-like">
            <button className={cardLikeButtonClassName} type="button" aria-label="нравится" onClick={handleLikeClick}/>
            <span className="element__like-counter" id="like-counter">{props.likes.length}</span>
          </div>
        </div>
      </li>
  )
}

export default Card