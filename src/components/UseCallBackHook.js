import React, { useCallback, useState } from "react";
import UseCallBackHookChild from "./UseCallBackHookChild";

function UseCallBackHook() {
  const [add, setAdd] = useState(0);
  const [count, setCount] = useState(0);

  const Learning = useCallback(() => {
    
  }, [count]);

  return (
    <>
      <h1>Use Callback Hook</h1>
      <UseCallBackHookChild Learning={Learning} count={count} />
      <p> {add} </p>
      <button onClick={() => setAdd((a) => a + 2)}>Add 2</button>
      <p>Clicked {count} times </p>
      <button onClick={() => setCount((c) => c + 1)}>Count </button>
    </>
  );
}

export default UseCallBackHook;
