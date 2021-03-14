function ImagePopup(props){

  return(
    <section className={`popup popup_place_image ${props.card? 'popup_visible' : 'popup'}`}>
      <figure className="popup__window popup__window_place_image">
        <button className="link-opacity popup__close-button" type="button" aria-label="закрыть" onClick={props.onClose}/>
        <img className="popup__image" src={props.card.link} alt={props.card.name}/>
        <figcaption className="popup__title popup__title_place_image">{props.card.name}</figcaption>
      </figure>
    </section>
  )
}

export default ImagePopup