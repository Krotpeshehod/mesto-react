import '../index.css';
import '../utils/api'

//import {useState, useEffect} from 'react';

function App() {
  return (
    <div className="App">
      <header className="header">
        <a className="link-opacity header__logo" href="#" target="_blank" />
      </header>

      <main className="content">
        <section className="profile">
          <div className="profile__content">
            <div className="profile__avatar-container">
              <img className="profile__avatar" src="#" alt="аватарка пользователя" />
              <button className="profile__edit-button profile__edit-button_place_avatar" aria-label="редактировать аватар"
                type="button" />
            </div>
            <div className="profile__container">
              <div className="profile__title-container">
                <h1 className="profile__title">Имя автора</h1>
                <button className="link-opacity profile__edit-button profile__edit-button_place_about-profile"
                  aria-label="редактировать профиль" type="button" />
              </div>
              <p className="profile__subtitle">Чем занимается автор</p>
            </div>
          </div>
          <button className="link-opacity profile__add-button" aria-label="добавить" type="button" />
        </section>

        <section className="elements">
          <ul className="elements__container"/>
        </section>
      </main>

      <footer className="footer">
        <p className="footer__title">&copy; 2020. Борисенко Валерий</p>
      </footer>

      <section className="popup popup_place_profile">
        <div className="popup__window popup__window_place_profile">
          <button className="link-opacity popup__close-button popup__close-button_place_profile" type="button"
            aria-label="закрыть" />
          <h2 className="popup__title">Редактировать профиль</h2>
          <form className="popup__form popup__form_place_profile" name="edit_profile" noValidate>
            <input className="popup__form-text popup__form-text_type_profile-name" type="text" id="name-profile" name="name"
              required placeholder="Имя" minLength="2" maxLength="40" autoComplete="off" />
            <span className="error error_place_name-error" id="name-profile-error"></span>
            <input className="popup__form-text popup__form-text_type_profile-about" type="text" id="about" name="about" required
              placeholder="О себе" minLength="2" maxLength="200" autoComplete="off" />
            <span className="error error_place_about-error" id="about-error"></span>
            <button className="popup__save-button" type="submit">Сохранить</button>
          </form>
        </div>
      </section>

      <section className="popup popup_place_element">
        <div className="popup__window popup__window_place_element">
          <button className="link-opacity popup__close-button" type="button" aria-label="закрыть" />
          <h2 className="popup__title popup__title_place_element">Новое место</h2>
          <form className="popup__form popup__form_place_element" name="add_profile" noValidate>
            <input className="popup__form-text popup__form-text_type_element-name" type="text" id="name-card" name="name"
              required placeholder="Название" minLength="2" maxLength="30" autoComplete="off" />
            <span className="error error_place_image-name-error" id="name-card-error"></span>
            <input className="popup__form-text popup__form-text_type_image" type="url" id="link" name="link" required
              placeholder="Ссылка на картинку" autoComplete="off" />
            <span className="error error_place_image-error" id="link-error"></span>
            <button className="popup__save-button" type="submit">Создать</button>
          </form>
        </div>
      </section>

      <section className="popup popup_place_image">
        <figure className="popup__window popup__window_place_image">
          <button className="link-opacity popup__close-button" type="button" aria-label="закрыть" />
          <img className="popup__image" src="#" alt="#" />
          <figcaption className="popup__title popup__title_place_image"></figcaption>
        </figure>
      </section>

      <section className="popup popup_place_avatar">
        <div className="popup__window popup__window_place_avatar">
          <button className="link-opacity popup__close-button" type="button" aria-label="закрыть" />
          <h2 className="popup__title popup__title_place_avatar">Обновить аватар</h2>
          <form className="popup__form popup__form_place_avatar" name="edit_avatar" noValidate>
            <input className="popup__form-text popup__form-text_type_avatar" type="url" id="avatar" name="avatar" required
              placeholder="Ссылка на аватар" autoComplete="off" />
            <span className="error error_place_avatar-error" id="avatar-error"></span>
            <button className="popup__save-button" type="submit">Сохранить</button>
          </form>
        </div>
      </section>

      <section className="popup popup_place_delete-card">
        <form className="popup__window popup__window_place_delete-card" name="delete_popup" noValidate>
          <button className="link-opacity popup__close-button" type="button" aria-label="закрыть" />
          <h2 className="popup__title popup__title_place_delete-card">Вы уверены?</h2>
          <button className="popup__save-button" type="submit">Да</button>
        </form>
      </section>

      <section className="loading loading_active">
        <div className="loading__picture"></div>
      </section>

      <template id="element-template">
        <li className="element">
          <button className="element__button-delete element__button-delete_active" type="button" aria-label="удалить" />
          <img className="element__image" src="#" alt="#" />
          <div className="element__container">
            <h2 className="element__title"></h2>
            <div className="element__container-like">
              <button className="element__button-like" type="button" aria-label="нравится" />
              <span className="element__like-counter" id="like-counter">0</span>
            </div>
          </div>
        </li>
      </template>

    </div>
  );
}

export default App;
