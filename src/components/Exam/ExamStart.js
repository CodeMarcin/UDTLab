import React, { useContext } from 'react';
import { testExam } from '../../arrays/testExam-array';
import ExamContext from './ExamContext';
import ExamSingleQst from './ExamSingleQst';
import BottonModal from '../CardContainer/BottonModal';

const ExamStart = () => {
  const examContext = useContext(ExamContext);

  return (
    <>
      <form>
        {testExam.map((item, index) => {
          const { id, question, answers, correctAnswer } = item;
          return (
            <ExamSingleQst
              key={id}
              id={id}
              question={question}
              answers={answers}
              correctAnswer={correctAnswer}
              index={index}
              examEnd={false}
            />
          );
        })}
      </form>
      <BottonModal>
        <button
          onClick={() =>
            examContext.dispatchExam({
              type: 'END',
              subAction: 'SHOW_MODAL',
            })
          }
          className="btn btn-two"
        >
          Zakończ
        </button>

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
          Pytania: <strong>{examContext.totalUserAnswers}</strong> / 15
        </p>
        <p>
          Czas: <strong>26:21</strong>
        </p>
      </BottonModal>
    </>
  );
};

export default ExamStart;
