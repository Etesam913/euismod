import React from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { buttonVariants2 } from "../../styling/variants";
import { useHistory } from "react-router-dom";

function StyledButton({ text, to, onClick, margin, children, type }) {
  const history = useHistory();

  function handleClick() {
    if (to) {
      history.push(to);
    }
    if (onClick) {
      onClick();
    }
  }

  return (
    <StyledButtonWrapper
      onClick={() => {
        handleClick();
      }}
      variants={buttonVariants2}
      whileHover="hover"
      whileTap="tap"
      margin={margin}
      type={type}
    >
      {text}
      {children}
    </StyledButtonWrapper>
  );
}

const StyledButtonWrapper = styled(motion.button)`
  border: 0;
  cursor: pointer;
  font-size: 1rem;
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: normal;
  padding: 0.75rem;
  border-radius: 0.5rem;
  margin: ${(props) => (props.margin ? props.margin : "0.5rem 0.5rem")};
  background: ${(props) => props.theme.colors.buttonPrimary};
  color: ${(props) => props.theme.colors.primary};
  transition: background-color 150ms ease-in-out, color 150ms ease-in-out;

  ${(props) =>
    props.type === "warning" &&
    css`
      background: #ffc107;
      color: black;
    `}

  ${(props) =>
    props.type === "danger" &&
    css`
      background: #dc3545;
      color: white;
    `}
`;

export default StyledButton;
