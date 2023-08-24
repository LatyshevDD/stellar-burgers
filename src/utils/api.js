const config = {
  ingredienceUrl: 'https://norma.nomoreparties.space/api/ingredients',
  orderUrl: 'https://norma.nomoreparties.space/api/orders'
};

function getResponseData(res) {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
}

function requestApi(url, options) {
  return fetch(url, options)
    .then(res => getResponseData(res))
}

export function getIngredience() {
  return requestApi(config.ingredienceUrl)
}

export function getOrderDetails(data) {
  return requestApi(config.orderUrl, {
    method: 'POST',
    body: JSON.stringify({
      ingredients: data
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}