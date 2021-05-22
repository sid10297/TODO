import React from "react";
import { FaBook } from "react-icons/fa";
import Todo from "./Todo";

const Todos = ({ todos, deleteTodo, setTodos, filteredTodos, editTodo }) => {
  return (
    <div className="todos-container center">
      {filteredTodos.length > 0 ? (
        filteredTodos.map((todo) => (
          <Todo
            title={todo.title}
            content={todo.content}
            key={todo.id}
            deleteTodo={deleteTodo}
            todoId={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
            date={todo.date}
            editTodo={editTodo}
          />
        ))
      ) : (
        <div
          className="todo-card-container center"
          style={{ marginTop: "2rem" }}
        >
          <h1>
            NO TODOS
            {/* <span className="icons" style={{ fontSize: "2rem" }}>
              <FaBook />
            </span> */}
          </h1>
        </div>
      )}
    </div>
  );
};

export default Todos;
