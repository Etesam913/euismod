import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "row"};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
  padding: ${(props) => props.padding};

  // Row Specific Styles
  ${(props) =>
    props.flexDirection !== "column" && css``} // Column Specific Styles
  ${(props) =>
    props.flexDirection === "column" &&
    css`
      @media screen and (max-width: 768px) {
        ${(props) =>
          props.responsive &&
          css`
            align-items: center;
          `}
      }
    `}
`;

export const LessonGrid = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto auto;
  grid-template-areas:
      "sandbox info"
      "css html";

  @media screen and (max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto auto auto;
    grid-template-areas:
      "info"
      "sandbox"
      "css"
      "html";
  }
`;

export const LessonGridType2 = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto auto;
  grid-template-areas:
    "sandbox info"
    "css info"
    "css html"
    "css html";
  @media screen and (max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto auto auto;
    grid-template-areas:
      "info"
      "sandbox"
      "css"
      "html";
  }
`;

export const Sandbox = styled.div`
  height: ${(props) => (props.height ? props.height : "400px")};
  width: 100%;
  border: 2px solid ${(props) => props.theme.colors.primary};
  transition: border 150ms;
  box-sizing: border-box;
`;

export const CodeContainer = styled.div`
  height: auto;
  width: 100%;
  display: block;
  background: ${(props) => props.theme.colors.lowContrastBackground};
  padding: 1rem;
  border-radius: 0.5rem;
  font-size: 1em;
  box-sizing: border-box;
  color: ${(props) => props.theme.colors.primary};
  transition: 150ms;
  line-height: 1.75rem;
`;

export const CodeLine = styled.code`
  display: block;
  text-indent: ${(props) => props.textIndent};
  font-family: ${(props) => props.theme.fonts.code};
`;

export const GridItem = styled.div`
  padding: 0.5rem 1rem;
  box-sizing: border-box;
  grid-area: ${(props) => props.gridArea};
`;

export const Property = styled.span`
  background: ${(props) => props.theme.colors.lowContrastBackground};
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.code};
  font-size: 0.75em;
  transition: 150ms;
  margin: ${(props) => (props.margin ? props.margin : "0.2rem .35rem")};
  padding: 0.2rem;
  border-radius: 0.5rem;
  white-space: nowrap;
`;

export const MultiLineProperty = styled(Property)`
  padding: 0.5rem;
  width: max-content;
  display: block;
  text-align: left;
  /* line-height: 1.75em;*/
`;

export const ResponsiveImg = styled.img`
  width: 100%;
  height: auto;
  margin: ${(props) => props.margin};
  max-width: ${(props) => props.maxWidth};
`;

export const SuccessAlert = styled(motion.li)`
  color: #185927;
  margin: 0;
  border-radius: 0.5rem;
  background: ${(props) => props.theme.colors.success} !important;
  min-width: ${(props) => props.minWidth};
  width: max-content;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: ${(props) => props.textAlign};
`;

export const ErrorAlert = styled(SuccessAlert)`
  color: #721c24;
  overflow: hidden;
  margin: 0;
  background: ${(props) => props.theme.colors.error} !important;
`;
