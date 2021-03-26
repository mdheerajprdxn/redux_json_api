import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchUser } from "../actions";

const UserDetail = (props) => {
  const id = props.match.params.id;
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log("user", user);
  useEffect(() => {
    dispatch(fetchUser(id));
  }, []);

  return (
    <div>
      UserDetails:
      <table className='ui celled table'>
        <tbody>
          <tr>
            <td>Name</td>
            <td> {user.name}</td>
          </tr>
          <tr>
            <td>Email</td>
            <td>{user.email}</td>
          </tr>
          <tr>
            <td>Id</td>
            <td> {user.id}</td>
          </tr>
          <tr>
            <td>Website</td>
            <td> {user.website}</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td> {user.phone}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserDetail;
