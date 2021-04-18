import React, { useContext, useRef } from "react";
import { Header1, Header2, Paragraph } from "../../styling/Headers";
import { AppContext } from "../../Contexts";
import {
  CodeContainer,
  CodeLine,
  FlexContainer,
  GridItem,
  LessonGrid,
  Property,
  Sandbox,
} from "../../styling/GeneralComponents";
import StyledButton from "../../components/Button";
import StyledInput from "../../components/Input";
import { checkFirstSolution } from "../../functions/SolutionChecks";
import { SandboxContent1 } from "../../components/Sandboxes";
import { onLessonSubmit, renderSubmitText } from "./helpers";

function Lesson1({ setIsSideNavShowing, lesson1Data, setLesson1Data }) {
  const { size } = useContext(AppContext);
  const displayRef = useRef(null);
  const columnsRef = useRef(null);
  const rowsRef = useRef(null);
  const boxData = [0, 0, 0, 0, 0, 0];
  const htmlBoxes = boxData.map((val, index) => {
    return (
      <CodeLine textIndent="1em" key={"box-" + index}>
        &#60;div class="box"&#62;&#60;/div&#62;
      </CodeLine>
    );
  });

  return (
    <div>
      <Header1 padding="0 0.5rem" textAlign="center">
        Grid Creation
      </Header1>
      <LessonGrid>
        <GridItem gridArea={"sandbox"}>
          <Header2 textAlign="center">Sandbox</Header2>
          <Sandbox>
            <SandboxContent1
              displayProperty={lesson1Data.display}
              columnsProperty={lesson1Data.gridTemplateCols}
              rowProperty={lesson1Data.gridTemplateRows}
            />
          </Sandbox>
        </GridItem>
        <GridItem gridArea={"info"}>
          <Header2
            margin={size.width < 768 ? "0.25rem 0" : "2.5rem 0 0.75rem"}
            responsive
          >
            Info:
          </Header2>
          <Paragraph margin="0" responsive fontSize="1.1em">
            When creating a grid you must first set{" "}
            <Property>display: grid</Property>. To create 3 columns of width 150
            pixels each, you would set
            <Property>grid-template-columns: 150px 150px 150px</Property>.
          </Paragraph>
          <Header2 margin="2.5rem 0 0.75rem" responsive>
            Task:
          </Header2>
          <Paragraph margin="0" responsive fontSize="1.1em">
            Create a 3x2 grid where each row has a height of 133 pixels and each
            column has a width of 50%.
          </Paragraph>
        </GridItem>
        <GridItem gridArea={"css"}>
          <Header2 textAlign="center">CSS</Header2>
          <CodeContainer>
            <CodeLine>.container &#123;</CodeLine>
            <CodeLine textIndent="1em">
              display:{" "}
              <StyledInput
                width="5rem"
                passedRef={displayRef}
                stateToUpdate={lesson1Data}
                setStateToUpdate={setLesson1Data}
                property="display"
              />
              ;
            </CodeLine>
            <CodeLine textIndent="1em">
              grid-template-columns:
              <StyledInput
                passedRef={columnsRef}
                stateToUpdate={lesson1Data}
                setStateToUpdate={setLesson1Data}
                property="gridTemplateCols"
              />
              ;
            </CodeLine>
            <CodeLine textIndent="1em">
              grid-template-rows:
              <StyledInput
                passedRef={rowsRef}
                stateToUpdate={lesson1Data}
                setStateToUpdate={setLesson1Data}
                property="gridTemplateRows"
              />
              ;
            </CodeLine>
            <CodeLine>&#125;</CodeLine>
          </CodeContainer>
        </GridItem>
        <GridItem gridArea={"html"}>
          <Header2 textAlign="center">HTML</Header2>
          <CodeContainer>
            <CodeLine>&#60;div class="container"&#62;</CodeLine>
            {htmlBoxes}
            <CodeLine>&#60;/div&#62;</CodeLine>
          </CodeContainer>
        </GridItem>
      </LessonGrid>
      <FlexContainer
        flexDirection="column"
        alignItems="flex-end"
        padding={size.width <= 768 ? "0 1.5rem 0 0" : "0 .45rem 0 0"}
      >
        <StyledButton
          text="Submit"
          onClick={() => {
            onLessonSubmit(
              lesson1Data,
              setLesson1Data,
              checkFirstSolution(lesson1Data),
              "lesson1Data",
              setIsSideNavShowing
            );
          }}
        />
        {renderSubmitText(lesson1Data, setLesson1Data)}
      </FlexContainer>
    </div>
  );
}

export default Lesson1;
