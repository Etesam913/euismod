import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import {
  AlertBody,
  AlertLink,
  AlertSection,
  AlertSubtitle,
  CodeContainer,
  CodeLine,
  FlexContainer,
  ResponsiveImg,
  SuccessAlert,
} from "../../styling/GeneralComponents";
import { Header1, Header2 } from "../../styling/Headers";
import { AppContext } from "../../Contexts";
import StyledButton from "../../components/Button";
import QuizQuestionComponents from "./QuizQuestionComponents";
import { LeftArrow, RightArrow } from "../../SvgMaster";
import Radio from "../../components/Radio";
import { alertVariants } from "../../styling/variants";
import { AnimatePresence } from "framer-motion";
import Accordion from "../../components/Accordion";

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
  const { isDarkMode, size } = useContext(AppContext);
  const [sampleSolution, setSampleSolution] = useState(-5);
  let code = null;
  if (codeLines) {
    code = codeLines.map((obj) => {
      return <CodeLine textIndent={obj.indent + "em"}>{obj.text}</CodeLine>;
    });
  }

  function handleSampleQuestionClick() {
    setSampleSolution(answerData);
  }

  useEffect(() => {
    console.log(answerData);
  }, [answerData]);

  let choicesComponents = null;
  if (choices) {
    choicesComponents = choices.map((text, index) => {
      return (
        <Radio
          type="radio"
          name="choice"
          key={`choice-${index}`}
          value={text}
          margin="0"
          labelText={text}
          index={index}
          selectedRadio={answerData}
          setSelectedRadio={setAnswerData}
        />
      );
    });
  }

  function calculateExpandedHeight() {
    if (size.width <= 768) {
      if (sampleSolution === -1) return 340;
      return 475;
    } else {
      if (sampleSolution === -1) return 240;
      return 300;
    }
  }

  return (
    <Container>
      <Header1 textAlign="center">
        {index === -1 ? "Sample Question" : `Question ${index}`}
      </Header1>
      {imgSrc && (
        <ResponsiveImg
          margin={"1.25rem 0"}
          maxWidth={"40rem"}
          src={imgSrc}
          alt={imgAlt}
        />
      )}
      {codeLines && <CodeContainer margin="1rem 0">{code}</CodeContainer>}
      <Header2 textAlign="center" maxWidth="45rem" margin="1.5rem 0 0.5rem">
        {questionText}
      </Header2>
      <QuizQuestionComponents
        id={index}
        answerData={answerData}
        setAnswerData={setAnswerData}
      />
      {choices && (
        <ChoicesForm
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          {choicesComponents}
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
      {index !== -1 ? (
        <StyledButton text="Submit Quiz" to="/quiz/results" />
      ) : (
        <StyledButton
          text="Check Solution"
          onClick={handleSampleQuestionClick}
        />
      )}
      <AnimatePresence>
        {sampleSolution === 3 && (
          <SuccessAlert
            textAlign="center"
            justifyContent="center"
            minWidth="4.5rem"
            variants={alertVariants}
            initial="init"
            animate="anim"
            exit="exit"
          >
            Correct
          </SuccessAlert>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {index === -1 && sampleSolution !== 3 && sampleSolution !== -5 && (
          <Accordion
            useCase="error"
            width={size.width <= 768 ? "17rem" : "31rem"}
            headerText={"Your answer to the sample question is wrong."}
            closedHeight={size.width <= 768 ? 80 : 25}
            expandedHeight={calculateExpandedHeight()}
            margin="0.5rem 0 0.75rem 0"
          >
            {sampleSolution !== -1 && (
              <AlertSection>
                <AlertSubtitle>
                  You chose choice {sampleSolution + 1}:
                </AlertSubtitle>
                <AlertBody>"{choices[sampleSolution]}"</AlertBody>
              </AlertSection>
            )}
            <AlertSection>
              <AlertSubtitle>The correct answer is choice 4:</AlertSubtitle>
              <AlertBody>"{choices[3]}"</AlertBody>
            </AlertSection>
            <AlertSection>
              <AlertSubtitle>
                Maybe you should revise grid creation.
              </AlertSubtitle>
              <AlertLink to={"/learn"}> Go to lesson </AlertLink>
            </AlertSection>
          </Accordion>
        )}
      </AnimatePresence>
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
