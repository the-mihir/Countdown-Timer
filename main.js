const quizData = [

    
    {
        question: 'Indipendent Day of Bangladesh',
        a: '16 December',
        b: '21 February',
        c: '10 April',
        d: '26 March',
        correct: 'd'
    },

    {
        question: 'What is the official Name on BD? ',
        a: 'Repablic of Bangladesh',
        b: 'Bangladesh',
        c: 'Peoples Republic of Bangladesh',
        d: 'BD Country',
        correct: 'c'
    },

    {
        question: 'National Anthem writer',
        a: 'Rabindranath Tagor',
        b: 'Kazi Nazrul Islam',
        c: 'Jasim Uddin',
        d: 'Shek Mujibur Rahman',
        correct: 'a'
    },

    {
        question: 'Name of president of bangladesh?',
        a: 'Shek Hasina',
        b: 'Abdul Hamid',
        c: 'Khaleda Zia',
        d: 'Jillur Pahman',
        correct: 'b'
    },
    
    {
        question: 'Currency name of bangladesh?',
        a: 'Bangladeshi Taka',
        b: 'bangladeshi USD',
        c: 'bangladeshi Rupi',
        d: 'Tk',
        correct: 'a'
    },


]

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                <button onclick="location.reload()">Reload</button>`;
        }
    }
});