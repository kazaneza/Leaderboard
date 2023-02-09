import './style.css';
import { addScore, getScore } from './scores.js';

const refreshButton = document.getElementById('refresh-button');
refreshButton.addEventListener('click', getScore);

const addForm = document.getElementById('add-form');
addForm.addEventListener('submit', (event) => {
event.preventDefault();

const nameInput = document.getElementById('name');
const scoreInput = document.getElementById('score');

addScore(nameInput.value, scoreInput.value);
clearInputs(nameInput, scoreInput);
});

const clearInputs = (...inputs) => {
inputs.forEach((input) => (input.value = ''));
};



//1xyAF0OXINI4Powl80fQ