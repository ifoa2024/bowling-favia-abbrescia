let bowling = { 'players' : [ {'name': 'Gianpiero', scores : []}, {'name': 'Michele', scores : []}, {'name': 'Andrea', scores : []} ]};

function generateRandomScore() {
    return Math.floor(Math.random() * 100) + 1;
}

function simulateGame() {
    bowling.players.forEach(player => {
        player.score = [];
        for (let frame = 0; frame < 10; frame++) {
            let firstThrow = generateRandomScore();
            let secondThrow = firstThrow < 10 ? generateRandomScore() : 0;
            player.score.push(firstThrow + secondThrow);
        }
    });
}

function calculateTotalScore(scores) {
    bowling.players.forEach(player => {
        player.totalScore = player.score.reduce ((sum, score) => sum + score, 0);
        });
}

function getWinner() {
    calculateTotalScore();
    let winner = bowling.players.reduce((bestPlayer, currentPlayer) => 
        currentPlayer.totalScore > bestPlayer.totalScore ? currentPlayer : bestPlayer);
    return winner;
}

function addPlayer() {
    let name = prompt("Inserisci il nome del giocatore");
    bowling.players.push({'name': name, scores : [], totalScore: 0});
}

function getRanking () {
    calculateFinalScore();
    return bowling.players.sort((a, b) => b.totalScore - a.totalScore);
}

simulateGame ();
console.log('Winner: ' + getWinner().name);
