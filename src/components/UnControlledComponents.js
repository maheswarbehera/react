import React, { useRef } from "react";

function UnControlledComponents() {
  const refObj = useRef();
  
  console.log(refObj);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(refObj.current.value.toUpperCase());
  }

  return (
    <>
      <h1>UnControlledComponents</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" ref={refObj} />
        <button>Submit</button>
      </form>
    </>
  );
}

export default UnControlledComponents;
