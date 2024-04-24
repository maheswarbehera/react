import React, { useMemo, useState } from "react";

function UseMemoHook() {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);

  const multiplication = useMemo(
    function multiply() {
      console.log("useMemo");
      return add * 10;
    },[add] );
  return (
    <>
      <h1>Use memo hook</h1>
      {multiplication}
      <button onClick={() => setAdd(add + 1)}>Addition</button>
      <span>{add}</span>
      <button onClick={() => setMinus(minus - 1)}>Substraction</button>
      <span>{minus}</span>
    </>
  );
}

export default UseMemoHook;
