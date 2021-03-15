import { useEffect, useState } from "react"
import api from "../utils/api.js"
import Card from './Card'
import Loading from './Loading';

function Main (props){

  const [userName, setUserName] = useState('Имя автора')
  const [userDescription, setUserDescription] = useState('Чем занимается автор')
  const [userAvatar, setUserAvatar] = useState('')
  const [cards, setCards] = useState([])

  const [loadingStat, setLoadingStat] = useState(true)
  const [loadingImage, setLoadingPic] = useState({
    image: 'loading.gif',
    name: 'Идет загрузка... мы близки 👽' 
  })

  useEffect(()=>{
    Promise.all([api.getUserData(), api.getAllCards()])
      .then(([data, cards])=>{
        setUserName(data.name)
        setUserDescription(data.about)
        setUserAvatar(data.avatar)
        setCards(cards)
      })
      .then(()=> setLoadingStat(false))
      .catch((err) => {
        console.log(err);
        setTimeout(() => setLoadingPic(
          { image: 'error.gif',
            width: '300px',
            height: '300px',
            name: 'Что-то пошло не так и мы уже прикладываем подорожник. Приходите попозже 😭 или загляните в консоль'
          }
        ), 10000)
      })
  }, [])

  return(
    <main className="content">
      <Loading
        isLoading= {loadingStat}
        loading={loadingImage}
      />
      <section className="profile">
        <div className="profile__content">
          <div className="profile__avatar-container">
            <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})`}}  aria-label="аватарка пользователя" />
            <button className="profile__edit-button profile__edit-button_place_avatar" aria-label="редактировать аватар"
              type="button" onClick={props.onEditAvatar}/>
          </div>
          <div className="profile__container">
            <div className="profile__title-container">
              <h1 className="profile__title">{userName}</h1>
              <button className="link-opacity profile__edit-button" aria-label="редактировать профиль" type="button" onClick={props.onEditProfile}/>
            </div>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
        </div>
        <button className="link-opacity profile__add-button" aria-label="добавить" type="button" onClick={props.onAddPlace}/>
      </section>

      <section className="elements">
        <ul className="elements__container">
          {cards.map(item=><Card key={item._id} {...item} onCardClick={props.onCardClick}/>)}
        </ul>
      </section>
        
    </main>
  )
}

export default Main