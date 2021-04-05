import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export function SandboxContent1({
  displayProperty,
  columnsProperty,
  rowProperty,
}) {
  const boxData = [0, 0, 0, 0, 0, 0];
  const boxes = boxData.map(() => {
    return <RedBox layout />;
  });
  return (
    <Grid1
      displayProperty={displayProperty}
      columnsProperty={columnsProperty}
      rowProperty={rowProperty}
      layout
    >
      {boxes}
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

const RedBox = styled(motion.div)`
  height: 50px;
  width: 50px;
  background: red;
  margin: 10px;
  justify-self: center;
  align-self: center;
`;

export function SandboxContent2({ justifySelf, alignSelf }) {
  const boxData = [0, 0, 0, 0, 0, 0];
  const boxes = boxData.map(() => {
    return (
      <RedBoxCustomize
        layout
        justifySelf={justifySelf}
        alignSelf={alignSelf}
      />
    );
  });
  return <Grid2 layout>{boxes}</Grid2>;
}

const Grid2 = styled(motion.div)`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 133px 133px 133px;
  overflow: auto;
  height: 100%;
`;

const RedBoxCustomize = styled(RedBox)`
  justify-self: ${(props) => props.justifySelf};
  align-self: ${(props) => props.alignSelf};
  transform-origin: 50% 50% !important;
`;
