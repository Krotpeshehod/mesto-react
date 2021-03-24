import { useContext } from "react"
import {CurrentUserContext} from '../contexts/CurrentUserContext'

import Card from './Card'
import Loading from './Loading';

function Main (props){

  const currentUser = useContext(CurrentUserContext)

  return(
    <main className="content">
      <Loading
        isLoading={props.isLoading}
        loadingData={props.loadingData}
      />
      <section className="profile">
        <div className="profile__content">
          <div className="profile__avatar-container">
            <div className="profile__avatar" style={{ backgroundImage: `url(${currentUser.avatar})`}}  aria-label="аватарка пользователя"/>
            <button className="profile__edit-button profile__edit-button_place_avatar" aria-label="редактировать аватар"
              type="button" onClick={props.onEditAvatar}/>
          </div>
          <div className="profile__container">
            <div className="profile__title-container">
              <h1 className="profile__title">{currentUser.name}</h1>
              <button className="link-opacity profile__edit-button" aria-label="редактировать профиль" type="button" onClick={props.onEditProfile}/>
            </div>
            <p className="profile__subtitle">{currentUser.about}</p>
          </div>
        </div>
        <button className="link-opacity profile__add-button" aria-label="добавить" type="button" onClick={props.onAddPlace}/>
      </section>
      <section className="elements">
        <ul className="elements__container">
          {props.cards.map(item=>
            <Card 
              key={item._id} 
              {...item} 
              onCardClick={props.onCardClick} 
              onCardLike={props.onCardLike} 
              onCardDeletePopup={props.onCardDeletePopup}
            />
          )}
        </ul>
      </section>
    </main>
  )
}

export default Main