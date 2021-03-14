function Card(props){

  function handleClick() {
    props.onCardClick(props);
  }   

  return(
      <li className="element">
        <button className="element__button-delete element__button-delete_active" type="button" aria-label="удалить" />
        <img className="element__image" src={props.link} alt={props.name} onClick={handleClick}/>
        <div className="element__container">
          <h2 className="element__title">{props.name}</h2>
          <div className="element__container-like">
            <button className="element__button-like" type="button" aria-label="нравится" />
            <span className="element__like-counter" id="like-counter">{props.likes.length}</span>
          </div>
        </div>
      </li>
  )
}

export default Card