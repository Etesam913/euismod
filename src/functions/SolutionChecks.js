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
      if (
        sanitizedJustifyText !== justifySolution &&
        sanitizedJustifyText !== justifySolution2
      ) {
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

function checkEquality(arr, valToCheckAgainst) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== valToCheckAgainst) {
      return false;
    }
  }
  return true;
}

export function checkThirdSolution(lesson3Data) {
  let errorTexts = [null, null, null, null, null, null, null];
  const area1Arr = lesson3Data.gridTemplateArea1.trim().split(" ");
  const area2Arr = lesson3Data.gridTemplateArea2.trim().split(" ");
  const area3Arr = lesson3Data.gridTemplateArea3.trim().split(" ");
  console.log(area1Arr);
  console.log(area2Arr);
  console.log(area3Arr);
  if (
    area1Arr.length !== 3 ||
    !checkEquality(area1Arr, area1Arr[0]) ||
    area1Arr[0] === area3Arr[0]
  ) {
    errorTexts[0] = "The first grid template area is wrong";
  }
  if (
    area2Arr.length !== 3 ||
    area2Arr[0] === area2Arr[1] ||
    area2Arr[1] !== area2Arr[2] ||
    area2Arr[0] === area1Arr[0] ||
    area2Arr[0] === area3Arr[0] ||
    area2Arr[1] === area1Arr[0] ||
    area2Arr[1] === area3Arr[0]
  ) {
    errorTexts[1] = "The second grid template area is wrong";
  }
  if (area3Arr.length !== 3 || !checkEquality(area3Arr, area3Arr[0])) {
    errorTexts[2] = "The third grid template area is wrong";
  }

  if (
    area1Arr[0] !== lesson3Data.headerGridArea.trim() ||
    area1Arr[0].trim() === ""
  ) {
    errorTexts[3] = "The header grid area is wrong";
  }
  if (
    area2Arr[0] !== lesson3Data.sidebarGridArea.trim() ||
    area2Arr[0].trim() === ""
  ) {
    errorTexts[4] = "The sidebar grid area is wrong";
  }
  if (
    area2Arr[1] !== lesson3Data.mainContentGridArea.trim() ||
    area2Arr[1].trim() === ""
  ) {
    errorTexts[5] = "The main content grid area is wrong";
  }
  if (
    area3Arr[0] !== lesson3Data.footerGridArea.trim() ||
    area3Arr[0].trim() === ""
  ) {
    errorTexts[6] = "The footer content grid area is wrong";
  }

  if (checkEquality(errorTexts, null)) {
    return { isSolved: true, text: "Correct" };
  }
  return { isSolved: false, text: errorTexts };
}
