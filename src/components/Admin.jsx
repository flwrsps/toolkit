import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addTodo } from "../store/slices/todo";

const obj = {
  name: "",
  lastName: "",
  image: "",
};
const Admin = () => {
  const [inputValue, setInputValue] = useState(obj);
  const dispatch = useDispatch();

  function addTask() {
    let newTask = {
      ...inputValue,
      id: Date.now(),
    };

    dispatch(addTodo(newTask));
  }
  return (
    <>
      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              height: "50vh",
              width: "787px",
              background: "#0C7878",
              borderRadius: "20px",
              margin: "50px 0",
            }}
          >
            <h4 style={{ fontSize: "30px", color: "white" }}>todo</h4>

            <input
              onChange={(e) =>
                setInputValue({ ...inputValue, name: e.target.value })
              }
              type="text"
              placeholder="name"
            />
            <input
              onChange={(e) =>
                setInputValue({ ...inputValue, lastName: e.target.value })
              }
              type="text"
              placeholder="lastName"
            />
            <input
              onChange={(e) =>
                setInputValue({ ...inputValue, image: e.target.value })
              }
              type="text"
              placeholder="image"
            />
            <button className="btn_admin" onClick={addTask}>
              add
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
