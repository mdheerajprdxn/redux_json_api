import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import { fetchUsers } from "../actions";
import { User } from "./User";
import { Error } from "./Error";

export const List = (props) => {
  const dispatch = useDispatch();
  const [error, setError] = useState(false);
  const [noOfPages, setNoOfPages] = useState(0);
  const [pageNo, setPageNo] = useState(0);
  const [currentUsers, setCurrentUsers] = useState([]);
  const [startIndex, setStartIndex] = useState(0);
  const users = useSelector((state) => state.users);
  const USERS_PER_PAGE = 2;

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  useEffect(() => {
    if (props.match) {
      setPageNo(props.match.params.pageNo);
    } else {
      setStartIndex(0);
      setPageNo(1);
    }
    if (pageNo > 0) {
      const startIndex = (pageNo - 1) * USERS_PER_PAGE;
      setStartIndex(startIndex);
    }
  });

  useEffect(() => {
    console.log("here");
    setCurrentUsers(users.slice(startIndex, startIndex + USERS_PER_PAGE));
    console.log(users);
    console.log(users.slice(startIndex, startIndex + USERS_PER_PAGE));
    console.log(currentUsers);
  }, [startIndex]);

  // calc no of pages when users array is populated
  useEffect(() => {
    setNoOfPages(users.length / USERS_PER_PAGE);
    setCurrentUsers(users.slice(0, USERS_PER_PAGE));
    setPageNo(1);
  }, [users]);

  const pageList = () => {
    let pageArr = [];
    let prev = parseInt(pageNo) - 1;
    let next = parseInt(pageNo) + 1;
    if (prev > 0) {
      pageArr.push(
        <Link to={`/users/${prev}`} className='ui primary button'>
          Prev
        </Link>
      );
    }
    for (let i = pageNo - 1; i < parseInt(pageNo) + 2 && i > -1; i++) {
      if (i == 0) continue;
      if (i > noOfPages) continue;
      pageArr.push(
        <Link key={i} to={`/users/${i}`} className='ui primary button'>
          {i}
        </Link>
      );
    }
    if (next <= noOfPages) {
      pageArr.push(
        <Link to={`/users/${next}`} className='ui primary button'>
          Next
        </Link>
      );
    }
    // console.log(pageArr);
    return pageArr;
  };

  // get rendered user from User component
  const renderedUsers = currentUsers.map((user) => {
    return <User key={user.id} user={user} />;
  });

  // loader logic if users array is empty
  if (users.length == 0) {
    setTimeout(() => {
      setError(true);
    }, 5000);

    return (
      <div className='ui segment'>
        <div className='ui active centered inline loader'></div>
        <p></p>
        <p>{error ? <Error /> : ""}</p>
      </div>
    );
  }

  // list of users if arrray is populated
  return (
    <div>
      <h1 className='ui header'>List of Users: </h1>
      {renderedUsers}
      <br />
      {pageList()}
    </div>
  );
};
