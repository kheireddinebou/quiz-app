import React from "react";
import { answerObj } from "../App";
import { ButtonWrapper, CardWrapper } from "./QuestionCard.styles";

type Props = {
  question: string;
  answers: string[];
  callBack: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: answerObj | undefined;
  questionNr: number;
  totalQuestions: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callBack,
  userAnswer,
  questionNr,
  totalQuestions,
}) => {
  return (
    <CardWrapper>
      <p className="paragraph">
        {questionNr} / {totalQuestions}
      </p>

      <p className="paragraph" dangerouslySetInnerHTML={{ __html: question }} />
      {answers.map(answer => (
        <ButtonWrapper 
        key={answer}
        correct={userAnswer?.correctAnswer === answer}
        userClicked={userAnswer?.answer === answer}
        >
          <button
            value={answer}
            disabled={userAnswer ? true : false}
            onClick={callBack}
          >
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </ButtonWrapper>
      ))}
    </CardWrapper>
  );
};

export default QuestionCard;
