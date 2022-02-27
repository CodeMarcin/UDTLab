import React, { useState } from 'react';

const useCreateCorrectAnswers = (arrayQuestion) => {

  let correctAnswerObject = {}

  arrayQuestion.map((item) => {
   return correctAnswerObject[item.id] = item.correctAnswer;
  })

  return correctAnswerObject;
};

export default useCreateCorrectAnswers;
