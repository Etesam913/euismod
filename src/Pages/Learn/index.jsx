import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Sidebar from "../../components/Sidebar";
import { Route } from "react-router-dom";
import Lesson1 from "./Lesson1";
import Lesson3 from "./Lesson3";
import Lesson2 from "./Lesson2";

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

  useEffect(() => {
    const data1 = JSON.parse(localStorage.getItem("lesson1Data"));
    const data2 = JSON.parse(localStorage.getItem("lesson2Data"));
    const data3 = JSON.parse(localStorage.getItem("lesson3Data"));
    if (data1 !== null) setLesson1Data(data1);
    if (data2 !== null) setLesson2Data(data2);
    /*if (data1) setSolutionObj1(data1.solutionObj);
    if (data2) setSolutionObj2(data2.solutionObj);
    if (data3) setSolutionObj3(data3.solutionObj);*/
  }, [setLesson1Data, setLesson2Data]);

  return (
    <Container>
      <Sidebar
        isSideNavShowing={isSideNavShowing}
        setIsSideNavShowing={setIsSideNavShowing}
        solutionObjs={[
          lesson1Data.solutionObj,
          lesson2Data.solutionObj,
          solutionObj3,
        ]}
      />
      <section>
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
            solutionObj={solutionObj3}
            setSolutionObj={setSolutionObj3}
          />
        </Route>
      </section>
    </Container>
  );
}

const Container = styled.div`
  padding: 2rem 0 1.25rem;
  transition: padding 150ms ease-in-out;
`;

export default Learn;
