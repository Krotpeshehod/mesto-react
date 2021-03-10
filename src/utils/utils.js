/*profile*/ 
export const profileName = document.querySelector('.profile__title');
export const profileAbout = document.querySelector('.profile__subtitle');

export const popupPlaceProfile = document.querySelector('.popup_place_profile');
export const popupFormProfile = document.querySelector('.popup__form_place_profile');
export const popupInputProfileName = document.querySelector('.popup__form-text_type_profile-name');
export const popupInputProfileAbout = document.querySelector('.popup__form-text_type_profile-about');

export const editButtonAboutProfile = document.querySelector('.profile__edit-button_place_about-profile');


/*element*/
export const elementContainer = document.querySelector('.elements__container');

export const popupPlaceElement = document.querySelector('.popup_place_element');
export const popupFormElement = document.querySelector('.popup__form_place_element');

export const addElementButton = document.querySelector('.profile__add-button');

/*avatar*/
export const profileAvatar = document.querySelector('.profile__avatar')
export const popupPlaceAvatar = document.querySelector('.popup_place_avatar');
export const editButtonAvatar = document.querySelector('.profile__edit-button_place_avatar');
export const popupFormPlaceAvatar = document.querySelector('.popup__form_place_avatar');
export const popupFormInputPlaceAvatar = document.querySelector('.popup__form-text_type_avatar');

/*image*/
export const popupPlaceImage = document.querySelector('.popup_place_image');

/*delete*/
export const popupPlaceDeleteCard = document.querySelector('.popup_place_delete-card')

export const validationConfig = {

  inputSelector: '.popup__form-text',
  submitButtonSelector: '.popup__save-button',
  inactiveButtonClass: 'popup__save-button_state_invalid',
  inputErrorClass: 'popup__form-text_state_invalid',
  errorClass: 'error_active'
}; 