import React from "react";
import styled, { withTheme } from "styled-components";
import { Header1, Header2, Paragraph } from "../../styling/Headers";
import { ErrorAlert } from "../../styling/GeneralComponents";
import Accordion from "../../components/Accordion";

function Results({
  question1Data,
  question2Data,
  question3Data,
  question4Data,
  question5Data,
}) {
  function checkSolutions() {
    let question1Solved = false;
    let question2Solved = false;
    let question3Solved = false;
    let question4Solved = false;
    let question5Solved = false;

    const gridArea1Solution = "header header header header header";
    const gridArea2Solution = "ads main_content main_content . sidebar";
    const gridArea3Solution = "footer footer footer footer footer";

    if (question1Data === 1) question1Solved = true;
    if (
      question2Data.gridTemplateArea1.trim().toLowerCase() ===
        gridArea1Solution &&
      question2Data.gridTemplateArea2.trim().toLowerCase() ===
        gridArea2Solution &&
      question2Data.gridTemplateArea3.trim().toLowerCase() === gridArea3Solution
    )
      question2Solved = true;
    if (question3Data === 2) question3Solved = true;
    if (question4Data === 1) question4Solved = true;
    if (question5Data === 3) question5Solved = true;

    return [
      question1Solved,
      question2Solved,
      question3Solved,
      question4Solved,
      question5Solved,
    ];
  }

  function calculateScore(solutions) {
    let solutionCount = 0;
    for (let i = 0; i < solutions.length; i++)
      if (solutions[i] === true) solutionCount += 1;
    return solutionCount;
  }

  return (
    <Container>
      <Header1> Results </Header1>
      <Header2 margin="1rem">
        Your Score is: {calculateScore(checkSolutions())}/5
      </Header2>
      <Header2 margin="1rem">Feedback</Header2>
      <FeedbackList>
        {!checkSolutions()[0] && (
          <Accordion
            useCase="error"
            headerText="Your answer to question 1 is wrong."
            paragraphText="bla bla bla"
          />
        )}

        {!checkSolutions()[2] && (
          <Accordion
            useCase="error"
            headerText="Your answer to question 3 is wrong."
            paragraphText="bla bla bla"
          />
        )}

        {!checkSolutions()[3] && (
          <Accordion
            useCase="error"
            headerText="Your answer to question 4 is wrong."
            paragraphText="bla bla bla"
          />
        )}
        {!checkSolutions()[4] && (
          <Accordion
            useCase="error"
            headerText="Your answer to question 5 is wrong."
            paragraphText="bla bla bla"
          />
        )}
      </FeedbackList>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FeedbackList = styled.ul`
  margin: 0.25rem;
  padding: 0;
`;

export default withTheme(Results);
