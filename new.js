const quizData = [{
  question: " How many times has India won the Cricket World Cup?",
  a: "0",
  b: "3",
  c: "5",
  d: "2",
  correct: "d",
},
{
  question: "Which Indian cricketer is also known as the “God of Cricket”?",
  a: "Sachin Tendulkar",
  b: "MS Dhoni",
  c: "Virat Kholi",
  d: "Yuvraj Singh",
  correct: "a",
},
{
  question: " What is the moniker given to the Indian cricket team?",
  a: "Men in Blue",
  b: "The Team of Lions",
  c: "The Indian Army ",
  d: "None of the above",
  correct: "a",
},
{
  question: "Indian cricket team won its second world cup in which year ?",
  a: "2007",
  b: "2011",
  c: "2013",
  d: "2015",
  correct: "b",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
  return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
  const data = quizData[index]
  const ans = getAnswer()
  if (ans === data.correct) {
      correct++;
  } else {
      incorrect++;
  }
  index++;
  loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
  (inputEl) => {
      if (inputEl.checked) {
          ans = inputEl.value;
      }
  }
)
return ans;
}

const reset = () => {
allInputs.forEach(
  (inputEl) => {
      inputEl.checked = false;
  }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
  <div class="col">
      <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
  </div>
`
}
loadQuestion(index);