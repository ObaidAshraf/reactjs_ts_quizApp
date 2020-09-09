import React from 'react';
import { AnswerObject } from '../App'

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNumber: number;
    totalQuesitons: number;
}

const QuestionCard: React.FC<Props> = ({ 
    question, 
    answers, 
    callback, 
    userAnswer, 
    questionNumber, 
    totalQuesitons 
}) => {
    return (
        <div className="">
            <p className="number"> Question: {questionNumber} / {totalQuesitons} </p>
            <p className="question" dangerouslySetInnerHTML={{__html: question }} />
            <div>
                { answers.map(answer => (
                    <div className="answer" key={answer} >
                        <button disabled={userAnswer ? true : false} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html: answer }} />
                        </button>
                    </div>
                )) }
            </div>
        </div>
    )
}

export default QuestionCard