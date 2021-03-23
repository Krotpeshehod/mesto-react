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
    add: 'Добавить', 
    save: 'Сохранить', 
    delete: 'Да',
  },
  afterClick:{
    add: 'Сохранение...', 
    save: 'Сохранение...', 
    delete: 'Удаление...',
  }
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