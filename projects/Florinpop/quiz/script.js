const quizData = [
    {
        question: 'How old is Janice?',
        a: '60',
        b: '61',
        c: '62',
        d: '63',
        correct: 'c'
    }, {
        question: 'What is the worst hero in Dota 2?',
        a: 'Techies',
        b: 'Mirana',
        c: 'Viper',
        d: 'Tinker',
        correct: 'a'
    }, {
        question: 'Who is the president of the United States?',
        a: 'Jo Mama',
        b: 'Joe Biden',
        c: 'Donald Trump',
        d: 'Joaquin Phoenix',
        correct: 'b'
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
]

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

let currentQuiz = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    currentQuestion++;
}

