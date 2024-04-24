import React, { useState } from "react";

function Child( props ) {
  const [name, setName] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    props.getData(name);
  }
  return (
    <>
      <div>Child component</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          valua={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </>
  );
}

export default Child;
