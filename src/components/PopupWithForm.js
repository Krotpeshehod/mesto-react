function PopupWithForm(props){

 return(
    <section className={`popup popup_place_${props.name} ${props.isOpen? 'popup_visible' : 'popup'}`}>
      <div className={`popup__window popup__window_place_${props.name}`}>
        <button className="link-opacity popup__close-button" type="button"
          aria-label="закрыть" onClick={props.isClose}/>
        <h2 className="popup__title">{props.title}</h2>
        <form className={`popup__form popup__form_place_${props.name}`} name={props.name} noValidate>
          {props.children}
          <button className="popup__save-button" type="submit">{props.saveButton}</button>
        </form>
      </div>
    </section>
  )
}

export default PopupWithForm