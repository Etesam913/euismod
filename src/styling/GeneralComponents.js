import styled, { css } from "styled-components";

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
  @media screen and (max-width: 768px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto auto auto;
  }
`;

export const Sandbox = styled.div`
  height: 400px;
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
  text-indent: ${props=>props.textIndent};
  font-family: ${(props) => props.theme.fonts.code};
`;

export const GridItem = styled.div`
  padding: 0.5rem 1rem;
  box-sizing: border-box;
`;


