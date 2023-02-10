import axios from 'axios';

const createGame = () => {
  axios
    .post('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
      name: 'kazaneza',
    })
    .then((res) => {
      // eslint-disable-next-line
      console.log(res.data); 
    })
    .catch((error) => {
      // eslint-disable-next-line
      console.error(error);
    });
};

createGame();
