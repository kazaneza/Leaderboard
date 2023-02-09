import display from './display.js';

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const id = '1xyAF0OXINI4Powl80fQ';

export const getScore = () => {
  return new Promise((resolve, reject) => {
    fetch(`${url}${id}/scores`, {
      method: 'Get',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((userPost) => userPost.json())
      .then((users) => {
        display(users.result);
        resolve();
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const addScore = (user, score) => {
  return new Promise((resolve, reject) => {
    fetch(`${url}${id}/scores`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user, score }),
    })
      .then((userPost) => userPost.json())
      .then((verification) => {
        getScore()
          .then(() => {
            resolve(verification);
          })
          .catch((error) => {
            reject(error);
          });
      })
      .catch((error) => {
        reject(error);
      });
  });
};
