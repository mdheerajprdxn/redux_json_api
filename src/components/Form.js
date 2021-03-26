import React, { useState } from "react";
import { useDispatch } from "react-redux";
import validator from "validator";

import { addData } from "../actions";

export const Form = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const validate = () => {
    if (validator.isAlpha(name) && validator.isMobilePhone(phone)) {
      return true;
    } else {
      return false;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = validate();

    setError("");
    if (valid) {
      dispatch(addData({ name, phone }));
    } else {
      setError("please fill the values correctly");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className='form-element'>
        <label htmlFor=''>Name</label>
        <input
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className='form-element'>
        <label htmlFor=''>Phone</label>
        <input
          type='number'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <p>{error}</p>
      <button>Submit</button>
    </form>
  );
};
