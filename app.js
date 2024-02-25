const squares = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const size = document.querySelector('.size')
const time = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitsq = 0
let currentTime = 60;
function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })
    let randomSq = squares[Math.floor(Math.random() * 9)]
    randomSq.classList.add('mole');
    hitsq = randomSq.id;
}
squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitsq) {
            score.classList.add('size')
            result++;
            score.textContent = result;
            hitsq = null;
            setTimeout(() => {
                score.classList.remove('size');
            }, 500);
        }
    })
})
function moveMole() {
    let timer = null
    timer = setInterval(randomSquare, 500)
}
moveMole()
function countDown() {
    currentTime--;
    time.textContent = currentTime;
    if (currentTime == 0) {
        clearInterval(countDownTimer)
        alert('GAME OVER!' + result)
        currentTime = 60;
        score = 0;
    }
    time.classList.add('size')
    setTimeout(() => {
        time.classList.remove('size');
    }, 1000);
}
let countDownTimer = setInterval(countDown, 500)