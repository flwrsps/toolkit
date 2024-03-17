import React, { useState } from "react";
import Home from "./Home";
import { useSelector } from "react-redux";
import TodoPaginate from "./TodoPaginate";

const List = () => {
  const todo = useSelector((state) => state.todo.todo);

  const [page, setPage] = useState(1);
  const itemPerPage = 4;
  const count = Math.ceil(todo.length / itemPerPage);

  function currentPage() {
    const start = (page - 1) * itemPerPage;
    const end = start + itemPerPage;
    return todo.slice(start, end);
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "1000px",
            height: "55vh",
            background: "#FFFFFF33",
            marginTop: "70px",
            borderRadius: "20px",
            padding: "40px 60px",
            flexWrap: "wrap",
          }}
        >
          {todo ? (
            currentPage().map((el, index) => <Home el={el} key={index} />)
          ) : (
            <></>
          )}
        </div>
        <TodoPaginate count={count} setPage={setPage} />
      </div>
    </>
  );
};

export default List;
