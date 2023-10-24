const rollBtn = document.getElementById('rollBtn');
const newGameBtn = document.getElementById('newGameBtn');
const score1 = document.getElementById('score1');
const score2 = document.getElementById('score2');
let player1Score = 0;
let player2Score = 0;
let currentPlayer = 1;

// Ask for player names
const player1Name = prompt("Enter Player 1's Name:");
const player2Name = prompt("Enter Player 2's Name:");
document.getElementById('player1').querySelector('h2').textContent = player1Name;
document.getElementById('player2').querySelector('h2').textContent = player2Name;

function determineWinner() {
    if (player1Score > player2Score) {
        alert(`${player1Name} wins!`);
    } else if (player2Score > player1Score) {
        alert(`${player2Name} wins!`);
    } else {
        alert("It's a tie!");
    }
}

rollBtn.addEventListener('click', () => {
    const diceValue = Math.floor(Math.random() * 6) + 1;
    if (currentPlayer === 1) {
        player1Score += diceValue;
        score1.textContent = player1Score;
        currentPlayer = 2;
    } else {
        player2Score += diceValue;
        score2.textContent = player2Score;
        determineWinner();
    }
});

newGameBtn.addEventListener('click', () => {
    player1Score = 0;
    player2Score = 0;
    score1.textContent = player1Score;
    score2.textContent = player2Score;
    currentPlayer = 1;
});
// Existing code for HTML elements and player scores

const winnerSection = document.getElementById('winnerSection');
const winnerText = document.getElementById('winner');

function determineWinner() {
    if (player1Score > player2Score) {
        winnerText.textContent = `${player1Name} wins!`;
    } else if (player2Score > player1Score) {
        winnerText.textContent = `${player2Name} wins!`;
    } else {
        winnerText.textContent = "It's a tie!";
    }

    // Display the winner section
    winnerSection.style.display = 'block';
}

// Attach event listener to the roll button (existing code)
rollBtn.addEventListener('click', () => {
    const diceValue = Math.floor(Math.random() * 6) + 1;
    if (currentPlayer === 1) {
        player1Score += diceValue;
        score1.textContent = player1Score;
        currentPlayer = 2;
    } else {
        player2Score += diceValue;
        score2.textContent = player2Score;
        determineWinner();
    }
});

// Attach event listener to the new game button (existing code)
