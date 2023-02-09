const displayScores = (scores) => {
    const scoresList = document.querySelector('.recent-display');
    scoresList.innerHTML = '';
    
    scores.forEach((score) => {
    const item = document.createElement('li');
    item.innerHTML = `${score.user}: ${score.score}`;
    scoresList.appendChild(item);
    });
    };
    
    export default displayScores;