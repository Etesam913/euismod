import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LessonsSidebar from "../../components/LessonsSidebar";
import { Route } from "react-router-dom";
import Lesson1 from "./Lesson1";
import Lesson3 from "./Lesson3";
import Lesson2 from "./Lesson2";
import Lesson4 from "./Lesson4";

function Learn() {
  const [isSideNavShowing, setIsSideNavShowing] = useState(true);
  const [solutionObj3, setSolutionObj3] = useState(null);
  const [lesson1Data, setLesson1Data] = useState({
    solutionObj: null,
    display: "",
    gridTemplateCols: "",
    gridTemplateRows: "",
  });

  const [lesson2Data, setLesson2Data] = useState({
    solutionObj: null,
    justifySelf: "",
    alignSelf: "",
  });

  const [lesson3Data, setLesson3Data] = useState({
    solutionObj: null,
    gridTemplateArea1: "",
    gridTemplateArea2: "",
    gridTemplateArea3: "",
    headerGridArea: "",
    sidebarGridArea: "",
    mainContentGridArea: "",
    footerGridArea: "",
  });

  const [lesson4Data, setLesson4Data] = useState({
    solutionObj: null,
    gridGap: "",
    gridTemplateCols: "33.333% 66.666%",
    gridTemplateRows: "10% 80% 10%",
  });

  useEffect(() => {
    const data1 = JSON.parse(localStorage.getItem("lesson1Data"));
    const data2 = JSON.parse(localStorage.getItem("lesson2Data"));
    const data3 = JSON.parse(localStorage.getItem("lesson3Data"));
    const data4 = JSON.parse(localStorage.getItem("lesson4Data"));
    if (data1 !== null) setLesson1Data(data1);
    if (data2 !== null) setLesson2Data(data2);
    if (data3 !== null) setLesson3Data(data3);
    if (data4 !== null) setLesson4Data(data4);
  }, [setLesson1Data, setLesson2Data, setLesson3Data, setLesson4Data]);

  return (
    <Container>
      <LessonsSidebar
        isSideNavShowing={isSideNavShowing}
        setIsSideNavShowing={setIsSideNavShowing}
        solutionObjs={[
          lesson1Data.solutionObj,
          lesson2Data.solutionObj,
          lesson3Data.solutionObj,
          lesson4Data.solutionObj,
        ]}
      />

      <Route exact path="/learn">
        <Lesson1
          setIsSideNavShowing={setIsSideNavShowing}
          lesson1Data={lesson1Data}
          setLesson1Data={setLesson1Data}
        />
      </Route>
      <Route exact path="/learn/2">
        <Lesson2
          setIsSideNavShowing={setIsSideNavShowing}
          lesson2Data={lesson2Data}
          setLesson2Data={setLesson2Data}
        />
      </Route>
      <Route exact path="/learn/3">
        <Lesson3
          setIsSideNavShowing={setIsSideNavShowing}
          lesson3Data={lesson3Data}
          setLesson3Data={setLesson3Data}
        />
      </Route>
      <Route exact path="/learn/4">
        <Lesson4
          setIsSideNavShowing={setIsSideNavShowing}
          lesson4Data={lesson4Data}
          setLesson4Data={setLesson4Data}
        />
      </Route>
    </Container>
  );
}

const Container = styled.section`
  padding: 2rem 0 1.25rem;
  transition: padding 150ms ease-in-out;
`;

export default Learn;
