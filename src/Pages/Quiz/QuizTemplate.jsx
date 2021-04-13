import React, { useContext } from "react";
import styled from "styled-components";
import {
  CodeContainer,
  CodeLine,
  FlexContainer,
  ResponsiveImg,
} from "../../styling/GeneralComponents";
import { Header1, Header2 } from "../../styling/Headers";
import { AppContext } from "../../Contexts";
import StyledButton from "../../components/Button";
import QuizQuestionComponents from "./QuizQuestionComponents";
import { LeftArrow, RightArrow } from "../../SvgMaster";
import Radio from "../../components/Radio";
import RadioController from "../../components/RadioController";

function QuizTemplate({
  questionText,
  choices,
  imgSrc,
  codeLines,
  index,
  nextQuestion,
  previousQuestion,
  imgAlt,
  answerData,
  setAnswerData,
}) {
  const { isDarkMode } = useContext(AppContext);
  let code = null;
  if (codeLines) {
    code = codeLines.map((obj) => {
      return <CodeLine textIndent={obj.indent + "em"}>{obj.text}</CodeLine>;
    });
  }

  let choicesComponents = null;
  if (choices) {
    choicesComponents = choices.map((text, index) => {
      return (
        <Radio
          type="radio"
          name="choice"
          id={`choice-${index}`}
          value={text}
          margin="0"
          labelText={text}
          index={index}
        />
      );
    });
  }

  return (
    <Container>
      <Header1 textAlign="center">Question {index}</Header1>
      {imgSrc && (
        <ResponsiveImg
          margin={"1.25rem 0"}
          maxWidth={"40rem"}
          src={imgSrc}
          alt={imgAlt}
        />
      )}
      {codeLines && <CodeContainer margin="1rem 0">{code}</CodeContainer>}
      <Header2 textAlign="center" maxWidth="45rem">
        {questionText}
      </Header2>
      <QuizQuestionComponents
        id={index}
        answerData={answerData}
        setAnswerData={setAnswerData}
      />
      {choices && (
        <ChoicesForm>
          <RadioController
            selectedRadio={answerData}
            setSelectedRadio={setAnswerData}
          >
            {choicesComponents}
          </RadioController>
        </ChoicesForm>
      )}
      <FlexContainer>
        {previousQuestion && (
          <StyledButton to={previousQuestion}>
            <LeftArrow
              height="24px"
              width="24px"
              fill={isDarkMode ? "white" : "black"}
            />
          </StyledButton>
        )}

        {nextQuestion && (
          <StyledButton to={nextQuestion}>
            <RightArrow
              height="24px"
              width="24px"
              fill={isDarkMode ? "white" : "black"}
            />
          </StyledButton>
        )}
      </FlexContainer>
      <StyledButton text="Submit Quiz" to="/quiz/results" />
    </Container>
  );
}

const ChoicesForm = styled.form`
  padding: 0;
  margin: 0.35rem 0;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default QuizTemplate;
