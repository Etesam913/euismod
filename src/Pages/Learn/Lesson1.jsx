import React, { useContext } from "react";
import styled from "styled-components";
import { Header2, Paragraph } from "../../styling/Headers";
import { AppContext } from "../../Contexts";
import {
  CodeContainer,
  CodeLine,
  FlexContainer,
  GridItem,
  LessonGrid,
  Sandbox,
} from "../../styling/GeneralComponents";
import StyledButton from "../../components/Button";

function Lesson1() {
  const { size } = useContext(AppContext);
  return (
    <div>
      <LessonGrid>
        <GridItem>
          <Header2 textAlign="center">See Changes</Header2>
          <Sandbox></Sandbox>
        </GridItem>
        <GridItem>
          <Header2
            margin={size.width < 768 ? "0.75rem 0" : "2.5rem 0 0.75rem"}
            responsive
          >
            Info:
          </Header2>
          <Paragraph margin="0" responsive fontSize="1.1em">
            When creating a grid you must first set the display property to
            grid. To create 3 columns of width 150 pixels each, you would set
            grid-template-columns to “150px 150px 150px”.
          </Paragraph>
          <Header2 margin="0.75rem 0" responsive>
            Task:
          </Header2>
          <Paragraph margin="0" responsive fontSize="1.1em">
            Create a 2x3 grid where each row has a height of 100 pixels and each
            column has a height of 75 pixels.
          </Paragraph>
        </GridItem>
        <GridItem>
          <Header2 textAlign="center">CSS</Header2>
          <CodeContainer>
            <CodeLine>.container &#123;</CodeLine>
            <CodeLine textIndent="1em">display:</CodeLine>
            <CodeLine textIndent="1em">grid-template-columns:</CodeLine>
            <CodeLine textIndent="1em">grid-template-rows:</CodeLine>
            <CodeLine>&#125;</CodeLine>
          </CodeContainer>
        </GridItem>
        <GridItem>
          <Header2 textAlign="center">HTML</Header2>
          <CodeContainer>
            <CodeLine>&#60;div class="container"&#62;</CodeLine>
            <CodeLine textIndent="1em">//empty</CodeLine>
            <CodeLine>&#60;/div&#62;</CodeLine>
          </CodeContainer>
        </GridItem>
      </LessonGrid>
      <FlexContainer justifyContent="flex-end" padding="0 .45rem 0 0">
        <StyledButton text="Submit" />
      </FlexContainer>
    </div>
  );
}

export default Lesson1;
