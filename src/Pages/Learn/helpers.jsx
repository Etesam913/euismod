import { ErrorText, SuccessText } from "../../styling/Headers";
import React from "react";

export function renderSubmitText(solutionObj) {
  function getText() {
    if (solutionObj !== null) {
      console.log(solutionObj);
      if (solutionObj.isSolved) {
        return (
          <SuccessText
            textAlign="right"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            {solutionObj.text}
          </SuccessText>
        );
      } else {
        return solutionObj.text.map((text, index) => {
          return (
            <ErrorText
              textAlign="right"
              key={`error-${index}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {text}
            </ErrorText>
          );
        });
      }
    }
  }

  return <div>{getText()}</div>;
}

export function solutionAnimation(solutionObj) {
  if (solutionObj !== null) {
    if (solutionObj.isSolved) {
      return { height: 32 };
    } else {
      return { height: 32 * solutionObj.text.length };
    }
  } else {
    return { height: 0 };
  }
}
