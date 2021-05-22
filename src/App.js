import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Todos from "./components/Todos";
import { FaBook, FaTrash } from "react-icons/fa";

function App() {
  const [titleInput, setTitleInput] = useState("");
  const [contentInput, setContentInput] = useState("");

  const [todos, setTodos] = useState(() => {
    const localData = localStorage.getItem("todos");
    return localData ? JSON.parse(localData) : [];
  });
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);

  useEffect(() => {
    filterTodos();
  }, [todos, status]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const filterTodos = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.isCompleted === true));
        break;
      case "remaining":
        setFilteredTodos(todos.filter((todo) => todo.isCompleted === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  // const [toggleDark, setToggleDark] = useState(false);
  const addTodo = (titleInput, contentInput) => {
    if (isEditing) {
      setTodos(
        todos.map((item) => {
          if (item.id === editID) {
            return {
              ...todos,
              title: titleInput,
              content: contentInput,
              date: new Date().toLocaleString(),
              id: item.id,
              isCompleted: item.isCompleted,
            };
          }
          return item;
        })
      );
      setTitleInput("");
      setContentInput("");
      setEditID(null);
      setIsEditing(false);
    } else {
      setTodos((prev) => [
        {
          title: titleInput,
          content: contentInput,
          isCompleted: false,
          id: Math.random(),
          date: new Date().toLocaleString(),
        },
        ...prev,
      ]);
    }
  };

  const deleteTodo = (todoID) => {
    setTodos(todos.filter((todo) => todoID !== todo.id));
  };

  const deleteAll = () => {
    setTodos([]);
    localStorage.clear("todos");
  };

  // const darkMode = () => {
  //   setToggleDark(!toggleDark);
  // };

  const editTodo = (id) => {
    const specificItem = todos.find((todo) => todo.id === id);
    setIsEditing(true);
    setEditID(id);
    setTitleInput(specificItem.title);
    setContentInput(specificItem.content);
  };

  return (
    <div className={`App`}>
      <header className={`header`}>
        <h1>
          &nbsp;NOTED
          <span className="icons" style={{ fontSize: "2rem" }}>
            <FaBook />
          </span>
        </h1>

        {/* <button
          className={`button  ${toggleDark ? "dark-button" : "white"}`}
          onClick={darkMode}
        >
          Dark Mode
        </button> */}
      </header>
      <div className="form-container">
        <Form
          setTodos={setTodos}
          addTodo={addTodo}
          status={status}
          setStatus={setStatus}
          editTodo={editTodo}
          setTitleInput={setTitleInput}
          titleInput={titleInput}
          contentInput={contentInput}
          setContentInput={setContentInput}
        />
      </div>
      <div className="todos-container">
        <Todos
          todos={todos}
          deleteTodo={deleteTodo}
          setTodos={setTodos}
          filteredTodos={filteredTodos}
          editTodo={editTodo}
        />
      </div>
      <div className="format-button-container">
        {filteredTodos.length > 1 ? (
          <>
            {/* <button className="button delete" onClick={deleteAll}>
              Delete All Todos
            </button> */}
            <button onClick={deleteAll} className="button delete">
              <span
                style={{
                  fontSize: "1rem",
                  padding: "1rem",
                  textAlign: "center",
                }}
              >
                DELETE ALL <FaTrash />
              </span>
            </button>
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default App;
