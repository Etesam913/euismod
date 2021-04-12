import React, { useContext } from "react";
import styled from "styled-components";
import {
  CodeContainer,
  CodeLine,
  FlexContainer,
  ResponsiveImg,
} from "../../styling/GeneralComponents";
import { Header1, Header2, Paragraph } from "../../styling/Headers";
import { AppContext } from "../../Contexts";
import StyledButton from "../../components/Button";
import QuizQuestionComponents from "./QuizQuestionComponents";

function QuizTemplate({
  questionText,
  choices,
  imgSrc,
  codeLines,
  index,
  nextQuestion,
}) {
  const { size } = useContext(AppContext);
  let code = null;
  if (codeLines) {
    code = codeLines.map((obj) => {
      return <CodeLine>{obj.text}</CodeLine>;
    });
  }

  let choicesComponents = null;
  if (choices) {
    choicesComponents = choices.map((text, index) => {
      return (
        <FlexContainer
          key={`choice-${index}`}
          alignItems="center"
          justifyContent="flex-start"
        >
          <Radio
            type="radio"
            name="choice"
            id={`choice-${index}`}
            value={text}
          />
          <Paragraph
            fontSize="1.15em"
            as={"label"}
            margin="0.75rem 1rem"
            htmlFor={`choice-${index}`}
            style={{ cursor: "pointer" }}
          >
            {text}
          </Paragraph>
        </FlexContainer>
      );
    });
  }

  return (
    <FlexContainer flexDirection="column">
      <Header1 textAlign="center">Question {index}</Header1>
      {imgSrc && (
        <ResponsiveImg margin={"1.25rem 0"} maxWidth={"40rem"} src={imgSrc} />
      )}
      {codeLines && <CodeContainer margin="1rem 0">{code}</CodeContainer>}
      <Header2 textAlign="center">{questionText}</Header2>
      <QuizQuestionComponents id={index} />
      {choices && <ChoicesList>{choicesComponents}</ChoicesList>}
      {nextQuestion && <StyledButton text="Next Question" to={nextQuestion} />}
    </FlexContainer>
  );
}

const ChoicesList = styled.form`
  padding: 0;
  margin: 0.35rem 0;
`;

const Radio = styled.input`
  margin: 0;
`;

export default QuizTemplate;
