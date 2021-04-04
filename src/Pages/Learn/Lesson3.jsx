import React, { useContext } from "react";
import {
  CodeContainer,
  CodeLine,
  GridItem,
  LessonGrid,
  Sandbox,
} from "../../styling/GeneralComponents";
import { Header2, Paragraph } from "../../styling/Headers";
import StyledInput from "../../components/Input";
import { AppContext } from "../../Contexts";

function Lesson3() {
  const { size } = useContext(AppContext);
  return (
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
          When developing a website having designated areas like “header”, “left
          sidebar”, “main content”, and “footer” is very important. To create
          these areas, the grid-template-areas property is useful. You can also
          specify how much of the row you want the area to take. For example, a
          “header” that takes up all of the space in a 3 column row would have a
          grid-template-area of “header header header”.
        </Paragraph>
        <Header2 margin="0.75rem 0" responsive>
          Task:
        </Header2>
        <Paragraph margin="0" responsive fontSize="1.1em">
          Create a grid where the header is on one row, the sidebar and main are
          on one row, and the footer is one row.
        </Paragraph>
      </GridItem>
      <GridItem>
        <Header2 textAlign="center">CSS</Header2>
        <CodeContainer>
          <CodeLine>.container &#123;</CodeLine>
          <CodeLine textIndent="1em">
            display: <StyledInput width="5rem" />;
          </CodeLine>
          <CodeLine textIndent="1em">
            grid-template-columns: <StyledInput />;
          </CodeLine>
          <CodeLine textIndent="1em">
            grid-template-rows: <StyledInput />;
          </CodeLine>
          <CodeLine>&#125;</CodeLine>
        </CodeContainer>
      </GridItem>
      <GridItem>
        <Header2 textAlign="center">HTML</Header2>
        <CodeContainer>
          <CodeLine>&#60;div class="container"&#62;</CodeLine>
          <CodeLine textIndent="1em">&#60;div class "header"&#62;</CodeLine>
          <CodeLine>&#60;/div&#62;</CodeLine>
        </CodeContainer>
      </GridItem>
    </LessonGrid>
  );
}

export default Lesson3;
