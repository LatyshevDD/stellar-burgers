const config = {
  ingredienceUrl: 'https://norma.nomoreparties.space/api/ingredients',
};

function getResponseData(res) {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
}

function requestApi(url) {
  return fetch(url)
    .then(res => getResponseData(res))
}

export function getIngredience() {
  return requestApi(config.ingredienceUrl)
}