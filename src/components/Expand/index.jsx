import React from "react";
import styled, { css } from "styled-components";
import { motion } from "framer-motion";

function Expand({
  width,
  height,
  isExpanded,
  setIsExpanded,
  margin,
  background,
}) {
  return (
    <Container
      margin={margin}
      onClick={() => {
        setIsExpanded(!isExpanded);
      }}
    >
      <AccordionBar1
        height={height}
        width={width}
        isExpanded={isExpanded}
        background={background}
      />
      <AccordionBar2
        height={height}
        width={width}
        isExpanded={isExpanded}
        background={background}
      />
    </Container>
  );
}

const Container = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 0;
  background: 0;
  padding: 0;
  margin: ${(props) => props.margin};
`;

const AccordionBar1 = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.background};
  margin: 2.5px;
  transition: transform 150ms;
  transform: ${(props) =>
    props.isExpanded
      ? "translateY(5px) rotateZ(45deg) "
      : "translateY(4.5px) rotateZ(90deg)"};
`;

const AccordionBar2 = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.background};
  margin: 2.5px;
  transition: transform 150ms;
  transform: ${(props) =>
    props.isExpanded
      ? "translateY(-3px) rotateZ(-45deg)"
      : " translateY(-4px)"};
`;

export default Expand;
