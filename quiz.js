const quizApp = [{
    question: "1. Who is the father of Computers?",
    a: "James Gosling",
    b: "Charles Babbage",
    c: "Dennis Ritchie",
    d: "Bjarne Stroustrup",
    correct: "b"
},
{
    question: "2. What is the full form of CPU?",
    a: "computer Processing Unit",
    b: "computer Principle Unit",
    c: "central Processing Unit",
    d: "control Processing Unit",
    correct: "c"
},
{
    question: "3. Which of the following language does the computer understand?",
    a: "Computer understands only C++ Language",
    b: "Computer understands only Assembly Language",
    c: "Computer understands only Binary Language",
    d: "Computer understands only Machine Language",
    correct: "d"
},
{
    question: "4. Which of the following computer language is written in binary codes only?",
    a: "Pascal",
    b: "Machine language",
    c: "C",
    d: "C#",
    correct: "b"
},
{
    question: "5. Which of the following is the brain of the computer?",
    a: "Central Processing Unit",
    b: "Memory",
    c: "Arithmetic and Logic unit",
    d: "Control unit",
    correct: "a"
},
{
    question: "6. Which of the following is not a characteristic of a computer?",
    a: "Versatility",
    b: "Accuracy",
    c: "Diligence",
    d: "I.Q.",
    correct: "d"
},
{
    question: "7. Which of the following is the smallest unit of data in a computer?",
    a: "Bit",
    b: "KB",
    c: "Nibble",
    d: "Byte",
    correct: "a"
},
{
    question: "8. A program that can execute high-level language programs.",
    a: "Compiler",
    b: "Interpreter",
    c: "Sensor",
    d: "Circuitry",
    correct: "b"
},
{
    question: "9. Which of the following is not a bitwise operator?",
    a: " |",
    b: " ^",
    c: " .",
    d: " <<",
    correct: "c"
},
{
    question: "10. VDU stands for __________?",
    a: "Virtual Display Unit",
    b: "Visual Display Unit",
    c: "Virtual Detection Unit",
    d: "Visual Detection Unit",
    correct: "b"
},];
let quiz = document.getElementById("quiz")
let answerEl = document.querySelectorAll('.answer')
let questionEl = document.getElementById("question")
let a = document.getElementById("a_text")
let b = document.getElementById("b_text")
let c = document.getElementById("c_text")
let d = document.getElementById("d_text")
let submitBtn = document.getElementById("submit")

let firstIndx = 0
let score = 0
function loadQuiz() {
    deselectAns()
    const currentQuestion = quizApp[firstIndx]
    questionEl.innerHTML = currentQuestion.question
    a.innerHTML = currentQuestion.a
    b.innerHTML = currentQuestion.b
    c.innerHTML = currentQuestion.c
    d.innerHTML = currentQuestion.d
}
loadQuiz()
function deselectAns() {
    answerEl.forEach(answerEl => answerEl.checked = false)
}
function selectAns() {
    let answer
    answerEl.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener("click", () => {
    const answer = selectAns()
    if (answer) {
        if (answer === quizApp[firstIndx].correct) {
            score++
            console.log(score)
        }
        firstIndx++
        console.log(firstIndx)
        if (firstIndx < quizApp.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `<h1> You answered ${score}/${quizApp.length} questions correctly</h1>
            <button id="submit" onclick="location.reload()">Reload</button>`
        }
    }
})
