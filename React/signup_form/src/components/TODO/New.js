import React, { useState } from "react";
// import "./App.css";
import { Button, Card, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Todo({ index, todos, markTodo, removeTodo }) {
  return (
    <div className="todo">
      <span style={{ textDecoration: todos.isDone ? "line-through" : "" }}>
        {todos.text}{" "}
      </span>
      <Button variant="outline-success" onClick={() => markTodo(index)}>
        {" "}
        @{" "}
      </Button>
      <Button variant="outline-danger" onClick={() => removeTodo(index)}>
        {" "}
        X{" "}
      </Button>
    </div>
  );
}

function FormData({ addTodo }) {
  const [value, setValue] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Control
          type="text"
          className="input"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></Form.Control>
      </Form>
      <Button variant="primary mb-3"  type="submit"> Submit</Button>
    </div>
  );
}

function New() {
  const [todos, setTodos] = React.useState([
    {
      text: "This is my first task",
      isDone: false,
    },
  ]);

  // addTodo
  const addTodo = (text) => {
    const newTodo = [...todos, { text }];
    setTodos(newTodo);
  };

  // markTodo
  const markTodo = (index) => {
    const newTodo = [...todos];
    newTodo[index].isDone = true;
    setTodos(newTodo);
  };

  // deleteTodo

  const removeTodo = (index) => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
  };

  return (
    <div>
      <FormData addTodo={addTodo}></FormData>

      {todos.map((todos, index) => (
        <Card>
          <Card.Body>
            {" "}
            <Todo
              key={index}
              todos={todos}
              index={index}
              markTodo={markTodo}
              removeTodo={removeTodo}
            />
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default New;
