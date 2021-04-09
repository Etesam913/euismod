import React, { useContext } from "react";
import {
  CodeContainer,
  CodeLine,
  FlexContainer,
  GridItem,
  LessonGrid,
  LessonGridType2,
  Property,
  Sandbox,
} from "../../styling/GeneralComponents";
import { Header1, Header2, Paragraph } from "../../styling/Headers";
import { AppContext } from "../../Contexts";
import { SandboxContent4 } from "../../components/Sandboxes";
import StyledInput from "../../components/Input";
import StyledButton from "../../components/Button";
import { renderSubmitText } from "./helpers";

function Lesson4({ setIsSideNavShowing, lesson4Data, setLesson4Data }) {
  const { size } = useContext(AppContext);

  function resetToDefault() {
    setLesson4Data({
      solutionObj: null,
      gridGap: "",
      gridTemplateCols: "33.333% 66.666%",
      gridTemplateRows: "10% 80% 10%",
    });
  }

  return (
    <div>
      <Header1 padding="0 1rem" textAlign="center">
        Grid Gap and the Fractional Unit
      </Header1>
      <LessonGridType2>
        <GridItem gridArea={"sandbox"}>
          <Header2 textAlign="center">Sandbox</Header2>
          <Sandbox>
            <SandboxContent4
              gridGap={lesson4Data.gridGap}
              gridTemplateRows={lesson4Data.gridTemplateRows}
              gridTemplateCols={lesson4Data.gridTemplateCols}
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
          <Paragraph margin="1rem 0" responsive fontSize="1.1em">
            To space out grid items the <Property>grid-gap</Property> property
            is needed. For example, <Property>grid-gap: 8px 10px</Property>{" "}
            gives a gap of 8px between rows and 10px between columns. Try this
            out in the sandbox.
          </Paragraph>
          <Paragraph margin="1rem 0" responsive fontSize="1.1em">
            One problem that should stand out is that the footer component
            overflows out of the sandbox. This is undesirable. The way to fix
            this is to use fractional units(fr) instead of percentages when
            defining <Property>grid-template-columns</Property> and{" "}
            <Property>grid-template-rows</Property>. The fr unit only deals with
            the remaining space available(takes into account grip gap) while
            percentages deal with the whole length.
          </Paragraph>
          <Paragraph margin="1rem 0" responsive fontSize="1.1em">
            Suppose you have a grid that is 2x2 and you want each row to take
            1/2 of the height, the first column to take 1/4th of the remaining
            width, and the second column to take 3/4ths of the remaining width.
            Using fr units, this grid can be constructed by{" "}
            <Property>grid-template-rows: 1fr 1fr</Property> and
            <Property>grid-template-columns: 1fr 3fr</Property>.
          </Paragraph>
          <Header2
            margin={size.width < 768 ? "0.25rem 0" : "2.5rem 0 0.75rem"}
            responsive
          >
            Task:
          </Header2>
          <Paragraph margin="0" responsive fontSize="1.1em">
            Set the <Property>grid gap</Property> to the value specified in the
            info. Then fix the overflow in the sandbox by converting the{" "}
            <Property>grid-template-columns</Property> and{" "}
            <Property>grid-template-rows</Property> properties from percentages
            into fr.
          </Paragraph>
        </GridItem>
        <GridItem gridArea="css">
          <Header2 textAlign="center">CSS</Header2>
          <CodeContainer>
            <CodeLine>.container &#123;</CodeLine>
            <CodeLine textIndent="1em">display: grid;</CodeLine>
            <CodeLine textIndent="1em">
              grid-gap:{" "}
              <StyledInput
                stateToUpdate={lesson4Data}
                setStateToUpdate={setLesson4Data}
                property="gridGap"
              />
              ;
            </CodeLine>
            <CodeLine textIndent="1em">
              grid-template-columns:{" "}
              <StyledInput
                stateToUpdate={lesson4Data}
                setStateToUpdate={setLesson4Data}
                property="gridTemplateCols"
              />
            </CodeLine>
            <CodeLine textIndent="1em">
              grid-template-rows:{" "}
              <StyledInput
                stateToUpdate={lesson4Data}
                setStateToUpdate={setLesson4Data}
                property="gridTemplateRows"
              />
              ;
            </CodeLine>
            <CodeLine textIndent="1em">background: #fbd590;</CodeLine>
            <CodeLine>&#125;</CodeLine>
          </CodeContainer>
          <FlexContainer flexDirection="column" alignItems="flex-end">
            <StyledButton
              text="Reset to Default"
              margin="0.85rem 0"
              onClick={resetToDefault}
            />
          </FlexContainer>
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
        padding="0 .45rem 0 0"
      >
        <StyledButton text="Submit" />
      </FlexContainer>
    </div>
  );
}

export default Lesson4;
