import React from "react";
import styled from "styled-components";
import { XSvg } from "../../SvgMaster";
import { AnimatePresence, motion } from "framer-motion";
import { alertVariants } from "../../styling/variants";
import { ErrorAlert, SuccessAlert } from "../../styling/GeneralComponents";

export function renderSubmitText(solutionObj, setSolutionObj) {
  function handleClick(textToDelete, useCase) {
    const tempSolObj = { ...solutionObj };
    if (useCase === "success") {
      tempSolObj.text = null;
      setSolutionObj(tempSolObj);
      console.log(tempSolObj);
    } else if (useCase === "error") {
      const curIndex = tempSolObj.text.indexOf(textToDelete);
      tempSolObj.text[curIndex] = null;
      setSolutionObj(tempSolObj);
    }
  }

  function getText() {
    if (solutionObj !== null) {
      if (solutionObj.isSolved) {
        return (
          <AnimatePresence>
            {solutionObj.text !== null && (
              <SuccessAlert
                textAlign="right"
                width="5rem"
                variants={alertVariants}
                initial="init"
                animate="anim"
                exit="exit"
              >
                {solutionObj.text}
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
        return solutionObj.text.map((text, index) => {
          return (
            <AnimatePresence>
              {text !== null && (
                <ErrorAlert
                  textAlign="right"
                  key={`error-${index}`}
                  variants={alertVariants}
                  initial="init"
                  animate="anim"
                  exit="exit"
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

  return <SubmitList style={{ overflow: "hidden" }}>{getText()}</SubmitList>;
}

export function solutionAnimation(solutionObj) {
  if (solutionObj !== null) {
    if (solutionObj.isSolved) {
      return { height: 54 };
    } else {
      return { height: 54 * solutionObj.text.length };
    }
  } else {
    return { height: 0 };
  }
}

const XButton = styled(motion.button)`
  border: 0;
  background: none;
  padding: 0;
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  cursor: pointer;
  margin-top: 1px;
`;

const SubmitList = styled.ul`
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin: 0;
`;
