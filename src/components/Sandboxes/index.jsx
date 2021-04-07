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
      <RedBoxCustomize layout justifySelf={justifySelf} alignSelf={alignSelf} />
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

export function SandboxContent3({
  area1,
  area2,
  area3,
  headerText,
  sidebarText,
  mainContentText,
  footerText,
}) {
  return (
    <Grid3 layout area1={area1} area2={area2} area3={area3}>
      <Header layout headerText={headerText}>
        Header
      </Header>
      <Sidebar layout sidebarText={sidebarText}>
        Sidebar
      </Sidebar>
      <MainContent layout>Main Content</MainContent>
      <Footer layout>Footer</Footer>
    </Grid3>
  );
}

const Grid3 = styled(motion.div)`
  display: grid;
  grid-template-columns: 33.333% 66.666%;
  grid-template-rows: 44px 408px 44px;
  text-align: center;
  font-size: 1.2em;
  font-family: ${(props) => props.theme.fonts.primary};
  grid-template-areas:
    "${(props) => props.area1}"
    "${(props) => props.area2}"
    "${(props) => props.area3}";

  /*grid-template-areas:
    "header header header"
    "sidebar main-content main-content"
    "footer footer footer";*/
`;

const Header = styled(motion.header)`
  background: #ff5454;
  /*grid-area: header;*/
  grid-area: ${(props) => props.headerText};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Sidebar = styled(motion.section)`
  background: #61cc9e;
  /*grid-area: sidebar;*/
  grid-area: ${(props) => props.sideBarText};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainContent = styled(motion.section)`
  background: #ffffff;
  /*grid-area: main-content;*/
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = styled(motion.footer)`
  background: #54a3ff;
  /*grid-area: footer;*/
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Text = styled.span`
  align-self: center;
`;
