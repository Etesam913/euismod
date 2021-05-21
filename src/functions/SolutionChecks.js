export function checkFirstSolution(lesson1Data) {
  const sanitizedDisplayText = lesson1Data.display.trim().toLowerCase();
  const sanitizedColumnsText = lesson1Data.gridTemplateCols
    .trim()
    .toLowerCase();
  const sanitizedRowText = lesson1Data.gridTemplateRows.trim().toLowerCase();

  const displayTextSolution = "grid";
  const columnsTextSolution1 = "50% 50%";
  const columnsTextSolution2 = "repeat(2, 50%)";
  const columnsTextSolution3 = "repeat(2,50%)";
  const rowsTextSolution1 = "133px 133px 133px";
  const rowsTextSolution2 = "repeat(3, 133px)";
  const rowsTextSolution3 = "repeat(3,133px)";

  if (
    sanitizedDisplayText === displayTextSolution &&
    (sanitizedColumnsText === columnsTextSolution1 ||
      sanitizedColumnsText === columnsTextSolution2 ||
      sanitizedColumnsText === columnsTextSolution3) &&
    (sanitizedRowText === rowsTextSolution1 ||
      sanitizedRowText === rowsTextSolution2 ||
      sanitizedRowText === rowsTextSolution3)
  ) {
    return { isSolved: true, text: "Correct" };
  } else {
    let errorTexts = [null, null, null];
    if (sanitizedDisplayText !== displayTextSolution) {
      /*displayRef.current.focus();*/
      errorTexts[0] = "The display property is incorrect";
    }
    if (
      sanitizedColumnsText !== columnsTextSolution1 &&
      sanitizedColumnsText !== columnsTextSolution2 &&
      sanitizedColumnsText !== columnsTextSolution3
    ) {
      /*columnsRef.current.focus();*/
      errorTexts[1] = "The grid-template-columns property is incorrect";
    }
    if (
      sanitizedRowText !== rowsTextSolution1 &&
      sanitizedRowText !== rowsTextSolution2 &&
      sanitizedRowText !== rowsTextSolution3
    ) {
      /*rowsRef.current.focus();*/
      errorTexts[2] = "The grid-template-rows property is incorrect";
    }
    return { isSolved: false, text: errorTexts };
  }
}

export function checkSecondSolution(lesson2Data) {
  const sanitizedJustifyText = lesson2Data.justifySelf.trim().toLowerCase();
  const sanitizedAlignText = lesson2Data.alignSelf.trim().toLowerCase();

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
      /*justifySelfRef.current.focus();*/
      errorTexts[0] = "The justify-self is incorrect";
    }
    if (sanitizedAlignText !== alignSolution) {
      /*alignSelfRef.current.focus();*/
      errorTexts[1] = "The align-self property is incorrect";
    }
    return { isSolved: false, text: errorTexts };
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

// Goes through every element and checks if their unit is correct
function checkUnitsMatch(arr, unit) {
  for (let i = 0; i < arr.length; i++) {
    const sanitizedElement = arr[i].trim();
    // Unit has to be present and there must be a number to the left of it
    if (
      sanitizedElement.indexOf(unit) === -1 ||
      sanitizedElement.indexOf(unit) === 0
    ) {
      return false;
      // The unit has to be after the number (all the way to the right)
    } else if (
      sanitizedElement.indexOf(unit) !==
      sanitizedElement.length - unit.length
    ) {
      return false;
    }
  }
  return true;
}

function checkRatio(arr, ratio) {
  if (ratio.length !== arr.length) {
    console.error("RATIO AND ARR LENGTH ARE INEQUAL");
    return;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    const curValue = parseFloat(arr[i]);
    const nextVal = parseFloat(arr[i + 1]);
    if (curValue * ratio[i + 1] !== nextVal) {
      return false;
    }
  }
  return true;
}

export function checkFourthSolution(lesson4Data) {
  const gridGap = lesson4Data.gridGap.trim();
  const gridTemplateCols = lesson4Data.gridTemplateCols.trim().split(" ");
  const gridTemplateRows = lesson4Data.gridTemplateRows.trim().split(" ");

  const gridGapSolution = "8px 10px";

  let errorTexts = [null, null, null];
  if (gridGap !== gridGapSolution) {
    errorTexts[0] = "The grid-gap property is wrong";
  }
  if (
    gridTemplateCols.length !== 2 ||
    !checkUnitsMatch(gridTemplateCols, "fr") ||
    !checkRatio(gridTemplateCols, [1, 2])
  ) {
    errorTexts[1] = "The grid-template-columns property is wrong";
  }
  if (
    gridTemplateRows.length !== 3 ||
    !checkUnitsMatch(gridTemplateRows, "fr") ||
    !checkRatio(gridTemplateRows, [1, 8, 0.125])
  ) {
    errorTexts[2] = "The grid-template-rows property is wrong";
  }
  if (gridGap === gridGapSolution && checkEquality(errorTexts, null))
    return { isSolved: true, text: "Correct" };

  return { isSolved: false, text: errorTexts };
}
