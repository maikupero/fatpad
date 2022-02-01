const quizData = [
    {
        question: 'Who is the Emperor of TheBoys?',
        a: 'Wolfgang',
        b: 'Fropy',
        c: 'Bottica',
        d: 'There is no Emperor of TheBoys.',
        correct: 'a'
    }, {
        question: 'Which garbage hero should you hate the most?',
        a: 'Techies',
        b: 'Shadow Fiend',
        c: 'Windrunner',
        d: 'Tinker',
        correct: 'a'
    }, {
        question: 'If TheBoys play 4 games of Dota 2, how many wins do they procure?',
        a: '1',
        b: '2',
        c: '3',
        d: '4',
        correct: 'd'
    }, {
        question: 'Who will win TI10?',
        a: 'OG',
        b: 'EG',
        c: 'IG',
        d: 'VG',
        correct: 'a'
    }, {
        question: 'Which year did the whole COVID thing start?',
        a: '1492',
        b: '2019',
        c: '2020',
        d: '2021',
        correct: 'b'
    }
];

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
    //check to see the answer
    const answer = getSelected();
    
    console.log(answer);

    if(answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if(answer) {
            if (currentQuiz < quizData.length) {
                loadQuiz();
            } else {
                quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly.</h2> <button onClick="location.reload()">Reload</button>`;
            }
        }
    }
});
