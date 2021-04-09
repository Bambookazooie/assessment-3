import React from "react";
import { useDispatch } from "react-redux";
import { removeTask } from "../state/taskList/taskListSlice";
import { completeTask } from "../state/taskList/taskListSlice";

const ToDo = (props) => {
  const dispatch = useDispatch();

  return (
    <div>
      <button onClick={() => dispatch(completeTask())}>Complete</button>
      <button onClick={() => dispatch(removeTask())}>Delete</button>
    </div>
  );
};

export default ToDo;
