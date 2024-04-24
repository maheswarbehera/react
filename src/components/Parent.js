import React, { useState } from "react";
import Child from "./Child";

//lifting state up or pass data from child to parent

function Parent() {
  const [data, setData] = useState("");
  function getData(result) {
    console.log(result);
    setData(result);
  }
  return (
    <>
      <span>Parent Component Accessing Data From Child Component: </span>
      <h4>{data}</h4>
      <br />
      <Child getData={getData} />
    </>
  );
}

export default Parent;
