import styled, { css } from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "row"};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};

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
