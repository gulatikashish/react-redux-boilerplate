import { appConfig } from '../config/index';

const customHeader = () => ({
  'Content-Type': 'application/json',
  Accept: 'application/json',
  Authorization: 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvY3VzdG9tZXJcL3VzZXJfbG9naW4iLCJpYXQiOjE1MjM0NDM3MzEsImV4cCI6MTUyMzQ0NzMzMSwibmJmIjoxNTIzNDQzNzMxLCJqdGkiOiJGTWdBV2JEVE1jTVR0Rkk5Iiwic3ViIjoxLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.zSAkyWdnsVq55qT-U9nGB4MfR7xR16HQpUgO76S3fAc' || undefined,
  token: localStorage.getItem(appConfig.token)
});

const base = (method, url, data = {}) => {
  let body = undefined;
  if (method !== 'get') {
    body = JSON.stringify(data);
  }
  // eslint-disable-next-line no-undef
  return fetch(`${appConfig.apiUrl}${url}`, {
    method,
    headers: customHeader(),
    body
  })
    .then(response => {
      switch (response.status) {
        case 200:
          return response.json();
        case 201:
          return response.json();
        case 422: //422 Unprocessable Entity
          return response.json();
        case 401: //401 Unprocessable Entity
          return response.json();
        default:
          return response;
      }
    })
    .then(res => res)
    .catch(error => { throw error; });
};
const SuperFetch = {};
['get', 'post', 'put', 'delete'].forEach(method => {
  SuperFetch[method] = base.bind(null, method);
});
export default SuperFetch;

