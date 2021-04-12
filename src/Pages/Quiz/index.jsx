import React, { useState } from "react";
import styled from "styled-components";
import { Route, useLocation } from "react-router-dom";
import Info from "./Info";
import QuizSidebar from "../../components/QuizSidebar";
import QuizTemplate from "./QuizTemplate";
import { motion } from "framer-motion";

function Quiz() {
  const location = useLocation();
  const [isSideNavShowing, setIsSideNavShowing] = useState(true);
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
          previousQuestion="/quiz/1"
          nextQuestion="/quiz/3"
          imgAlt="Quiz 2 Diagram"
        />
      </Route>
      <Route exact path="/quiz/3">
        <QuizTemplate
          index={3}
          codeLines={[
            { indent: 0, text: ".grid-item" },
            { indent: 1, text: "justify-self: right;" },
            { indent: 1, text: "align-self: end;" },
            { indent: 0, text: "}" },
          ]}
          previousQuestion="/quiz/2"
          nextQuestion="/quiz/4"
          questionText="How is the grid item aligned based on the above code?"
          choices={[
            "It is aligned to the top vertically and to the right horizontally.",
            "It is aligned to the left horizontally and to the top vertically.",
            "It is aligned to the right horizontally and to the bottom vertically.",
            "It is aligned to the bottom vertically and to the left horizontally.",
          ]}
        />
      </Route>
      <Route exact path="/quiz/4">
        <QuizTemplate
          index={4}
          previousQuestion="/quiz/3"
          nextQuestion={"/quiz/5"}
          questionText="Convert the grid dimensions above into fractional units."
          codeLines={[
            { indent: 0, text: "display: grid;" },
            {
              indent: 0,
              text: "grid-template-columns: 10% 10% 10% 35% 35%;",
            },
            { indent: 0, text: "grid-template-rows: 10% 45% 45%;" },
          ]}
        />
      </Route>
    </Container>
  );
}

const Container = styled(motion.section)`
  padding: 2rem;
  display: flex;
  justify-content: center;
`;
export default Quiz;
