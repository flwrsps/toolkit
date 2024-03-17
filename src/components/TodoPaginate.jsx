import React from "react";
import Pagination from "@mui/material/Pagination";

export default function TodoPaginate({ count, setPage }) {
  function handlePage(p, n) {
    setPage(n);
  }
  return <Pagination onChange={handlePage} count={count} color="secondary" />;
}
