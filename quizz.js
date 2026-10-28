import questions  from './questions.mjs';
let currentIndex = 0;
let selectedIndex = null;
let correctCount = 0;
const questionsArray = questions.questions;
const len = questionsArray.length;
const question = document.getElementById('question');
const answers = document.getElementById('answers');
const feedback = document.getElementById('feedback');
const count = document.getElementById('count');
const progress = document.getElementById('progress');
const nextButton = document.getElementById('next-btn');
console.log(len);
function renderQuestion() {
  const item = questionsArray[currentIndex];
  selectedIndex = null;
  count.textContent = `Question ${currentIndex + 1} of ${len}`;
  progress.style.width = `${(currentIndex + 1) / len * 100}%`;
  question.textContent = item.question;
  answers.replaceChildren(); // removes the old answer buttons/listeners
  item.options.forEach((option, index) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'choice';
  const label = document.createElement('span');
  label.className = 'letter';
  label.textContent = String.fromCharCode(65 + index);
  const content = document.createElement('span');
  content.textContent = option;
  button.append(label, content);
  button.addEventListener('click', () => selectAnswer(index));
  answers.appendChild(button);
  });
  feedback.hidden = true;
  feedback.textContent = '';
  feedback.className = 'feedback';
  nextButton.disabled = true;
  nextButton.textContent = currentIndex === len - 1 ? 'See Results' : 'Next Question';
}
function selectAnswer(index) {
  if (selectedIndex !== null) return;
  selectedIndex = index;
  const item = questionsArray[currentIndex];
  const isCorrect = index === item.correctIndex;
  if (isCorrect) correctCount++;
  [...answers.children].forEach((button, i) => {
  button.disabled = true;
  if (i === item.correctIndex) button.classList.add('correct');
  if (i === index && !isCorrect) button.classList.add('incorrect');
  });
  feedback.hidden = false;
  feedback.classList.toggle('wrong', !isCorrect);
  feedback.textContent = `${isCorrect ? 'Correct!' : 'Not quite.'} ${item.explanation}`;
  nextButton.disabled = false;
}
nextButton.addEventListener('click', () => {
  if (selectedIndex === null) return;
  if (currentIndex < len - 1) {
  currentIndex++;
  renderQuestion();
  } else {
  document.querySelector('.card-top').hidden = true;
  document.querySelector('.progress').hidden = true;
  document.getElementById('question-area').innerHTML = `<div class="done"><h1>Quiz complete</h1><p>You answered ${correctCount} of ${len} questions correctly.</p><button id="restart-btn">Try Again</button></div>`;
  document.getElementById('restart-btn').addEventListener('click', () => location.reload());
  }
});

renderQuestion();