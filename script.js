const rollBtn = document.getElementById('rollBtn');
const newGameBtn = document.getElementById('newGameBtn');
const score1 = document.getElementById('score1');
const score2 = document.getElementById('score2');
let player1Score = 0;
let player2Score = 0;
let currentPlayer = 1;

// Ask for player names
const editNamesBtn = document.getElementById('editNamesBtn');
const player1NameElement = document.getElementById('player1').querySelector('h2');
const player2NameElement = document.getElementById('player2').querySelector('h2');

editNamesBtn.addEventListener('click', () => {
    const newPlayer1Name = prompt("Enter Player 1's Name:");
    const newPlayer2Name = prompt("Enter Player 2's Name:");
    
    if (newPlayer1Name) {
        player1NameElement.textContent = newPlayer1Name;
    }
    
    if (newPlayer2Name) {
        player2NameElement.textContent = newPlayer2Name;
    }
});

function determineWinner() {
    if (player1Score > player2Score) {
        alert(`${player1NameElement.textContent} wins!`);
    } else if (player2Score > player1Score) {
        alert(`${player2NameElement.textContent} wins!`);
    } else {
        alert("It's a tie!");
    }
}

rollBtn.addEventListener('click', () => {
    const diceValue = Math.floor(Math.random() * 6) + 1;
    if (currentPlayer === 1) {
        player1Score += diceValue;
        score1.textContent = player1Score;
    } else {
        player2Score += diceValue;
        score2.textContent = player2Score;
    }

    determineWinner();
    currentPlayer = currentPlayer === 1 ? 2 : 1; // Toggle players
});

newGameBtn.addEventListener('click', () => {
    player1Score = 0;
    player2Score = 0;
    score1.textContent = player1Score;
    score2.textContent = player2Score;
    currentPlayer = 1;
});

// Winner determination logic (you can keep one of these)
const winnerSection = document.getElementById('winnerSection');
const winnerText = document.getElementById('winner');

function determineWinner() {
    if (player1Score > player2Score) {
        winnerText.textContent = `${player1NameElement.textContent} wins! 🏆`;
    } else if (player2Score > player1Score) {
        winnerText.textContent = `${player2NameElement.textContent} wins! 🏆`;
    } else {
        winnerText.textContent = "It's a tie!";
    }

    winnerSection.style.display = 'block';
}
// Initialize variables to track rolls for each player

