import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUsers } from "../actions";
import { User } from "./User";
import { Error } from "./Error";

export const List = () => {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  const users = useSelector((state) => state.users);
  const renderedUsers = users.map((user) => {
    return <User key={user.id} user={user} />;
  });
  if (users.length == 0) {
    setTimeout(() => {
      setError(true);
    }, 5000);

    return (
      <div className='ui segment'>
        <div class='ui active centered inline loader'></div>
        <p></p>
        <p>{error ? <Error /> : ""}</p>
      </div>
    );
  }
  return (
    <div>
      <h1 className='ui header'>List of Users: </h1>
      {renderedUsers}
    </div>
  );
};
