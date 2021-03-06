import React, { useContext } from "react";
import styled from "styled-components";
import { XSvg } from "../../SvgMaster";
import { AnimatePresence, motion } from "framer-motion";
import { alertVariants } from "../../styling/variants";
import { ErrorAlert, SuccessAlert } from "../../styling/GeneralComponents";
import { AppContext } from "../../Contexts";

export function onLessonSubmit(
  lessonData,
  setLessonData,
  solutionCheck,
  localStorageId,
  setIsSideNavShowing
) {
  const tempSolObj = solutionCheck;
  const tempLesson = { ...lessonData };
  tempLesson.solutionObj = tempSolObj;
  setLessonData(tempLesson);
  localStorage.setItem(localStorageId, JSON.stringify(tempLesson));
  if (tempSolObj.isSolved) {
    setIsSideNavShowing(true);
  }
}

export function renderSubmitText(lessonData, setLessonData) {
  const { size } = useContext(AppContext);

  function handleClick(textToDelete, useCase) {
    const tempLesson = { ...lessonData };
    if (useCase === "success") {
      tempLesson.solutionObj.text = null;
      setLessonData(tempLesson);
    } else if (useCase === "error") {
      const curIndex = tempLesson.solutionObj.text.indexOf(textToDelete);
      tempLesson.solutionObj.text[curIndex] = null;
      setLessonData(tempLesson);
    }
  }

  function getText() {
    if (lessonData !== null && lessonData.solutionObj) {
      if (lessonData.solutionObj.isSolved) {
        return (
          <AnimatePresence>
            {lessonData.solutionObj.text !== null && (
              <SuccessAlert
                textAlign="left"
                minWidth="5.5rem"
                variants={alertVariants}
                initial="init"
                animate="anim"
                exit="exit"
                custom={28}
              >
                {lessonData.solutionObj.text}
                <XButton
                  height="24px"
                  width="24px"
                  onClick={() => {
                    handleClick(null, "success");
                  }}
                >
                  <XSvg height="24px" width="24px" fill="#185927" />
                </XButton>
              </SuccessAlert>
            )}
          </AnimatePresence>
        );
      } else {
        return lessonData.solutionObj.text.map((text, index) => {
          return (
            <AnimatePresence>
              {text !== null && (
                <ErrorAlert
                  textAlign="left"
                  key={`error-${index}`}
                  variants={alertVariants}
                  initial="init"
                  animate="anim"
                  exit="exit"
                  width={size.width <= 768 && "13rem"}
                  custom={size.width < 768 ? 60 : 28}
                  overflowY="hidden"
                >
                  {text}
                  <XButton
                    height="24px"
                    width="24px"
                    onClick={() => {
                      handleClick(text, "error");
                    }}
                  >
                    <XSvg height="24px" width="24px" fill="#721c24" />
                  </XButton>
                </ErrorAlert>
              )}
            </AnimatePresence>
          );
        });
      }
    }
  }

  return <SubmitList>{getText()}</SubmitList>;
}

const XButton = styled(motion.button)`
  border: 0;
  background: none;
  padding: 0;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  cursor: pointer;
`;

const SubmitList = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0;
  overflow: hidden;
  width: 100%;
`;
