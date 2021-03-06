import styled, { css } from "styled-components";
import { motion } from "framer-motion";

const responsive = css`
  ${(props) =>
    props.responsive &&
    css`
      @media screen and (max-width: 768px) {
        text-align: center;
      }
    `}
`;

const headerDefaults = css`
  color: ${(props) => (props.color ? props.color : props.theme.colors.primary)};
  margin: ${(props) => (props.margin ? props.margin : "0.5rem 0.5rem")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "600")};
  max-width: ${(props) => props.maxWidth};
  transition: color 150ms ease-in-out;
  text-align: ${(props) => props.textAlign};
  padding: ${(props) => props.padding};
  display: ${(props) => (props.display ? props.display : "block")};
  font-family: ${(props) => props.theme.fonts.primary};
  ${responsive}
  ${(props) =>
    props.invert &&
    css`
      ${invertStyles}
    `};
`;

export const Header1 = styled(motion.h1)`
  ${headerDefaults};
  margin: ${(props) => (props.margin ? props.margin : "0.75rem 0.5rem")};
  font-size: 2.25em;
`;

export const Header2 = styled.h2`
  ${headerDefaults};
  font-size: 1.5em;
`;

export const Header3 = styled.h3`
  ${headerDefaults};
  font-size: 1.25em;
`;

export const Paragraph = styled(motion.p)`
  color: ${(props) => props.theme.colors.primary};
  margin: ${(props) => (props.margin ? props.margin : "0.5rem 0.5rem")};
  transition: color 150ms ease-in-out;
  display: ${(props) => (props.display ? props.display : "block")};
  max-width: ${(props) => props.maxWidth};
  font-size: ${(props) => (props.fontSize ? props.fontSize : "1em")};
  text-align: ${(props) => props.textAlign};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : "1.5em")};
  ${(props) =>
    props.invert &&
    css`
      ${invertStyles}
    `};
  ${responsive}
`;

const invertStyles = css`
  color: ${(props) => props.theme.colors.background};
`;
