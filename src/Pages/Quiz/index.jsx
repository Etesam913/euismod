import React, { useState } from "react";
import styled from "styled-components";
import { Route, useLocation } from "react-router-dom";
import Info from "./Info";
import QuizSidebar from "../../components/QuizSidebar";
import QuizTemplate from "./QuizTemplate";

function Quiz() {
  const location = useLocation();
  const [isSideNavShowing, setIsSideNavShowing] = useState(false);
  const [answerData, setAnswerData] = useState({
    question1: -1,
    question2: -1,
    question3: -1,
    question4: -1,
    question5: -1,
  });
  return (
    <Container>
      {location.pathname !== "/quiz" &&
        (location.pathname !== "/quiz/" ? (
          <QuizSidebar
            isSideNavShowing={isSideNavShowing}
            setIsSideNavShowing={setIsSideNavShowing}
          />
        ) : (
          <span />
        ))}

      <Route exact path="/quiz">
        <Info />
      </Route>
      <Route exact path="/quiz/1">
        <QuizTemplate
          index={1}
          codeLines={[
            { indent: 0, text: "display: grid;" },
            { indent: 0, text: "grid-template-columns: 200px 200px;" },
            { indent: 0, text: "grid-template-rows: 300px 300px;" },
          ]}
          questionText="What type of grid does the code above create?"
          choices={[
            "A grid with 2 columns of 200px width each and 3 rows with 300 px height each.",
            "A grid with 2 columns of 200px width each and 2 rows with 300px height each.",
            "A flexbox layout.",
            "A grid with 2 columns of 300px width and 2 rows of 200 px width each.",
          ]}
          nextQuestion="/quiz/2"
        />
      </Route>
      <Route exact path="/quiz/2">
        <QuizTemplate
          index={2}
          imgSrc="https://etesam.nyc3.digitaloceanspaces.com/Euismod/Question_2.png"
          questionText="Recreate the image above using the same area names."
          nextQuestion="/quiz/3"
        />
      </Route>
    </Container>
  );
}

const Container = styled.section`
  padding: 2rem;
  display: flex;
  justify-content: center;
`;
export default Quiz;
