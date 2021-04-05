import React, { useContext } from "react";
import {
    CodeContainer,
    CodeLine,
    GridItem,
    LessonGridType2,
    MultiLineProperty,
    Property,
    ResponsiveImg,
    Sandbox,
} from "../../styling/GeneralComponents";
import { Header2, Paragraph } from "../../styling/Headers";
import StyledInput from "../../components/Input";
import { AppContext } from "../../Contexts";

function Lesson3() {
  const { size } = useContext(AppContext);
  return (
    <LessonGridType2>
      <GridItem gridArea="sandbox">
        <Header2 textAlign="center">See Changes</Header2>
        <Sandbox height="500px"></Sandbox>
      </GridItem>
      <GridItem  gridArea="info">
        <Header2
          margin={size.width < 768 ? "0.75rem 0" : "2.5rem 0 0.75rem"}
          responsive
        >
          Info:
        </Header2>
        <Paragraph margin="0" responsive fontSize="1.1em">
          When developing a website, having designated areas like “header”,
          “sidebar”, “main content”, and “footer” is very important. To create
          these areas, the
          <Property margin="0.2rem 0 0.2rem 0.2rem">
            grid-template-areas
          </Property>{" "}
          property is useful. Given a 3x3 grid, a right triangular shape can be
          created by <br />
          <MultiLineProperty margin="0.75rem auto">
            grid-template-areas: <br />
            <div style={{ textIndent: "1em" }}>"top ."</div>
            <div style={{ textIndent: "1em" }}>"middle" "middle ."</div>
            <div style={{ textIndent: "1em" }}>"bottom" "bottom" "bottom";</div>
          </MultiLineProperty>
          Then there will have to be 3 HTML tags with classes that have one of
          the{" "}
          <Property margin="0.2rem 0.35rem 0.2rem 0">grid-area: top</Property>,
          <Property>grid-area: middle</Property>, and
          <Property>grid-area: bottom</Property> properties respectively.
        </Paragraph>
        <Header2 margin="0.75rem 0" responsive>
          Task:
        </Header2>
        <Paragraph margin="0" responsive fontSize="1.1em">
          Recreate the grid below using grid areas. The sidebar should be 1/3 of
          the width with the main content taking up the rest of the space.
        </Paragraph>
        <ResponsiveImg
          margin=".5rem 0 0"
          maxWidth="40rem"
          alt="image of task goal"
          src="https://etesam.nyc3.digitaloceanspaces.com/Euismod/Task3_Guide.png"
        />
      </GridItem>
      <GridItem  gridArea="css">
        <Header2 textAlign="center">CSS</Header2>
        <CodeContainer>
          <CodeLine>.container &#123;</CodeLine>
          <CodeLine textIndent="1em">display: grid;</CodeLine>
          <CodeLine textIndent="1em">grid-template-columns: 33% 66%;</CodeLine>
          <CodeLine textIndent="1em">
            grid-template-rows: 46px 408px 46px;
          </CodeLine>
          <CodeLine>&#125;</CodeLine>

          <CodeLine>.container &#123;</CodeLine>
          <CodeLine textIndent="1em">display: grid;</CodeLine>
          <CodeLine textIndent="1em">grid-template-columns: 33% 66%;</CodeLine>
          <CodeLine textIndent="1em">
            grid-template-rows: 46px 408px 46px;
          </CodeLine>
          <CodeLine>&#125;</CodeLine>

          <CodeLine>.container &#123;</CodeLine>
          <CodeLine textIndent="1em">display: grid;</CodeLine>
          <CodeLine textIndent="1em">grid-template-columns: 33% 66%;</CodeLine>
          <CodeLine textIndent="1em">
            grid-template-rows: 46px 408px 46px;
          </CodeLine>
          <CodeLine>&#125;</CodeLine>
        </CodeContainer>
      </GridItem>
      <GridItem  gridArea="html">
        <Header2 textAlign="center">HTML</Header2>
        <CodeContainer>
          <CodeLine>&#60;div class="container"&#62;</CodeLine>
          <CodeLine textIndent="1em">
            &#60;div class"header"&#62; Header &#60;/div&#62;
          </CodeLine>
          <CodeLine textIndent="1em">
            &#60;div class"sidebar"&#62; Sidebar &#60;/div&#62;
          </CodeLine>
          <CodeLine textIndent="1em">
            &#60;div class"main-content"&#62; Main Content &#60;/div&#62;
          </CodeLine>
          <CodeLine textIndent="1em">
            &#60;div class"footer"&#62; Footer &#60;/div&#62;
          </CodeLine>

          <CodeLine>&#60;/div&#62;</CodeLine>
        </CodeContainer>
      </GridItem>
    </LessonGridType2>
  );
}

export default Lesson3;
