import React from "react";
import { RadioContext } from "../../Contexts";

function RadioController({ children, selectedRadio, setSelectedRadio }) {
  return (
    <RadioContext.Provider value={{ selectedRadio, setSelectedRadio }}>
      {children}
    </RadioContext.Provider>
  );
}

export default RadioController;
