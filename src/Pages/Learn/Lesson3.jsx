import React, { useContext } from "react";
import {
  CodeContainer,
  CodeLine,
  FlexContainer,
  GridItem,
  LessonGridType2,
  MultiLineProperty,
  Property,
  ResponsiveImg,
  Sandbox,
} from "../../styling/GeneralComponents";
import { Header1, Header2, Paragraph } from "../../styling/Headers";
import StyledInput from "../../components/Input";
import { AppContext } from "../../Contexts";
import { SandboxContent3 } from "../../components/Sandboxes";
import StyledButton from "../../components/Button";
import { checkThirdSolution } from "../../functions/SolutionChecks";
import { onLessonSubmit, renderSubmitText } from "./helpers";

function Lesson3({ setIsSideNavShowing, lesson3Data, setLesson3Data }) {
  const { size } = useContext(AppContext);
  const childClassData = [
    { name: "header", background: "#ff5454", property: "headerGridArea" },
    { name: "sidebar", background: "#61cc9e", property: "sidebarGridArea" },
    {
      name: "main-content",
      background: "#ffffff",
      property: "mainContentGridArea",
    },
    { name: "footer", background: "#54a3ff", property: "footerGridArea" },
  ];
  const childClasses = childClassData.map((classObj) => {
    return (
      <>
        <CodeLine>{"." + classObj.name} &#123;</CodeLine>
        <CodeLine textIndent="1em">background: {classObj.background};</CodeLine>
        <CodeLine textIndent="1em">
          grid-area:{" "}
          <StyledInput
            stateToUpdate={lesson3Data}
            setStateToUpdate={setLesson3Data}
            property={classObj.property}
          />
          ;
        </CodeLine>
        <CodeLine>&#125;</CodeLine>
      </>
    );
  });

  return (
    <div>
      <Header1 padding="0 0.5rem" textAlign="center">
        Grid Areas
      </Header1>
      <LessonGridType2>
        <GridItem gridArea="sandbox">
          <Header2 textAlign="center">Sandbox</Header2>
          <Sandbox height="500px">
            <SandboxContent3
              area1={lesson3Data.gridTemplateArea1}
              area2={lesson3Data.gridTemplateArea2}
              area3={lesson3Data.gridTemplateArea3}
              headerText={lesson3Data.headerGridArea}
              sideBarText={lesson3Data.sidebarGridArea}
              mainContentText={lesson3Data.mainContentGridArea}
              footerText={lesson3Data.footerGridArea}
            />
          </Sandbox>
        </GridItem>
        <GridItem gridArea="info">
          <Header2
            margin={size.width < 768 ? "0.25rem 0" : "2.5rem 0 0.75rem"}
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
            property is useful. Given a 3x3 grid, a right triangular shape can
            be created by <br />
            <MultiLineProperty margin="0.75rem auto">
              grid-template-areas: <br />
              <div style={{ textIndent: "1em" }}>"top . ."</div>
              <div style={{ textIndent: "1em" }}>"middle" "middle ."</div>
              <div style={{ textIndent: "1em" }}>
                "bottom" "bottom" "bottom";
              </div>
            </MultiLineProperty>
            Then there will have to be 3 HTML tags with classes that have one of
            the{" "}
            <Property margin="0.2rem 0.35rem 0.2rem 0">grid-area: top</Property>
            ,<Property>grid-area: middle</Property>, and
            <Property>grid-area: bottom</Property> properties respectively.
          </Paragraph>
          <Header2 margin="2.5rem 0 0.75rem" responsive>
            Task:
          </Header2>
          <Paragraph margin="0" responsive fontSize="1.1em">
            Recreate the grid below using grid areas. The sidebar should be 1/3
            of the width with the main content taking up the rest of the space.
          </Paragraph>
          <ResponsiveImg
            margin="2rem 0 0"
            maxWidth="40rem"
            alt="image of task goal"
            src="https://etesam.nyc3.digitaloceanspaces.com/Euismod/Task3_Guide.png"
          />
        </GridItem>
        <GridItem gridArea="css">
          <Header2 textAlign="center">CSS</Header2>
          <CodeContainer>
            <CodeLine>.container &#123;</CodeLine>
            <CodeLine textIndent="1em">display: grid;</CodeLine>
            <CodeLine textIndent="1em">
              grid-template-columns: 33.333% 66.666%;
            </CodeLine>
            <CodeLine textIndent="1em">
              grid-template-rows: 10% 80% 10%;
            </CodeLine>
            <CodeLine textIndent="1em">grid-template-areas:</CodeLine>
            <CodeLine textIndent="2em">
              "
              <StyledInput
                stateToUpdate={lesson3Data}
                setStateToUpdate={setLesson3Data}
                property="gridTemplateArea1"
              />
              "
            </CodeLine>
            <CodeLine textIndent="2em">
              "
              <StyledInput
                stateToUpdate={lesson3Data}
                setStateToUpdate={setLesson3Data}
                property="gridTemplateArea2"
              />
              "
            </CodeLine>
            <CodeLine textIndent="2em">
              "
              <StyledInput
                stateToUpdate={lesson3Data}
                setStateToUpdate={setLesson3Data}
                property="gridTemplateArea3"
              />
              "
            </CodeLine>
            <CodeLine>&#125;</CodeLine>

            {childClasses}
          </CodeContainer>
        </GridItem>
        <GridItem gridArea="html">
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
      <FlexContainer
        flexDirection="column"
        alignItems="flex-end"
        padding={size.width <= 768 ? "0 1.5rem 0 0" : "0 .45rem 0 0"}
      >
        <StyledButton
          text="Submit"
          onClick={() => {
            onLessonSubmit(
              lesson3Data,
              setLesson3Data,
              checkThirdSolution(lesson3Data),
              "lesson3Data",
              setIsSideNavShowing
            );
          }}
        />
        {renderSubmitText(lesson3Data, setLesson3Data)}
      </FlexContainer>
    </div>
  );
}

export default Lesson3;
