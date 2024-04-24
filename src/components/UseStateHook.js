import { useState, useEffect } from "react";

function UseStateHook() {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount((count) => count + 1);
  };

  useEffect(() => {
    setTimeout(() => {
      //Increment()
    }, 2000);

    console.log(count);
  }, [count]);

  return (
    <>
      <h1>React usestate hook</h1>
      <p>Count - {count}</p>
      <button onClick={Increment}>Increment</button>
    </>
  );
}

export default UseStateHook;
