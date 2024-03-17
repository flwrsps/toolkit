import React, { useState } from "react";
import Admin from "./Admin";

const TodoEdit = () => {
  const [edit, setEdit] = useState(true);
  return (
    <div>
      <Admin edit={edit} />
    </div>
  );
};

export default TodoEdit;
