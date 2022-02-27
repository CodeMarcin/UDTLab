import React, {
  useContext,
  useState,
  useEffect,
  useCallback,
  useRef,
} from 'react';

import ExamContext from './ExamContext';

import styles from './css/ExamSingleQst.module.css';

const ExamSingleQst = ({
  id,
  question,
  answers,
  correctAnswer,
  userAnswer,
  index,
  examEnd,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const examContext = useContext(ExamContext);

  // ! Restart aktualnie klikniętej odpowiedzi jeśli licznik odpowiedzi wynosi 0
  const resetSelectedAnswerHandler = useCallback(() => {
    if (examContext.totalUserAnswers === 0) {
      setSelectedAnswer('');
    }
  }, [examContext.totalUserAnswers]);

  useEffect(() => {
    resetSelectedAnswerHandler();
  }, [resetSelectedAnswerHandler]);
  // ! --------------------------------------------------------------------------

  // ! Ustawienie aktualnie klikniętej odpowiedzi
  const toogleSelectedAnswer = (event) => {
    if (event.target.value === selectedAnswer) {
      setSelectedAnswer('');
    } else if (event.target.value === event.target.getAttribute('id')) {
      setSelectedAnswer(event.target.value);
    }
  };
  // ! -----------------------------------------

  return (
    <div className={styles['singleQuestion']}>
      <h3 className={styles['question']}>
        {index + 1}. {question}
      </h3>
      <ul>
        {Object.entries(answers).map(([key, value]) => {
          return (
            // !  Wyświetlanie pytań podczas egzaminu
            <li>
              {!examEnd ? (
                <label>
                  <span className={selectedAnswer === key && styles['active']}>
                    {key}
                  </span>
                  <span className={selectedAnswer === key && styles['active']}>
                    {value}
                  </span>
                  <input
                    onClick={(event) => {
                      toogleSelectedAnswer(event);
                      examContext.dispatchExam({
                        type: 'ADD_ANSWER',
                        answer: event,
                      });
                    }}
                    type="radio"
                    id={key}
                    value={key}
                    name={id}
                  />
                </label>
              ) : (
                // ! Wyświetlanie pytań podczas zakończenia egzaminu
                <label>
                  <span
                    className={
                      userAnswer[id] === correctAnswer && userAnswer[id] === key
                        ? styles['correct']
                        : correctAnswer === key
                        ? !userAnswer.hasOwnProperty(id)
                          ? ''
                          : styles['correct']
                        : userAnswer[id] !== correctAnswer &&
                          key === userAnswer[id] &&
                          styles['notCorrect']
                    }
                  >
                    {key}
                  </span>
                  <span
                    className={
                      userAnswer[id] === correctAnswer && userAnswer[id] === key
                        ? styles['correct']
                        : correctAnswer === key
                        ? !userAnswer.hasOwnProperty(id)
                          ? ''
                          : styles['correct']
                        : userAnswer[id] !== correctAnswer &&
                          key === userAnswer[id] &&
                          styles['notCorrect']
                    }
                  >
                    {value}
                  </span>
                  <input type="radio" id={key} value={key} name={id} />
                </label>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ExamSingleQst;
