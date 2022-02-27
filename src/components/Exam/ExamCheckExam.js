import React, { useState, useContext, useEffect, useMemo } from 'react';

import BottonModal from '../CardContainer/BottonModal';

import ExamContext from './ExamContext';

import { testExam } from '../../arrays/testExam-array';

import ExamSingleQst from './ExamSingleQst';
const ExamCheckExam = () => {
  const examContext = useContext(ExamContext);

  let correctAnswers = 0;

  return (
    <>
      {testExam.map((item, index) => {
        const { id, question, answers, correctAnswer } = item;
        
        // * Zwiększenie liczby poprawnych odpowiedzi
        examContext.exam.userAnswers[id] === correctAnswer && correctAnswers++;

        return (
          <ExamSingleQst
            key={id}
            id={id}
            question={question}
            answers={answers}
            correctAnswer={correctAnswer}
            userAnswer={examContext.exam.userAnswers}
            index={index}
            examEnd={true}
          />
        );
      })}
      <BottonModal>

        <button
          onClick={() =>
            examContext.dispatchExam({
              type: 'RESET',
            })
          }
          className="btn btn-two"
        >
          Zacznij od nowa
        </button>

        <p>
          Twój wynik: <strong>{correctAnswers}</strong> / 15
        </p>
      
      </BottonModal>
    </>
  );
};

export default ExamCheckExam;
