export default function Result({ score, questionCount}){
    return (
        <div className="result">
            <h1>You scored {score}/{questionCount}</h1>
        </div>
    );
}
