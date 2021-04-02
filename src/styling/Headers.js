import styled, {css} from "styled-components";

export const Header1 = styled.h1`
  color: ${(props) => props.theme.colors.primary};
  transition: color 150ms ease-in-out;
  margin: ${(props) => (props.margin ? props.margin : "0.75rem 0.5rem")};
  font-weight: 600;
  font-size: 2.25em;
  font-family: "Lexend", "Roboto", "Helvetica", "Arial";
  ${props=>props.invert && css`
    ${invertStyles}
  `};
  
`;

export const Header2 = styled.h2`
  font-size: 1.5em;
  margin: ${(props) => (props.margin ? props.margin : "0.5rem 0.5rem")};
  color: ${(props) => props.theme.colors.primary};
  transition: color 150ms ease-in-out;
  ${props=>props.invert && css`
    ${invertStyles}
  `};
`;

export const Paragraph = styled.p`
  margin: ${(props) => (props.margin ? props.margin : "0.5rem 0.5rem")};
  color: ${(props) => props.theme.colors.primary};
  transition: color 150ms ease-in-out;
  max-width: ${props=>props.maxWidth};
  font-size: ${props=>props.fontSize ? props.fontSize : "1em"};
  ${props=>props.invert && css`
    ${invertStyles}
  `};
`;

const invertStyles = css`
  color: ${(props) => props.theme.colors.background};
`;