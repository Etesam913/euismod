import React, { useContext, useRef, useState } from "react";
import { motion } from "framer-motion";
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
import StyledInput from "../../components/Input";
import { checkFirstSolution } from "../../functions/SolutionChecks";
import { SandboxContent1 } from "../../components/Sandboxes";
import { renderSubmitText, solutionAnimation } from "./helpers";

function Lesson1() {
  const { size } = useContext(AppContext);
  const displayRef = useRef(null);
  const columnsRef = useRef(null);
  const rowsRef = useRef(null);
  const [displayText, setDisplayText] = useState("");
  const [columnsText, setColumnsText] = useState("");
  const [rowsText, setRowsText] = useState("");
  const [solutionObj, setSolutionObj] = useState(null);

  function onSubmit() {
    setSolutionObj(checkFirstSolution(displayRef, columnsRef, rowsRef));
  }

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
      <LessonGrid>
        <GridItem>
          <Header2 textAlign="center">See Changes</Header2>
          <Sandbox>
            <SandboxContent1
              displayProperty={displayText}
              columnsProperty={columnsText}
              rowProperty={rowsText}
            />
          </Sandbox>
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
            Create a 3x2 grid where each row has a height of 133 pixels and each
            column has a width of 50%.
          </Paragraph>
        </GridItem>
        <GridItem>
          <Header2 textAlign="center">CSS</Header2>
          <CodeContainer>
            <CodeLine>.container &#123;</CodeLine>
            <CodeLine textIndent="1em">
              display:{" "}
              <StyledInput
                width="5rem"
                passedRef={displayRef}
                stateToUpdate={displayText}
                setStateToUpdate={setDisplayText}
              />
              ;
            </CodeLine>
            <CodeLine textIndent="1em">
              grid-template-columns:
              <StyledInput
                passedRef={columnsRef}
                stateToUpdate={columnsText}
                setStateToUpdate={setColumnsText}
              />
              ;
            </CodeLine>
            <CodeLine textIndent="1em">
              grid-template-rows:
              <StyledInput
                passedRef={rowsRef}
                stateToUpdate={rowsText}
                setStateToUpdate={setRowsText}
              />
              ;
            </CodeLine>
            <CodeLine>&#125;</CodeLine>
          </CodeContainer>
        </GridItem>
        <GridItem>
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
        padding="0 .45rem 0 0"
      >
        <motion.div
          style={{ overflow: "hidden" }}
          initial={{ height: 0 }}
          animate={solutionAnimation(solutionObj)}
        >
          {renderSubmitText(solutionObj)}
        </motion.div>

        <StyledButton text="Submit" onClick={onSubmit} />
      </FlexContainer>
    </div>
  );
}

export default Lesson1;
