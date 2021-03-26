import React, { useState, useRef } from "react";

export const Modal = (props) => {
  const [show, setShow] = useState(false);
  const modalInner = useRef(null);
  const toggleShow = (e) => {
    if (modalInner.current.contains(e.target)) return;
    // console.log(modalInner.contains(e.target));
    setShow(!show);
  };
  return (
    <div>
      <button onClick={toggleShow}>Show Modal</button>
      <div className={`modal ${show ? "" : "hidden"}`} onClick={toggleShow}>
        <div ref={modalInner} className='modal-inner'>
          {props.children}
        </div>
      </div>
    </div>
  );
};
