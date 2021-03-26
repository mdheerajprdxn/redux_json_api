import React from "react";
import { Link } from "react-router-dom";
export const User = ({ user }) => {
  return (
    <div>
      <Link to={`/user/${user.id}`}>{user.name}</Link>
    </div>
  );
};
