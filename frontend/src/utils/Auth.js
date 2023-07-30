export const BASE_URL = 'http://localhost:3000';

export const handleResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
};

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then(response => {
      console.log('Статус ответа:', response.status);
      return response.json();
    })
    .then(responseData => {
      console.log('Ответ от сервера:', responseData);
      return responseData;
    })
    .catch(error => {
      console.error('Ошибка при регистрации:', error);
      throw error;
    });
};

// Вызываем функцию register
register('example@example.com', 'password123')
  .then(responseData => {
    // Здесь можете продолжить обработку данных, если необходимо
  })
  .catch(error => {
    // Здесь можете обработать ошибку и предпринять необходимые действия
  });


export const login = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  })
    .then(response => {
      console.log('Статус ответа:', response.status);
      return response.json();
    })
    .then(responseData => {
      console.log('Ответ от сервера:', responseData);
      return responseData;
    })
    .catch(error => {
      console.error('Ошибка при входе:', error);
      throw error;
    });
};

// Вызываем функцию login
login('example@example.com', 'password123')
  .then(responseData => {
    // Здесь можете продолжить обработку данных, если необходимо
  })
  .catch(error => {
    // Здесь можете обработать ошибку и предпринять необходимые действия
  });


export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
  })
    .then(handleResponse);
};