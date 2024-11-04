const questions = [
    {
        question: "What is the capital of France?",
        answers: ["London", "Berlin", "Paris", "Madrid"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Mars", "Venus", "Jupiter", "Saturn"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the largest mammal in the world?",
        answers: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correctAnswer: "Blue Whale"
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
        correctAnswer: "Leonardo da Vinci"
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: ["Go", "Gd", "Au", "Ag"],
        correctAnswer: "Au"
    },
    {
        question: "Who is the President of USA",
        answers: ["Joe Biden", "Donald Trump", "Philip Ojedokun", "Hillary Clinton"],
        correctAnswer: "Joe Biden"
    },
    {
        question: "Which country has the highest life expectancy?",
        answers: ["Singapore", "Hong Kong", "Lagos", "Texas"],
        correctAnswer: "Hong Kong"
    },
    {
        question: "What is acrophobia a fear of",
        answers: ["Height", "Spiders", "Water", "snakes"],
        correctAnswer: "Height"
    },
    {
        question: "What is a word, phrase, number, or other sequence of characters that reads the same backward as forward?",
        answers: ["Concatination", "Hyperbole", "synonym", "Palindrome"],
        correctAnswer: "Palindrome"
    },
    {
        question: "What is the name of the Chinese philosophical system that emphasizes harmony with nature?",
        answers: ["Budihism", "Taoism", "Adventist", "Hinduhism"],
        correctAnswer: "Taoism"
    },
    {
        question: "What city is known as The Eternal City",
        answers: ["Cairo", "Rome", "Mongolia", "Tibet"],
        correctAnswer: "Rome"
    }
];

let currentQuestion = 0;
let score = 0;
let timer;
let playerName = "";
let selectedQuestions = [];
const questionsPerGame = 6;

const welcomeScreenEl = document.getElementById('welcome-screen');
const gameScreenEl = document.getElementById('game-screen');
const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const resultEl = document.getElementById('result');
const scoreEl = document.getElementById('score-value');
const timerEl = document.getElementById('time-value');
const playerNameEl = document.getElementById('player-name');

function initializeGame() {

    welcomeScreenEl.style.display = 'block';
    gameScreenEl.style.display = 'none';
    

    document.getElementById('start-button').addEventListener('click', () => {
        const nameInput = document.getElementById('name-input');
        if (nameInput.value.trim() === '') {
            alert('Please enter your name to start the quiz!');
            return;
        }
        playerName = nameInput.value.trim();
        playerNameEl.textContent = `Player: ${playerName}`;
        welcomeScreenEl.style.display = 'none';
        gameScreenEl.style.display = 'block';
        startQuiz();
    });
}

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    selectedQuestions = [...questions];
    shuffleQuestions();
    selectedQuestions = selectedQuestions.slice(0, questionsPerGame);
    displayQuestion();
}

function shuffleQuestions() {
    for (let i = selectedQuestions.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [selectedQuestions[i], selectedQuestions[j]] = [selectedQuestions[j], selectedQuestions[i]];
    }
}

function displayQuestion() {
    const question = selectedQuestions[currentQuestion];
    questionEl.textContent = `Question ${currentQuestion + 1} of ${questionsPerGame}: ${question.question}`;
    answersEl.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.addEventListener('click', () => checkAnswer(answer));
        answersEl.appendChild(button);
    });
    resultEl.textContent = '';
    startTimer();
}

function checkAnswer(selectedAnswer) {
    clearInterval(timer);
    const question = selectedQuestions[currentQuestion];
    if (selectedAnswer === question.correctAnswer) {
        score += 10;
        resultEl.textContent = "Correct!";
    } else {
        resultEl.textContent = `Wrong! The correct answer is ${question.correctAnswer}.`;
    }
    scoreEl.textContent = score;
    setTimeout(moveToNextQuestion, 2000);
}

function moveToNextQuestion() {
    currentQuestion++;
    if (currentQuestion < questionsPerGame) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

function startTimer() {
    let timeLeft = 10;
    timerEl.textContent = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        timerEl.textContent = timeLeft;
        if (timeLeft === 0) {
            clearInterval(timer);
            resultEl.textContent = "Time's up!";
            setTimeout(moveToNextQuestion, 2000);
        }
    }, 1000);
}

function endQuiz() {
    if (score == 10) {
        questionEl.textContent = "Quiz completed!";
        answersEl.innerHTML = '';
        resultEl.textContent = ` ${playerName}! Your final score is ${score} out of ${questionsPerGame * 10}.`;
        timerEl.textContent = '';
    }  else if (score == 20) {
        questionEl.textContent = "Quiz completed!";
        answersEl.innerHTML = '';
        resultEl.textContent = ` ${playerName}! Your final score is ${score} out of ${questionsPerGame * 10}.`;
        timerEl.textContent = '';
    }  else if (score == 30) {
        questionEl.textContent = "Quiz completed!";
        answersEl.innerHTML = '';
        resultEl.textContent = ` ${playerName}! Your final score is ${score} out of ${questionsPerGame * 10}.`;
        timerEl.textContent = '';
    }  else if (score == 40) {
        questionEl.textContent = "Quiz completed!";
        answersEl.innerHTML = '';
        resultEl.textContent = ` ${playerName}! Your final score is ${score} out of ${questionsPerGame * 10}.`;
        timerEl.textContent = '';
    } else if (score == 50) {
        questionEl.textContent = "Quiz completed!";
        answersEl.innerHTML = '';
        resultEl.textContent = `Very good ${playerName}! Your final score is ${score} out of ${questionsPerGame * 10}.`;
        timerEl.textContent = '';
    }  else if (score == 60) {
        questionEl.textContent = "Quiz completed!";
        answersEl.innerHTML = '';
        resultEl.textContent = `Excellent ${playerName}! Your final score is ${score} out of ${questionsPerGame * 10}.`;
        timerEl.textContent = '';
    }

    
    

    const playAgainButton = document.createElement('button');
    playAgainButton.textContent = 'Play Again';
    playAgainButton.addEventListener('click', () => {
        welcomeScreenEl.style.display = 'block';
        gameScreenEl.style.display = 'none';
        document.getElementById('name-input').value = '';
    });
    answersEl.appendChild(playAgainButton);
}

initializeGame();