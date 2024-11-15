import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Question from './components/Question'
import Result from './components/Result'
import './App.css'

let data;
let promise = fetch("https://opentdb.com/api.php?amount=10&category=18")
promise.then(response => response.json()).then(json => {
  data = json;
});



function App() {

  if (!data) throw promise;

  const [ questionIndex, setQuestionIndex] = useState(0);
  const [ score, setScore] = useState(0);
  const questionCount = data.results.length;

  const nextQuestion = correct => {
    setQuestionIndex (questionIndex + 1);
    if (correct) setScore(score + 1);
  }


  return(
    <div>
      {questionCount == questionIndex ? <Result score={score} questionCount={questionCount} /> : 
      (
      <Question 
        question={data.results[questionIndex].question}
        correctAnswer={data.results[questionIndex].correct_answers}
        incorrectAnswers={data.results[questionIndex].incorrect_answers}
        submitAnswer = {nextQuestion}
        />
      )}
    </div>
  )
}

export default App