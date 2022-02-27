import React from 'react';
import CardContainer from '../components/CardContainer/CardContainer';
import { ExamContextProvider } from '../components/Exam/ExamContext';
import Exam from '../components/Exam/Exam';

const ExamStartPage = () => {
  return (
    <CardContainer style={{ marginTop: '69px' }}>
      <ExamContextProvider>
        <Exam />
      </ExamContextProvider>
    </CardContainer>
  );
};

export default ExamStartPage;
