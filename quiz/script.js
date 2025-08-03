const welcomeScreen = document.getElementById('welcome');
const quizScreen = document.getElementById('quiz');
const finishScreen = document.getElementById('finish-screen');
const currentQuestionNumber = document.getElementById('question-number-current');
const totalQuestionNumber = document.getElementById('question-number');
const questionStatement = document.getElementById('question-statement');
const startQuizButton = document.getElementById('start-quiz');
const checkAnswerButton = document.getElementById('check-answer');
const submitAnswerButton = document.getElementById('submit-answer');
const restartQuizButton = document.getElementById('restart-quiz');
const progressBar = document.getElementById('progress-bar');
const options = document.getElementById('options');
const option_a = document.getElementById('option-1');
const option_b = document.getElementById('option-2');
const option_c = document.getElementById('option-3');
const option_d = document.getElementById('option-4');
let currentQuestion = 1;
let currentAnswer = -1;
let checkedAnswer = false;

questions = [
    "Whats your age range?",
    "Whats your favourite food?",
    "Whats your favourite colour?",
    "Whats your favourite animal?",
    "Whats your favourite movie?"
]

answers = [
    {
        "18-25" : true,
        "26-35" : false,
        "36-45" : false,
        "46-55" : false,
    },
    {
        "Italian" : false,
        "Indian" : true,
        "Chinese" : false,
        "Japanese" : false,
    },
    {
        "Red" : true,
        "Blue" : false,
        "Green" : false,
        "Yellow" : false,
    },
    {
        "Dog" : false,
        "Cat" : true,
        "Bird" : false,
        "Fish" : false,
    },
    {
        "Harry Potter" : false,
        "Spiderman" : true,
        "The Lord of the Rings" : false,
        "The Matrix" : false,
    }
]

function updateOptions() {
    option_a.innerHTML = [Object.keys(answers[currentQuestion - 1])[0]];
    option_b.innerHTML = [Object.keys(answers[currentQuestion - 1])[1]];
    option_c.innerHTML = [Object.keys(answers[currentQuestion - 1])[2]];
    option_d.innerHTML = [Object.keys(answers[currentQuestion - 1])[3]];
}

startQuizButton.addEventListener('click', startQuiz);

const optionsList = [option_a, option_b, option_c, option_d];
    optionsList.forEach((option, index) => {
        option.addEventListener('click', () => {
            optionsList.forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
            checkedAnswer = true;
            currentAnswer = index;
    })});

function startQuiz() {
    const totalQuestions = questions.length;
    console.log("Hello")
    welcomeScreen.classList.remove('active');
    quizScreen.classList.add('active');
    let progressPercentage = Math.round(((100 * currentQuestionNumber) / totalQuestions));
    currentQuestionNumber.innerHTML = currentQuestion;
    progressBar.style.width = progressPercentage + "%";
    questionStatement.innerHTML = questions[currentQuestion - 1];
    
    updateOptions();
        if(checkedAnswer ) {
            submitAnswerButton.addEventListener('click', () => {
                currentQuestion++;
                if(currentQuestion > totalQuestions) {
                    quizScreen.classList.remove('active');
                    finishScreen.classList.add('active');
                    totalQuestionNumber.innerHTML = totalQuestions;
                    currentQuestionNumber.innerHTML = currentQuestion - 1;
                    return;
                }
                currentQuestionNumber.innerHTML = currentQuestion;
                // console.log(currentQuestion);
                progressPercentage = Math.round(((100 * currentQuestion) / totalQuestions));
                progressBar.style.width = progressPercentage + "%";
                questionStatement.innerHTML = questions[currentQuestion - 1];
                updateOptions();

            })
        }
}