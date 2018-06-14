import fetch from 'whatwg-fetch';

const BASE_URL = 'http://localhost:3000';

export function getUsers() {
  return fetch(BASE_URL + 'users').then(onSuccess, onError);
}

export function deleteUser(id) {
  const request = new Request(BASE_URL + `users${id}`, {
    method: 'DELETE'
  });

  return fetch(request).then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error); // eslint-disable-line no-console
}
