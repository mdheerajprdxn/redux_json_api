import React from "react";
import { Link } from "react-router-dom";
import { Modal } from "./Modal";
import { Form } from "./Form";
export const NavBar = () => {
  return (
    <div className='ui menu'>
      <div className='header item'>
        <Link to='/'>Home</Link>
      </div>
      <div className='item'>
        <Modal>
          <Form />
        </Modal>
      </div>
    </div>
  );
};
