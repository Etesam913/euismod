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
  @media screen and (max-width: 768px) {
    padding: 0.5rem 2rem;
  }
`;

export const Property = styled.span`
  background: ${(props) => props.theme.colors.lowContrastBackground};
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.code};
  font-size: 0.75em;
  transition: 150ms;
  margin: ${(props) => (props.margin ? props.margin : "0.2rem .35rem")};
  padding: 0.2rem 0.3rem;
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

export const SidebarContainer = styled(motion.aside)`
  display: block;
  position: absolute;
  background: ${(props) => props.theme.colors.lowContrastBackground};
  overflow: hidden;
  border-top-right-radius: 0.75rem;
  border-bottom-right-radius: 0.75rem;
  box-sizing: border-box;
  z-index: 1;
  top: 7rem;
  @media screen and (max-width: 768px) {
    top: 4.35rem;
    transition: top 300ms;
  }
  transition: top 300ms;
  box-shadow: ${(props) => props.theme.misc.shadow};
`;

export const SidebarList = styled(motion.ul)`
  list-style-type: none;
  padding: 0;
`;

export const SidebarItem = styled.li`
  margin-top: 1.5rem;
`;

export const SidebarItemButton = styled(motion.button)`
  font-size: 1.25em;
  border: none;
  cursor: pointer;
  background-color: ${(props) =>
    props.selected
      ? props.theme.colors.selected
      : props.theme.colors.lowContrastBackground};
  color: ${(props) => props.theme.colors.primary};
  font-family: ${(props) => props.theme.fonts.primary};
  font-weight: normal;
  padding: 0.75rem 0.3rem 0.75rem 0.75rem;
  width: 100%;
  text-align: left;
  border-radius: 0.5rem;
  transition: 200ms ease-in-out;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: space-between;

  :hover {
    background: ${(props) => props.theme.colors.highlighted};
    transition: 200ms ease-in-out;
  }
`;
