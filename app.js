//Creating objects of scores being displayed
const scorePlayer1 = document.querySelector('#scorePlayer1');
const scorePlayer2 = document.querySelector('#scorePlayer2');
const winner = document.querySelector('#winner');

//Creating object of dropdown
const roundsNum = document.querySelector('#roundsNum');

//Creating objects of action buttons
const addPlayer1 = document.querySelector('button[id="addPlayer1"]');
const addPlayer2 = document.querySelector('button[id="addPlayer2"]');
const reset = document.querySelector('#reset');

//Adding functionalities to action buttons
addPlayer1.addEventListener('click', function(e) {
    scorePlayer1.innerText = parseInt(scorePlayer1.innerText)+1;
    checkScore();

});

addPlayer2.addEventListener('click', function(e) {
    scorePlayer2.innerText = parseInt(scorePlayer2.innerText)+1;
    checkScore();
});

reset.addEventListener('click', function(e) {
    addPlayer1.disabled = false;
    addPlayer2.disabled = false;
    addPlayer1.classList.remove('disabledButton');
    addPlayer2.classList.remove('disabledButton');
    scorePlayer1.style.color = 'black';
    scorePlayer2.style.color = 'black';
    scorePlayer1.innerText = '0';
    scorePlayer2.innerText = '0';
    winner.classList.remove(...winner.classList);
    winner.innerText = '';
});

//Defining a function to check for the winner 
function checkScore() {
    const selectedRounds = parseInt(roundsNum.options[roundsNum.selectedIndex].innerText);
    if (parseInt(scorePlayer1.innerText) === selectedRounds || parseInt(scorePlayer2.innerText) === selectedRounds) {
        addPlayer1.disabled = true;
        addPlayer2.disabled = true;
        addPlayer1.classList.add('disabledButton');
        addPlayer2.classList.add('disabledButton');

        if (parseInt(scorePlayer1.innerText) >  parseInt(scorePlayer2.innerText)) {
            scorePlayer1.style.color = 'rgb(0, 103, 43)';
            scorePlayer2.style.color = 'rgb(112, 0, 0)';
            winner.classList.add('winnerPlayer1');
            winner.innerText = 'Player 1 Wins!';
        }
        else {
            scorePlayer2.style.color = 'rgb(0, 103, 43)';
            scorePlayer1.style.color = 'rgb(112, 0, 0)';
            winner.classList.add('winnerPlayer2');
            winner.innerText = 'Player 2 Wins!';
        }
    }
}
