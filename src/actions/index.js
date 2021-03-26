import axios from "axios";

export const fetchUsers = () => {
  return async (dispatch) => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    dispatch({
      type: "FETCH_USERS",
      payload: res.data,
    });
  };
};

export const fetchUser = (id) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    dispatch({
      type: "FETCH_USER",
      payload: res.data,
    });
  };
};

export const addData = (form) => {
  console.log(form);
  return {
    type: "SUBMIT_FORM",
    payload: form,
  };
};
