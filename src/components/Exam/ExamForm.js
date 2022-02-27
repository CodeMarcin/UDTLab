import React, { useContext } from 'react';

import ExamContext from './ExamContext';

import ExamSingleQst from './ExamSingleQst';

import ExamCheckExam from './ExamCheckExam';

import BottonModal from '../CardContainer/BottonModal';

import styles from './css/ExamForm.module.css';
import OverlayModal from '../CardContainer/OverlayModal';
import ExamStart from './ExamStart';

const ExamForm = () => {
  const examContext = useContext(ExamContext);
  return (
    <>
      {/* Ładowanie Modala odpowiedzialnego za wyświetlenie potwierdzenia zakończenia egzaminu */}
      {examContext.exam.showModal && (
        <OverlayModal
          text={`Odpowiedziłeś na ${examContext.totalUserAnswers} z 15 pytań`}
          onNotConfirmHandler={examContext.dispatchExam}
          onNotConfirmArg={{ type: 'END', subAction: 'CONTINUE_EXAM' }}
          onConfirmHandler={examContext.dispatchExam}
          onConfirmArg={{ type: 'END', subAction: 'END_EXAM' }}
        />
      )}

      {/* Ładowanie startu egzaminu */}
      {examContext.exam.progress &&
        !examContext.exam.end &&
        !examContext.exam.examFully && <ExamStart />}

      {/* Ładowanie sprawdzania odpowiedzi (koniec egzaminu) */}
      {!examContext.exam.progress &&
        examContext.exam.end &&
        examContext.exam.examFully && <ExamCheckExam />}
    </>
  );
};

export default ExamForm;
