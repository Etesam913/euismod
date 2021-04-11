import React from "react";
import { FlexContainer, ResponsiveImg } from "../../styling/GeneralComponents";

function QuizTemplate({ questionText, choices, imgSrc }) {
  return (
    <FlexContainer flexDirection="column">
      <div>{imgSrc && <ResponsiveImg src={imgSrc} />}</div>
      <aside></aside>
    </FlexContainer>
  );
}

export default QuizTemplate;
