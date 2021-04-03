import styled, { css } from "styled-components";
import React from "react";
import { motion } from "framer-motion";

const Hamburger = ({ sideNav, setSideNav, height, width }) => {
  return (
    <Container
      onClick={() => {
        setSideNav(!sideNav);
      }}
    >
      <HamburgerBar height={height} width={width} sideNav1={sideNav} />
      <HamburgerBar height={height} width={width} sideNav2={sideNav} />
      <HamburgerBar height={height} width={width} sideNav3={sideNav} />
    </Container>
  );
};

const HamburgerBar = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${props=>props.theme.colors.primary};
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
      transform: translateY(4.35px) rotateZ(45deg);
      transition: 150ms ease-in-out;
    `};

  ${(props) =>
    props.sideNav3 &&
    css`
      transform: translateY(-3.3px) rotateZ(-47deg);
      transition: 150ms ease-in-out;
    `}
`;

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export default Hamburger;
