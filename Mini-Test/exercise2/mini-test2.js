const quizes = [
  {
    id: 1,
    question: "1 + 1 = ?",
    answers: [1, 2, 3, 4],
  },
  {
    id: 2,
    question: "2 + 2 = ?",
    answers: [2, 3, 4, 5],
  },
  {
    id: 3,
    question: "3 + 3 = ?",
    answers: [3, 4, 5, 6],
  },
  {
    id: 4,
    question: "5 x 5 = ?",
    answers: [25, 10, 125, 15],
  },
];

const btn = document.getElementById("btn");
const quizContainer = document.querySelector(".quiz-container");

function renderQuizzes() {
  quizContainer.innerHTML = "";
  // Render từng quiz
  quizes.forEach((quiz) => {
    const quizItem = document.createElement("div");
    quizItem.classList.add("quiz-item");

    //Tạo câu hỏi
    const quizTitle = document.createElement("h3");
    quizTitle.textContent = `Câu ${quiz.id} : ${quiz.question}`;
    quizItem.appendChild(quizTitle);

    // Tạo container cho câu trả lời
    const quizAnswer = document.createElement("div");
    quizAnswer.classList.add("quiz-answer");

    // Tạo các lựa chọn câu trả lời
    quiz.answers.forEach((answer, index) => {
      const answerItem = document.createElement("div");
      answerItem.classList.add("quiz-answer-item");

      const input = document.createElement("input");
      input.type = "radio";
      input.name = quiz.id;
      input.id = `quiz-${quiz.id}-answer-${index}`;

      const label = document.createElement("label");
      label.textContent = answer;
      label.htmlFor = `quiz-${quiz.id}-answer-${index}`;

      answerItem.appendChild(input);
      answerItem.appendChild(label);
      quizAnswer.appendChild(answerItem);
    });

    quizItem.appendChild(quizAnswer);
    quizContainer.appendChild(quizItem);
  });
}

function randomAnswers() {
  quizes.forEach((quiz) => {
    const radioButtons = document.querySelectorAll(`input[name="${quiz.id}"]`);
    radioButtons.forEach((radio) => {
      radio.checked = false;
    });
    const randomIndex = Math.floor(Math.random() * radioButtons.length);
    radioButtons[randomIndex].checked = true;
  });
}
btn.onclick = function () {
  randomAnswers();
};
document.addEventListener("DOMContentLoaded", renderQuizzes);
