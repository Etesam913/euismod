import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styled from "styled-components";
import { ErrorAlert, FlexContainer } from "../../styling/GeneralComponents";
import Expand from "../Expand";

function Accordion({
  useCase,
  headerText,
  children,
  width,
  closedHeight,
  expandedHeight,
  margin,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {useCase === "error" && (
        <ErrorAlert
          padding="1rem"
          margin={margin}
          fontSize="20px"
          display="block"
          width={width}
          initial={{ height: closedHeight }}
          animate={
            isOpen ? { height: expandedHeight } : { height: closedHeight }
          }
        >
          <FlexContainer justifyContent="flex-start">
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
          <AnimatePresence>
            {isOpen && (
              <ParagraphText
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {children}
              </ParagraphText>
            )}
          </AnimatePresence>
        </ErrorAlert>
      )}
    </>
  );
}

const ParagraphText = styled(motion.p)`
  padding: 0.75rem 1.15rem 0 2.25rem;
  margin: 0;
`;

export default Accordion;
