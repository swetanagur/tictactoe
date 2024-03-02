let boxes = document.querySelectorAll('.box');
let resetBtnGame = document.querySelector('#reset');
let newBtnGame = document.querySelector('#newBtn');
let message = document.querySelector('.msg-winning > p');
let turnO = true;//playerO, playerX;
let count;

const winningPattern = [
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8]
];

const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    document.querySelector('.msg-winning').classList.add('hide');
    
}

boxes.forEach((box) => {
    box.addEventListener('click', (e) => {
        if (turnO) {
        box.innerText = 'O';
        turnO = false;
        } else {
        box.innerText = 'X';
        turnO = true;
       }
       box.disabled = true;
       count++;
       let isWinner = checkWinner();

       if ( count == 9 && !isWinner) {
        drawGame();
       }
       
    })
});

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = '';
    }
}

const drawGame = () => {
    document.querySelector('.msg-winning').classList.remove('hide');
    message.innerText = 'The Game is declared to be draw';
}

const checkWinner = () => {
     for (let pattern of winningPattern) {
     let pos0 = boxes[pattern[0]].innerText;
     let pos1 = boxes[pattern[1]].innerText;
     let pos2 = boxes[pattern[2]].innerText;
     if (pos0 !== '' && pos1 !== '' && pos2 !== '') {
        if (pos0 === pos1 && pos1 === pos2) {
            document.querySelector('.msg-winning').classList.remove('hide');
            message.innerText = `Congratulation & the Winner is ${pos0}`
            disableBoxes();
            return true
        } 
     }
    }
}

newBtnGame.addEventListener('click', resetGame);
resetBtnGame.addEventListener('click',resetGame);

