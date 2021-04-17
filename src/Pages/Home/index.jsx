import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Header1, Paragraph } from "../../styling/Headers";
import { motion } from "framer-motion";
import StyledButton from "../../components/Button";
import { pageVariants } from "../../styling/variants";
import { AppContext } from "../../Contexts";
import lightDisplay from "../../media/lightmode-display.mov";
import darkDisplay from "../../media/darkmode-dislay.mov";
import QuizTemplate from "../Quiz/QuizTemplate";

function Home() {
  const { isDarkMode, size } = useContext(AppContext);
  const [sampleQuestionChoice, setSampleQuestionChoice] = useState(-1);

  const questionChoices = [
    "A grid with 2 columns of 200px width each and 3 rows with 300 px height each.",
    "A grid with 2 columns of 400px and 300px width and 3 rows with 200px, 120px, and 250px width.",
    "A flexbox layout.",
    "A grid with 3 columns of 200px, 120px, and 250px width and 2 rows of 400px and 300px width.",
  ];

  return (
    <Container variants={pageVariants} initial="init" animate="anim">
      <GridItem>
        <Header1 responsive>Anyone Can Learn CSS Grid</Header1>
        <Paragraph fontSize="1.25em" margin={size.width <= 980 && "1rem auto"}>
          See one of the lessons in action in the video{" "}
          {size.width <= 980 ? "down below" : "to the right"}.
        </Paragraph>
        <StyledButton text="Go to lessons" to="/learn" />
      </GridItem>
      <GridItem2>
        <HomepageVideo
          src={isDarkMode ? darkDisplay : lightDisplay}
          autoplay
          loop
          muted
          playsInline
          onLoadedData={(e) => {
            e.target.play();
          }}
        />
      </GridItem2>
      <GridItem>
        <Header1>Test Your Knowledge</Header1>
        <Paragraph maxWidth="22.5rem" fontSize="1.25em">
          Take the CSS Grid quiz to test your knowledge on grid creation, grid
          areas, and more.
        </Paragraph>
        <StyledButton text="Go to quiz" to="/quiz" />
      </GridItem>
      <GridItem2>
        <QuizTemplate
          index={-1}
          codeLines={[
            { indent: 0, text: "display: grid;" },
            { indent: 0, text: "grid-template-columns: 200px 120px 250px;" },
            { indent: 0, text: "grid-template-rows: 400px 300px;" },
          ]}
          questionText="What type of grid does the code above create?"
          choices={questionChoices}
          answerData={sampleQuestionChoice}
          setAnswerData={setSampleQuestionChoice}
        />
      </GridItem2>
    </Container>
  );
}

const Container = styled(motion.div)`
  padding: 2.5rem 0;
  transition: padding 300ms ease-in-out;
  display: grid;
  width: min(85rem, 80%);
  grid-template-columns: 25rem auto;
  grid-template-rows: auto auto;
  grid-gap: 4rem 1rem;
  margin: 0 auto;

  @media screen and (max-width: 980px) {
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    justify-content: center;
    text-align: center;
    grid-gap: 1rem;
  }

  @media screen and (max-width: 500px) {
    padding: 2.5rem 1rem;
    transition: padding 150ms ease-in-out;
  }
`;

const GridItem = styled.section`
  @media screen and (max-width: 980px) {
    justify-self: center;
  }
`;

const GridItem2 = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomepageVideo = styled.video`
  width: min(100%, 55rem);
  height: auto;
  margin-left: auto;
`;

export default Home;
