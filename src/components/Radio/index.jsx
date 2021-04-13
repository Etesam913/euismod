import React, { useContext, useState } from "react";
import styled, { withTheme } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FlexContainer } from "../../styling/GeneralComponents";
import { RadioContext } from "../../Contexts";

function Radio({ margin, labelText, theme, index }) {
  const { selectedRadio, setSelectedRadio } = useContext(RadioContext);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <FlexContainer alignItems="center" justifyContent="flex-start">
      <StyledRadio
        margin={margin}
        onHoverStart={() => {
          setIsHovered(true);
        }}
        onHoverEnd={() => {
          setIsHovered(false);
        }}
        onClick={() => {
          setSelectedRadio(index);
        }}
        initial={{ background: theme.colors.lowContrastBackground }}
        animate={
          isHovered
            ? { background: theme.colors.selected }
            : { background: theme.colors.lowContrastBackground }
        }
      >
        <AnimatePresence>
          {selectedRadio === index && (
            <RadioCircle
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
            />
          )}
        </AnimatePresence>
      </StyledRadio>
      <Choice
        onHoverStart={() => {
          setIsHovered(true);
        }}
        onHoverEnd={() => {
          setIsHovered(false);
        }}
        fontSize="1.15em"
        margin="0.75rem 1rem"
        style={{ cursor: "pointer" }}
        onClick={() => {
          setSelectedRadio(index);
        }}
      >
        {labelText}
      </Choice>
    </FlexContainer>
  );
}

const StyledRadio = styled(motion.button)`
  margin: ${(props) => props.margin};
  min-height: 1.5rem;
  min-width: 1.5rem;
  /*background: ${(props) => props.theme.colors.lowContrastBackground};
  transition: background 150ms;*/
  border-radius: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 0;
  padding: 0;
`;

const RadioCircle = styled(motion.div)`
  background: ${(props) => props.theme.colors.primary};
  min-height: 0.75rem;
  min-width: 0.75rem;
  border-radius: 10rem;
  transition: background 150ms;
`;

const Choice = styled(motion.button)`
  background: ${(props) => props.theme.colors.lowContrastBackground};
  padding: 1rem;
  border: 0;
  text-align: left;
  border-radius: 1rem;
  font-size: ${(props) => props.fontSize};
  margin: ${(props) => props.margin};
  color: ${(props) => props.theme.colors.primary};
  transition: color 150ms, background 150ms;
  font-family: ${(props) => props.theme.fonts.secondary};
`;
export default withTheme(Radio);
