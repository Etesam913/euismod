import React from "react";
import styled from "styled-components";

export function SandboxContent1({
  displayProperty,
  columnsProperty,
  rowProperty,
}) {
  return (
    <Grid1
      displayProperty={displayProperty}
      columnsProperty={columnsProperty}
      rowProperty={rowProperty}
    >
      <RedBox />
      <RedBox />
      <RedBox />
      <RedBox />
      <RedBox />
      <RedBox />
    </Grid1>
  );
}

const Grid1 = styled.div`
  display: ${(props) => props.displayProperty};
  grid-template-columns: ${(props) => props.columnsProperty};
  grid-template-rows: ${(props) => props.rowProperty};
  overflow: auto;
  height: 100%;
`;

const RedBox = styled.div`
  height: 50px;
  width: 50px;
  background: red;
  margin: 10px;
  justify-self: center;
  align-self: center;
`;

export function SandboxContent2({ justifySelf, alignSelf }) {
  return (
    <Grid2>
      <RedBoxCustomize justifySelf={justifySelf} alignSelf={alignSelf} />
      <RedBoxCustomize justifySelf={justifySelf} alignSelf={alignSelf} />
      <RedBoxCustomize justifySelf={justifySelf} alignSelf={alignSelf} />
      <RedBoxCustomize justifySelf={justifySelf} alignSelf={alignSelf} />
      <RedBoxCustomize justifySelf={justifySelf} alignSelf={alignSelf} />
      <RedBoxCustomize justifySelf={justifySelf} alignSelf={alignSelf} />
    </Grid2>
  );
}

const Grid2 = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 133px 133px 133px;
  overflow: auto;
  height: 100%;
`;

const RedBoxCustomize = styled(RedBox)`
  justify-self: ${(props) => props.justifySelf};
  align-self: ${(props) => props.alignSelf};
`;
