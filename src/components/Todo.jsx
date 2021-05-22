import React from "react";
import { FaCheck, FaEdit, FaTrashAlt, FaUndo } from "react-icons/fa";

const Todo = ({
  title,
  content,
  todoId,
  deleteTodo,
  todo,
  todos,
  setTodos,
  date,
  editTodo,
}) => {
  const deleteTodoHandler = () => {
    deleteTodo(todoId);
  };

  const checkTodoHandler = () => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === todoId) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }
        return todo;
      })
    );
    console.log(todo);
  };

  return (
    <div
      className={`todo-card-container ${
        todo.isCompleted ? "mark-complete" : ""
      }`}
    >
      <h2 className="todo-title">{title}</h2>
      <p className="todo-content">{content}</p>

      <div className="button-container">
        <button className="button icons" onClick={() => editTodo(todoId)}>
          <FaEdit />
        </button>
        &nbsp;
        <button className="button delete icons" onClick={deleteTodoHandler}>
          <FaTrashAlt />
        </button>
        &nbsp;
        {todo.isCompleted ? (
          <button className="button mark icons" onClick={checkTodoHandler}>
            <FaUndo />
          </button>
        ) : (
          <button className="button mark icons" onClick={checkTodoHandler}>
            <FaCheck />
          </button>
        )}
      </div>
      <div className="show-date">
        <i>
          <h6>{date}</h6>
        </i>
      </div>
    </div>
  );
};

export default Todo;
