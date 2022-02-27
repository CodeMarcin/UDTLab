import React, { useContext } from 'react';

import ExamContext from './ExamContext';

import LittleBanner from '../LittleBanner/LittleBanner';

import ExamForm from './ExamForm.js';

import img05 from '../../assets/img/img_05.png';

import styles from './css/Exam.module.css';
import OverlayModal from '../CardContainer/OverlayModal';

const Exam = () => {
  const examContext = useContext(ExamContext);

  return (
    <div className={styles['exam']}>
      <LittleBanner
        img={img05}
        title="Wózki jezdniowe"
        code="I WJO"
        subTitle="Egzamin"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
      />

      {!examContext.exam.progress && !examContext.exam.end ? (
        <button
          onClick={() =>
            examContext.dispatchExam({ type: "START" })
          }
          className="btn btn-one"
        >
          Rozpocznij
        </button>
      ) : (
        <ExamForm />
      )}
    </div>
  );
};

export default Exam;
