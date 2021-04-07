export function checkFirstSolution(displayRef, columnsRef, rowsRef) {
  if (displayRef && columnsRef && rowsRef) {
    const sanitizedDisplayText = displayRef.current.value.trim().toLowerCase();
    const sanitizedColumnsText = columnsRef.current.value.trim().toLowerCase();
    const sanitizedRowText = rowsRef.current.value.trim().toLowerCase();

    console.log(sanitizedDisplayText);
    console.log(sanitizedColumnsText);
    console.log(sanitizedRowText);

    const displayTextSolution = "grid";
    const columnsTextSolution = "50% 50%";
    const rowsTextSolution = "133px 133px 133px";

    if (
      sanitizedDisplayText === displayTextSolution &&
      sanitizedColumnsText === columnsTextSolution &&
      sanitizedRowText === rowsTextSolution
    ) {
      return { isSolved: true, text: "Correct" };
    } else {
      let errorTexts = [null, null, null];
      if (sanitizedDisplayText !== displayTextSolution) {
        displayRef.current.focus();
        errorTexts[0] = "The display property is incorrect";
      }
      if (sanitizedColumnsText !== columnsTextSolution) {
        columnsRef.current.focus();
        errorTexts[1] = "The grid-template-columns property is incorrect";
      }
      if (sanitizedRowText !== rowsTextSolution) {
        rowsRef.current.focus();
        errorTexts[2] = "The grid-template-rows property is incorrect";
      }
      console.log(errorTexts);
      return { isSolved: false, text: errorTexts };
    }
  }
}

export function checkSecondSolution(justifySelfRef, alignSelfRef) {
  if (justifySelfRef && alignSelfRef) {
    const sanitizedJustifyText = justifySelfRef.current.value
      .trim()
      .toLowerCase();
    const sanitizedAlignText = alignSelfRef.current.value.trim().toLowerCase();

    const justifySolution = "start";
    const justifySolution2 = "left";
    const alignSolution = "end";

    if (
      (sanitizedJustifyText === justifySolution ||
        sanitizedJustifyText === justifySolution2) &&
      sanitizedAlignText === alignSolution
    ) {
      return { isSolved: true, text: "Correct" };
    } else {
      let errorTexts = [null, null];
      if (sanitizedJustifyText !== justifySolution) {
        justifySelfRef.current.focus();
        errorTexts[0] = "The justify-self is incorrect";
      }
      if (sanitizedAlignText !== alignSolution) {
        alignSelfRef.current.focus();
        errorTexts[1] = "The align-self property is incorrect";
      }
      return { isSolved: false, text: errorTexts };
    }
  }
}
