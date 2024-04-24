import React, { useState } from "react";

function ControlledComponents() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");

  function handleOnchange(e) {
    if (e.target.name == "name") {
      setName(e.target.value.toUpperCase());
    } else {
      setPass(e.target.value);
    }
  }

  return (
    <>
      <h1>Controlled Components</h1>
      <form action="">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          value={name}
          id="name"
          name="name"
          onChange={handleOnchange}
        /><br/>
         <label htmlFor="pass">Password: </label>
        <input
          type="password"
          value={pass}
          id="pass"
          name="pass"
          onChange={handleOnchange}
        />
      </form>
    </>
  );
}

export default ControlledComponents;
