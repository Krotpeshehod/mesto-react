import loadingImage from '../image/gif/loading.gif'
import errorImage from '../image/gif/error.gif'

export const onError = (res)=>{
  if(res.ok){
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export const saveButtonName = {
  standart:{
    saveProfile: 'Сохранить', 
    saveAvatar: 'Сохранить',
    addImage: 'Добавить',
    delete: 'Да',
    invalid: '',
  },
  afterClick:{
    saveProfile: 'Сохранение...', 
    saveAvatar: 'Сохранение...', 
    addImage: 'Сохранение...',
    delete: 'Удаление...',
    invalid: 'popup__save-button_state_invalid',
  },
  error:{ 
    saveProfile: 'Введите имя и описание', 
    saveAvatar: 'Введите url картинки',
    addImage: 'Введите название и url картинки',
    invalid: 'popup__save-button_state_error',
  },
}

export const loadingInfo = {
  loading:{
    image: loadingImage
  },
  error: { 
    image: errorImage,
    width: '300px',
    height: '300px',
    name: 'Что-то пошло не так и мы уже прикладываем подорожник'
  }
}