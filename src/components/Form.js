import React, { useEffect, useState } from "react";

function Form() {
  const data = { name: "", email: "", password: "" };
  const [inputData, setInputData] = useState(data);
  const [flag, setFlag] = useState(false);

  // Function to handle form submission

  function handelsubmit(e) {
    e.preventDefault();
    if(inputData.name === '' || inputData.email === '' || inputData.password === ''){
      alert('Please fill out all fields');
    }else{
        setFlag(true)
    }
  }

  function handleChange(e) {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
    console.log(inputData);
  }
  useEffect (()=>{
console.log("Registered");
  },[flag])

  return (
    <>
   <span> {(flag) ? `You have successfully registered with us. Your details are as follows:\nName : ${inputData.name}\nEmail ID : ${inputData.email}` : ''}</span>
      <h1>Form</h1>
      <form onSubmit={handelsubmit}>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} type="text" id="name" name="name" />
        <br />
        <label htmlFor="email">Email: </label>
        <input onChange={handleChange} type="email" id="email" name="email" />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          onChange={handleChange}
          type="password"
          id="password"
          name="password"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Form;
