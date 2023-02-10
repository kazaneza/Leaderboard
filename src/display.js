const displayScores = (scores) => {
  const scoresList = document.getElementById('scores-list');
  scoresList.innerHTML = '';
  let counter = 1;

  scores.forEach((score) => {
    const li = document.createElement('li');
    li.innerHTML = `${counter}. ${score.user}: ${score.score}`;

    scoresList.appendChild(li);
    counter += 1;
  });

  scoresList.style.overflowY = 'scroll';
  scoresList.style.height = '300px';
};

export default displayScores;
