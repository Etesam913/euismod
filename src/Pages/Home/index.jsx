import React, { useContext } from "react";
import styled from "styled-components";
import { Header1, Paragraph } from "../../styling/Headers";
import { motion } from "framer-motion";
import StyledButton from "../../components/Button";
import { pageVariants } from "../../styling/variants";
import { AppContext } from "../../Contexts";
import lightDisplay from "../../media/lightmode-display.mov";
import darkDisplay from "../../media/darkmode-dislay.mov";

function Home() {
  const { isDarkMode, size } = useContext(AppContext);
  return (
    <Container variants={pageVariants} initial="init" animate="anim">
      <GridItem>
        <Header1 responsive>Anyone Can Learn CSS Grid</Header1>
        <Paragraph
          maxWidth="22.5rem"
          fontSize="1.25em"
          margin={size.width <= 980 && "1rem auto"}
        >
          See one of the lessons in action in the video{" "}
          {size.width <= 980 ? "down below" : "to the right"}.
        </Paragraph>
        <StyledButton text="Go to lessons" to="/learn" />
      </GridItem>
      <VideoContainer>
        <HomepageVideo
          width="min(100%, 50rem)"
          src={isDarkMode ? darkDisplay : lightDisplay}
          autoplay
          loop
          muted
          playsInline
          onLoadedData={(e) => {
            e.target.play();
          }}
        />
      </VideoContainer>
      <GridItem>
        <Header1>Test Your Knowledge</Header1>
        <Paragraph maxWidth="22.5rem" fontSize="1.25em">
          Take the CSS Grid quiz to test your knowledge on grid creation, grid
          areas, and more.
        </Paragraph>
      </GridItem>
    </Container>
  );
}

const Container = styled(motion.div)`
  padding: 2.5rem 6rem;
  transition: padding 300ms ease-in-out;
  display: grid;
  grid-template-columns: 22.5rem auto;
  grid-template-rows: auto auto;
  grid-gap: 1rem;

  @media screen and (max-width: 980px) {
    grid-template-columns: auto;
    grid-template-rows: auto auto;
    justify-content: center;
    text-align: center;
  }

  @media screen and (max-width: 500px) {
    padding: 2.5rem 2.25rem;
    transition: padding 150ms ease-in-out;
  }
`;

const GridItem = styled.section`
  @media screen and (max-width: 980px) {
    justify-self: center;
  }
`;

const VideoContainer = styled.section`
  display: flex;
  justify-content: center;
`;

const HomepageVideo = styled.video`
  width: ${(props) => props.width};
  height: auto;
  margin: 0 auto;
`;

export default Home;
