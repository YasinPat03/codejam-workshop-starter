import { useState } from "react";
export default function Question( {question, correctAnswer, incorrectAnswers, submitAnswer }) {
    const answers = [ correctAnswer, ...incorrectAnswers ];

    const [ selectedAnswer, setSelectedAnswer] = useState("");

    return (
        <div className="question">
            <h1>{question}</h1>
            {answers.map(answer => (
                <button onClick={() => {
                    setSelectedAnswer(answer)
                }}>{answer}</button>
            ))}
            <button onClick={() => {
                submitAnswer(selectedAnswer == correctAnswer)
            }}>Submit</button>
        </div>
    );
}
