import React, { useContext } from "react";
import styled, { withTheme } from "styled-components";
import { Header1, Header2, Paragraph } from "../../styling/Headers";
import Accordion from "../../components/Accordion";
import { Link } from "react-router-dom";
import { AppContext } from "../../Contexts";

function Results({
  question1Data,
  question2Data,
  question3Data,
  question4Data,
  question5Data,
  question1Choices,
  question3Choices,
  question4Choices,
  question5Choices,
}) {
  const { size } = useContext(AppContext);

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

  const errorAlertData = [
    {
      data: question1Data,
      choices: question1Choices,
      solution: 1,
      isShowing: !checkSolutions()[0],
      feedbackText: "You may want to revise CSS grid creation.",
      feedbackLink: "/learn",
    },
    {
      data: question3Data,
      choices: question3Choices,
      solution: 2,
      isShowing: !checkSolutions()[2],
      feedbackText: "You may want to revise item placement.",
      feedbackLink: "/learn/2",
    },
    {
      data: question4Data,
      choices: question4Choices,
      solution: 1,
      isShowing: !checkSolutions()[3],
      feedbackText: "You may want to revise fractional units.",
      feedbackLink: "/learn/4",
    },
    {
      data: question5Data,
      choices: question5Choices,
      solution: 3,
      isShowing: !checkSolutions()[4],
      feedbackText: "You may want to revise grid gap.",
      feedbackLink: "/learn/4",
    },
  ];

  const errorAlerts = errorAlertData.map((obj, index) => {
    if (obj.isShowing) {
      function calculateExpandedHeight() {
        if (size.width <= 768) {
          if (obj.data === -1) return 310;
          return 400;
        } else {
          if (obj.data === -1) return 210;
          return 290;
        }
      }

      return (
        <Accordion
          useCase="error"
          width={size.width <= 768 ? "17rem" : "25rem"}
          headerText={"Your answer to question " + (index + 1) + " is wrong."}
          closedHeight={size.width <= 768 ? 48 : 25}
          expandedHeight={calculateExpandedHeight()}
          margin="0 0 0.75rem 0"
        >
          {obj.data !== -1 && (
            <AlertSection>
              <AlertSubtitle>You chose choice {obj.data}:</AlertSubtitle>
              <AlertBody>"{obj.choices[obj.data]}"</AlertBody>
            </AlertSection>
          )}

          <AlertSection>
            <AlertSubtitle>The correct answer is choice 1:</AlertSubtitle>
            <AlertBody>"{obj.choices[obj.solution]}"</AlertBody>
          </AlertSection>
          <AlertSection>
            <AlertSubtitle>{obj.feedbackText}</AlertSubtitle>
            <AlertLink to={obj.feedbackLink}> Go to lesson </AlertLink>
          </AlertSection>
        </Accordion>
      );
    }
  });

  return (
    <Container>
      <Header1> Results </Header1>
      <Header2 margin="1rem">
        Your Score is: {calculateScore(checkSolutions())}/5
      </Header2>
      <Header2 margin="0.65rem">Feedback</Header2>
      <FeedbackList>{errorAlerts}</FeedbackList>
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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    align-items: center;
  }
`;

const AlertSection = styled.section`
  margin-bottom: 0.75rem;
`;

const AlertSubtitle = styled.h3`
  margin: 0 0 0.5rem 0;
  font-size: 1.05em;
  font-size: 18px;
  font-family: ${(props) => props.theme.fonts.primary};
`;

const AlertBody = styled.div`
  font-size: 16px;
  font-family: ${(props) => props.theme.fonts.secondary};
  font-weight: normal;
`;

const AlertLink = styled(Link)`
  font-size: 16px;
  color: inherit;
  font-weight: normal;
  font-family: ${(props) => props.theme.fonts.secondary};
`;

export default withTheme(Results);
