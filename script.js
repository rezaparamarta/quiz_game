// DOM Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");


const quizQuestions = [
    {
        question: "What is the capital of France?",
        answers: [
            { text: "London", correct: false},
            { text: "Berlin", correct: false},
            { text: "Paris", correct: false},
            { text: "Madrid", correct: false}
        ],
    },

    {

    },

    {

    },

    {

    },

    {

    },

];

let currentQuestionIndex = 0;
let score = 0;
