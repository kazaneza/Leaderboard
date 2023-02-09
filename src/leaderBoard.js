import axios from 'axios';

const createGame = () => {
  axios
    .post('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
      name: 'kazaneza',
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

createGame();