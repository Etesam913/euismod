import React from "react";
import { CodeContainer, CodeLine } from "../../styling/GeneralComponents";
import StyledInput from "../../components/Input";

function QuizQuestionComponents({ id, answerData, setAnswerData }) {
  function getComponent() {
    if (id === 2) {
      return (
        <CodeContainer margin="1rem 0">
          <CodeLine>grid-template-areas:</CodeLine>
          <CodeLine textIndent="1em">
            "
            <StyledInput
              width="15rem"
              stateToUpdate={answerData}
              setStateToUpdate={setAnswerData}
              property="gridTemplateArea1"
            />
            "
          </CodeLine>
          <CodeLine textIndent="1em">
            "
            <StyledInput
              width="15rem"
              stateToUpdate={answerData}
              setStateToUpdate={setAnswerData}
              property="gridTemplateArea2"
            />
            "
          </CodeLine>
          <CodeLine textIndent="1em">
            "
            <StyledInput
              width="15rem"
              stateToUpdate={answerData}
              setStateToUpdate={setAnswerData}
              property="gridTemplateArea3"
            />
            "
          </CodeLine>
          ;
        </CodeContainer>
      );
    }
  }

  return <section>{getComponent()}</section>;
}

export default QuizQuestionComponents;
