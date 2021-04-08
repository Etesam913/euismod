import React from "react";
import styled from "styled-components";

function StyledInput({
  placeholder,
  width,
  passedRef,
  stateToUpdate,
  setStateToUpdate,
  property,
}) {
  function handleChange(e) {
    if (setStateToUpdate) {
      if (property !== null) {
        const tempState = { ...stateToUpdate };
        tempState[property] = e.target.value;
        setStateToUpdate(tempState);
      } else {
        setStateToUpdate(e.target.value);
      }
    }
  }

  return (
    <Input
      ref={passedRef}
      placeholder={placeholder}
      width={width}
      autoComplete={"off"}
      value={stateToUpdate[property]}
      onChange={(e) => {
        handleChange(e);
      }}
    />
  );
}

const Input = styled.input`
  border: 0;
  padding: 0.25rem;
  background: ${(props) => props.theme.colors.inputBackground};
  color: ${(props) => props.theme.colors.primary};
  border-radius: 0.25rem;
  transition: 150ms;
  font-family: ${(props) => props.theme.fonts.code};
  font-size: 0.75em;
  width: ${(props) => (props.width ? props.width : "8rem")};
`;

export default StyledInput;
