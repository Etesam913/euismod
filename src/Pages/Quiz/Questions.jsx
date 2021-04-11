import React from "react";
import { Route } from "react-router-dom";

function Questions() {
  return (
    <>
      <Route exact path="/quiz/1">
        <div>hello</div>
      </Route>
    </>
  );
}

export default Questions;
