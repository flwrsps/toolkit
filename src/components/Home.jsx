import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../store/slices/todo";

const Home = ({ el }) => {
  const dispatch = useDispatch();
  console.log(el);
  return (
    <div>
      <div
        style={{
          width: "200px",
          height: "300px",
          backgroundColor: "#234545",
          borderRadius: "10px",
          margin: "20px",
          display: "flex",
          flexDirection: "column",
          justifyConten: "center",
          alignItems: "center",
        }}
      >
        <img
          style={{ width: "200px", borderRadius: "10px" }}
          src={el.image}
          alt=""
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "column",
            padding: "10px 0",
            color: "#fff",
          }}
        >
          <h3>Name:{el.name}</h3>
          <h3>LastName:{el.lastName}</h3>
          <button
            onClick={() => dispatch(deleteTodo(el.id))}
            className="btn"
            style={{
              background: "none",
              border: "none",
              color: "darkred",
              fontSize: "15px",
              padding: "10px 0",
            }}
          >
            delete
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
