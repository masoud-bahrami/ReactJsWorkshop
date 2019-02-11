import React from "react";

function Parameter(props) {
  console.log(props.match.params.param1);
  return <h1>Hello {props.match.params.param1}</h1>;
}
export default Parameter;
