import { RequestOptionsType, OrderType, RefreshTokenResponseType } from "../types/types";

const config = {
  ingredienceUrl: 'https://norma.nomoreparties.space/api/ingredients',
  orderUrl: 'https://norma.nomoreparties.space/api/orders'
};

// function getResponseData<T>(res) {
//   if (!res.ok) {
//     return Promise.reject(`Ошибка: ${res.message}`);
//   }
//   return res.json() as Promise<T>
// }

function requestApi<T>(url: string, options: RequestOptionsType): Promise<T> {
  return fetch(url, options)
    .then(res => {
        if (!res.ok) {
          return Promise.reject(`Ошибка`);
        }
        return res.json() as Promise<T>
      }
    )
}

export function getIngredience() {
  return requestApi(config.ingredienceUrl)
}

export function getOrderDetails(data: String[]) {
  return requestApi<OrderType>(config.orderUrl, {
    method: 'POST',
    body: JSON.stringify({
      ingredients: data
    }),
    headers: {
      'Content-Type': 'application/json',
      authorization: localStorage.getItem('accessToken')
    }
  })
}

export function getOrderWithRefreshRequest(data: String[]) {
  return getOrderDetails(data)
          .catch((err: string) => {
            if (err === 'jwt expired') {
              refreshTokenRequest()
                .then((res) => {
                  localStorage.setItem("refreshToken", res.refreshToken);
                  localStorage.setItem("accessToken", res.accessToken);
                })
                .then(() => {
                  return getOrderDetails(data)
                    .catch((err) =>{
                      return Promise.reject(err)
                    })
                })
                .catch((err) => {
                  return Promise.reject(err)
                })
            }
            return Promise.reject("Неизвестная ошибка")
          })
}

export function registerRequest(data) {
  return requestApi('https://norma.nomoreparties.space/api/auth/register', {
    method: 'POST',
    body: JSON.stringify({
      email: data.email,
      password: data.password,
      name: data.name
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export function loginRequest(data) {
  return requestApi('https://norma.nomoreparties.space/api/auth/login', {
    method: 'POST',
    body: JSON.stringify({
      email: data.email,
      password: data.password,
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export function logoutRequest() {
  return requestApi('https://norma.nomoreparties.space/api/auth/logout', {
    method: 'POST',
    body: JSON.stringify({
      token: localStorage.getItem('refreshToken')
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export function getUserRequest() {
  return requestApi('https://norma.nomoreparties.space/api/auth/user', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: localStorage.getItem('accessToken')
    }
  })
}

export function getUserWithRefreshRequest() {
  return getUserRequest()
          .catch((err) => {
            if (err === 'jwt expired') {
              refreshTokenRequest()
                .then((res) => {
                  localStorage.setItem("refreshToken", res.refreshToken);
                  localStorage.setItem("accessToken", res.accessToken);
                })
                .then(() => {
                  return getUserRequest()
                    .catch((err) =>{
                      return Promise.reject(err)
                    })
                })
                .catch((err) =>{
                  return Promise.reject(err)
                })
            }
          })
}

export function refreshTokenRequest() {
  return requestApi<RefreshTokenResponseType>('https://norma.nomoreparties.space/api/auth/token', {
    method: 'POST',
    body: JSON.stringify({
      token: localStorage.getItem('refreshToken')
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export function forgotPasswordRequest(data) {
  return requestApi('https://norma.nomoreparties.space/api/password-reset', {
    method: 'POST',
    body: JSON.stringify({
      email: data
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export function resetPasswordRequest(data) {
  return requestApi('https://norma.nomoreparties.space/api/password-reset/reset', {
    method: 'POST',
    body: JSON.stringify({
      password: data.password,
      token: data.token
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export function changeUserRequest(data) {
  return requestApi('https://norma.nomoreparties.space/api/auth/user', {
    method: 'PATCH',
    body: JSON.stringify({
      name: data.name,
      email: data.login,
      password: data.password
    }),
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
      authorization: localStorage.getItem('accessToken')
    }
  })
}

export function ChangeUserWithRefreshRequest(data) {
  return changeUserRequest(data)
          .catch((err) => {
            if (err === 'jwt expired') {
              refreshTokenRequest()
                .then((res) => {
                  localStorage.setItem("refreshToken", res.refreshToken);
                  localStorage.setItem("accessToken", res.accessToken);
                })
                .then(() => {
                  return changeUserRequest(data)
                    .catch((err) =>{
                      return Promise.reject(err)
                    })
                })
                .catch((err) => {
                  return Promise.reject(err)
                })
            }
          })
}


export function getOrder(number) {
  return requestApi(`${config.orderUrl}/${number}`, {method: 'GET',})
}

