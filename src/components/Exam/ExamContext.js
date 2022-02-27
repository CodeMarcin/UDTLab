import React, { useState, useReducer, useEffect } from 'react';

const initialExam = {
  progress: false,
  end: false,
  examFully: false,
  showModal: false,
  userAnswers: {},
  correctAnswers: 0,
};

const examReducer = (state, action) => {
  switch (action.type) {
    // * Start egzaminu
    case 'START':
      return { ...state, progress: true };

    // * Dodaj pytanie
    case 'ADD_ANSWER':
      const key = action.answer.target.name;
      const value = action.answer.target.value;

      // * Sprawdzanie czy odpowiedź zaznaczona przez użytkownika nie została wcześniej zaznaczona i dodane do listy odpowiedzi. Jeśli tak to ją usuwa.
      if (value === state.userAnswers[key]) {
        const newUserAnswersState = { ...state.userAnswers };
        delete newUserAnswersState[key];
        return {
          ...state,
          userAnswers: { ...newUserAnswersState },
        };
      } else {
        return {
          ...state,
          userAnswers: { ...state.userAnswers, [key]: value },
        };
      }

    // * Reset egzaminu
    case 'RESET':
      return { ...initialExam, progress: true };

    // * Zakończenie egzaminu
    case 'END':
      if (action.hasOwnProperty('subAction')) {
        switch (action.subAction) {
          case 'SHOW_MODAL':
            return { ...state, showModal: true };
          case 'CONTINUE_EXAM':
            return { ...state, showModal: false };
          case 'END_EXAM':
            return {
              ...state,
              showModal: false,
              end: true,
              examFully: true,
              progress: false,
            };
          default:
            return { ...state };
        }
      }

      return { ...state, end: true, progress: true };

    default:
      return initialExam;
  }
};

const ExamContext = React.createContext({
  exam: {
    progress: false,
    end: false,
    userAnswers: {},
    examFully: false,
    correctAnswers: 0,
  },

  totalUserAnswers: 0,
  dispatchExam: () => {},
  userAnswersHandler: (answer) => {},
});

export const ExamContextProvider = ({ children }) => {
  const [exam, dispatchExam] = useReducer(examReducer, initialExam);
  const [totalUserAnswers, setTotalUserAnswers] = useState(0);

  // ! Akutalizacja liczby oddanych odpowiedzi
  useEffect(() => {
    setTotalUserAnswers(Object.keys(exam.userAnswers).length);
  }, [exam.userAnswers]);
  // ! ---------------------------------------

  return (
    <ExamContext.Provider
      value={{
        exam,
        dispatchExam,
        totalUserAnswers,
      }}
    >
      {children}
    </ExamContext.Provider>
  );
};

export default ExamContext;
