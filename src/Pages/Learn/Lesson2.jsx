import React, { useContext, useState, useRef, useEffect } from "react";
import {
  CodeContainer,
  CodeLine,
  FlexContainer,
  GridItem,
  LessonGrid,
  Property,
  Sandbox,
} from "../../styling/GeneralComponents";
import { Header2, Paragraph } from "../../styling/Headers";
import { SandboxContent2 } from "../../components/Sandboxes";
import StyledInput from "../../components/Input";
import { AppContext } from "../../Contexts";
import { motion } from "framer-motion";
import StyledButton from "../../components/Button";
import { renderSubmitText, solutionAnimation } from "./helpers";
import { checkSecondSolution } from "../../functions/SolutionChecks";
import Lesson1 from "./Lesson1";

function Lesson2({ setIsSideNavShowing }) {
  const { size } = useContext(AppContext);
  const [solutionObj, setSolutionObj] = useState(null);
  const [justifyText, setJustifyText] = useState("");
  const [alignText, setAlignText] = useState("");
  const justifySelfRef = useRef(null);
  const alignSelfRef = useRef(null);
  const boxData = [0, 0, 0, 0, 0, 0];
  const htmlBoxes = boxData.map((val, index) => {
    return (
      <CodeLine textIndent="1em" key={"box-" + index}>
        &#60;div class="box"&#62;&#60;/div&#62;
      </CodeLine>
    );
  });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("lesson2Data"));
    if (data !== null) {
      setJustifyText(data.justifyText);
      setAlignText(data.alignText);
      setSolutionObj(data.solutionObj);
    }
  }, [setJustifyText, setAlignText, setSolutionObj]);

  useEffect(() => {
    localStorage.setItem(
      "lesson2Data",
      JSON.stringify({
        justifyText: justifyText,
        alignText: alignText,
        solutionObj: solutionObj,
      })
    );
  }, [justifyText, alignText, solutionObj]);

  function onSubmit() {
    const tempSolObj = checkSecondSolution(justifySelfRef, alignSelfRef);
    setSolutionObj(tempSolObj);
    const data = JSON.parse(localStorage.getItem("lesson2Data"));
    if (data !== null) {
      localStorage.setItem(
        "lesson2Data",
        JSON.stringify({
          justifyText: data.justifyText,
          alignText: data.alignText,
          solutionObj: tempSolObj,
        })
      );
    }
    if (tempSolObj.isSolved) {
      setIsSideNavShowing(true);
    }
  }

  return (
    <div>
      <LessonGrid>
        <GridItem>
          <Header2 textAlign="center">See Changes</Header2>
          <Sandbox>
            <SandboxContent2 justifySelf={justifyText} alignSelf={alignText} />
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
            A grid item can be aligned horizontally by using the
            <Property>justify-self</Property> property. It can be aligned
            vertically by using the align-self property. For instance, to align
            an grid item to the center left of its grid container you would set{" "}
            <Property>justify-self: start</Property> and
            <Property>align-self: center</Property>.
          </Paragraph>
          <Header2 margin="0.75rem 0" responsive>
            Task:
          </Header2>
          <Paragraph margin="0" responsive fontSize="1.1em">
            Align each box to the bottom left of its grid container.
          </Paragraph>
        </GridItem>
        <GridItem>
          <Header2 textAlign="center">CSS</Header2>
          <CodeContainer>
            <CodeLine>.box &#123;</CodeLine>
            <CodeLine textIndent="1em">height: 50px;</CodeLine>
            <CodeLine textIndent="1em">width: 50px;</CodeLine>
            <CodeLine textIndent="1em">background: red;</CodeLine>
            <CodeLine textIndent="1em">margin: 10px;</CodeLine>
            <CodeLine textIndent="1em">
              justify-self:
              <StyledInput
                passedRef={justifySelfRef}
                stateToUpdate={justifyText}
                setStateToUpdate={setJustifyText}
              />
              ;
            </CodeLine>
            <CodeLine textIndent="1em">
              align-self:
              <StyledInput
                passedRef={alignSelfRef}
                stateToUpdate={alignText}
                setStateToUpdate={setAlignText}
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

export default Lesson2;
