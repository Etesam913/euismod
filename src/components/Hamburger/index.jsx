import styled, { css } from "styled-components";
import React from "react";
import { motion } from "framer-motion";

const Hamburger = ({
  stateChange,
  setStateChange,
  height,
  width,
  padding,
  margin,
  useCase,
}) => {
  return (
    <Container
      onClick={() => {
        setStateChange(!stateChange);
      }}
      padding={padding}
      margin={margin}
      useCase={useCase}
    >
      <HamburgerBar height={height} width={width} sideNav1={stateChange} />
      <HamburgerBar height={height} width={width} sideNav2={stateChange} />
      <HamburgerBar height={height} width={width} sideNav3={stateChange} />
    </Container>
  );
};

const HamburgerBar = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.theme.colors.primary};
  margin: 2.5px;
  transition: 150ms ease-in-out;
  ${(props) =>
    props.sideNav1 &&
    css`
      transform: translateY(5.5px);
      opacity: 0;
      transition: 75ms ease-in-out;
    `};

  ${(props) =>
    props.sideNav2 &&
    css`
      transform: translateY(0.35px) rotateZ(45deg);
      transition: 150ms ease-in-out;
    `};

  ${(props) =>
    props.sideNav3 &&
    css`
      transform: translateY(-7.3px) rotateZ(-47deg);
      transition: 150ms ease-in-out;
    `}
`;

const Container = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: ${(props) => (props.padding ? props.padding : 0)};
  background: 0;
  border: 0;
  margin: ${(props) => props.margin};
  ${(props) =>
    props.useCase === "home" &&
    css`
      position: absolute;
      z-index: 2;
      right: 1rem;
      top: 1rem;
    `};
`;

export default Hamburger;
