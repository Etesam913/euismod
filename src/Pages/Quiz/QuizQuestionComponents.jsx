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
    } else if (id === 4) {
      return (
        <CodeContainer margin="1rem 0">
          <CodeLine> display: grid; </CodeLine>
          <CodeLine>
            {" "}
            grid-template-columns: <StyledInput width="13rem" />;
          </CodeLine>
          <CodeLine>
            grid-template-rows: <StyledInput width="13rem" />;
          </CodeLine>
        </CodeContainer>
      );
    }
  }

  return <section>{getComponent()}</section>;
}

export default QuizQuestionComponents;
