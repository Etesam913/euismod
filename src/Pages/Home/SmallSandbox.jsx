import React from "react";
import styled from "styled-components";

function SmallSandbox() {
  return <Sandbox></Sandbox>;
}

const Sandbox = styled.div`
  width: 100%;
  height: 25rem;
  border: 1px solid ${(props) => props.theme.colors.primary};
`;

export default SmallSandbox;
