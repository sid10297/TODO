import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const Form = ({
  addTodo,
  status,
  setStatus,
  titleInput,
  setTitleInput,
  contentInput,
  setContentInput,
}) => {
  const handleTitleChange = (e) => {
    setTitleInput(e.target.value);
  };

  const handleContentChange = (e) => {
    setContentInput(e.target.value);
  };

  const addTodoHandler = (e) => {
    e.preventDefault();
    addTodo(titleInput, contentInput);
    setTitleInput("");
    setContentInput("");
  };

  const selectStatus = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form onSubmit={addTodoHandler}>
      <div className="form-title">
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="form-title-input"
          onChange={handleTitleChange}
          value={titleInput}
        />
      </div>
      <div className="form-content">
        <input
          type="text"
          name="content"
          placeholder="Content"
          onChange={handleContentChange}
          value={contentInput}
        />
      </div>
      <button
        className="button icons"
        type="submit"
        disabled={!titleInput && !contentInput}
      >
        <FaPlus />
      </button>
      <div className="select-container">
        <select name="todosStatus" onChange={selectStatus} value={status}>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="remaining">Remaining</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
