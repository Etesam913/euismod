import React from "react";
import { CodeContainer, CodeLine } from "../../styling/GeneralComponents";
import StyledInput from "../../components/Input";

function QuizQuestionComponents({ id }) {
  function getComponent() {
    if (id === 2) {
      return (
        <CodeContainer margin="1rem 0">
          <CodeLine>grid-template-areas:</CodeLine>
          <CodeLine textIndent="1em">
            <StyledInput width="15rem" />
          </CodeLine>
          <CodeLine textIndent="1em">
            <StyledInput width="15rem" />
          </CodeLine>
          <CodeLine textIndent="1em">
            <StyledInput width="15rem" />
          </CodeLine>
          ;
        </CodeContainer>
      );
    }
  }

  return <div>{getComponent()}</div>;
}

export default QuizQuestionComponents;
