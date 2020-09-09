import React, { useState } from 'react';
import { Wrapper, GlobalStyles } from './App.styles'

// components
import QuestionCard from './components/QuestionCard'

// API 
import { QuestionState, fetchQuizQuestions, Difficulty } from './API'
import { shuffleArray } from './utils'

export type AnswerObject = { 
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}


const TOTAL_QUESTIONS = 10

function App() {

  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [quit, setQuit] = useState(false);
  const [lifeline, setLifeLine] = useState(false);
  const [expertLifeline, setExpertLifeLine] = useState(false);
  const [expertAnswer, setExpertAnswer] = useState('')

  console.log(questions)


  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY);
    setQuestions(newQuestions);

    setScore(0);
    setUserAnswers([]);
    setNumber(0);

    setLoading(false);
    setQuit(false);

  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      // User answer
      const answer = e.currentTarget.value;
      // Check for correct answer
      const correct = answer === questions[number].correct_answer;
      // Set score if correct
      if (correct) 
        setScore(prev => prev + 1 );
      // Save answer object
      const answerObject = {
        question: questions[number].question,
        answer: answer,
        correctAnswer: questions[number].correct_answer,
        correct: correct
      }
      setUserAnswers((prev) => [...prev, answerObject])
    }
  }

  const nextQuestion = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Move to next question if not already on last question
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true)
    }
    else {
      setNumber(nextQuestion);
    }
  }

  const quitTrivia = (e: React.MouseEvent<HTMLButtonElement>) => {
    setGameOver(true);
    setQuit(true);
    setLifeLine(false);
    setExpertLifeLine(false)
  }

  const useLifeLine = (e: React.MouseEvent<HTMLButtonElement>) => {
    setLifeLine(true);
    let _correctAnswer = questions[number].correct_answer;
    let _answers = questions[number].answers;
    // _answers = shuffleArray(_answers)
    let idx = _answers.indexOf(_correctAnswer)
    _answers.splice(idx, 1);
    _answers.splice(1, 2)
    _answers.push(_correctAnswer)    
    _answers = shuffleArray(_answers)

    questions[number].answers = _answers;
    setQuestions(questions)

  }

  const useExpertLifeline = (e: React.MouseEvent<HTMLButtonElement>) => {
    setExpertLifeLine(true);
    setExpertAnswer(questions[number].correct_answer)
  }


  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <h1>React Quiz</h1>
        
        { gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <button className="start" onClick={startTrivia}>
          Start
        </button> ) : null }

        <div style={{ display: 'flex' }}>

        { !gameOver || quit ? <p className="score"> Score: {score} </p> : null }

        { !gameOver && !loading ? (
        <button className="giveup" onClick={quitTrivia}>
          Give up!
        </button> ) : null }


        </div>

        <div className="lifelines" style={{ display: 'flex'}}>

          { !gameOver && !loading ? (
          <button disabled={lifeline} className="btnLifeline" onClick={useLifeLine}>
            50-50
          </button> ) : null }

          { !gameOver && !loading ? (
          <button disabled={expertLifeline} className="btnLifeline" onClick={useExpertLifeline}>
            Ask the Expert
          </button> ) : null }


        </div>

        { loading ? <p> Loading Question .... </p> : null }

        { !loading && !gameOver ? (
        <QuestionCard 
          questionNumber = {number + 1}
          totalQuesitons = {TOTAL_QUESTIONS}
          question = {questions[number].question}
          answers = {questions[number].answers}
          userAnswer = {userAnswers ? userAnswers[number] : undefined}
          callback = {checkAnswer}
        /> ) : null }

        { expertLifeline && !gameOver && !loading ? (
            <div className="expertAnswer">
              The expert is suggesting {expertAnswer}.
            </div>
          ) : null
        }


        { !gameOver && !loading && userAnswers.length === number + 1 && number !== TOTAL_QUESTIONS - 1 ? (
        <button className="next" onClick={nextQuestion}>
          Next Question
        </button> ) : null }

      </Wrapper>
    </>
  );
}

export default App;
