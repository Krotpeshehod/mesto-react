export const onError = (res)=>{
  if(res.ok){
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}