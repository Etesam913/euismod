import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { ErrorAlert, FlexContainer } from "../../styling/GeneralComponents";
import Expand from "../Expand";

function Accordion({ useCase, headerText, paragraphText }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {useCase === "error" && (
        <ErrorAlert
          padding="0.75rem"
          margin="1rem"
          fontSize="1.05em"
          display="block"
          initial={{ height: 22 }}
          animate={isOpen ? { height: 100 } : { height: 22 }}
        >
          <FlexContainer>
            <Expand
              margin={"0 0.5rem 0 0"}
              height="3px"
              width="1.25rem"
              isExpanded={isOpen}
              setIsExpanded={setIsOpen}
              background={"#721c24"}
            />
            {headerText}
          </FlexContainer>

          {isOpen && <ParagraphText>{paragraphText}</ParagraphText>}
        </ErrorAlert>
      )}
    </>
  );
}

const ParagraphText = styled(motion.p)`
  padding: 0.75rem 0 0 2.25rem;
  margin: 0;
`;

export default Accordion;
