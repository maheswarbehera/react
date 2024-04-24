import { useRef, useState } from "react";

function RefHook() {
  const [name, setName] = useState("");
  // useRef - dom  manipulate

  const refElement = useRef("");
  console.log(refElement);

  const reset = () => {
    setName("");
    refElement.current.focus();
  };

  const changeColor = () => {
    refElement.current.style.color = "red";
    //refElement.current.value="maheswar"
  };

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        ref={refElement}
      />
      <button onClick={reset}>Reset</button>
      <button onClick={changeColor}>Change Color </button>
    </>
  );
}

export default RefHook;
