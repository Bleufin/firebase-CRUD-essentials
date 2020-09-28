import React from "react";
import firebase from "../util/firebase";
import Checkmark from "./Checkmark";
import "../App.css";

function Todo({ todo }) {
  // **** DELETE ****
  // database'e eklediğimiz tüm objeler Todo altına gidiyor (bunu Form.js içinde belirtmiştik). Todo altındaki dataları silmek için, Todo'nun child'ına erişmemiz gerekiyor.
  const deleteToDo = () => {
    const todoRef = firebase.database().ref("Todo").child(todo.id);
    todoRef.remove();
  };

  // **** UPDATE ****
  const completeToDo = () => {
    const todoRef = firebase.database().ref("Todo").child(todo.id);
    todoRef.update({
      complete: !todo.complete
    });
  };

  return (
    <div>
      <h1>
        {todo.title} {todo.complete ? <Checkmark /> : ""}
      </h1>
      <button onClick={deleteToDo}>Delete</button>
      <button onClick={completeToDo}>Complete</button>
    </div>
  );
}

export default Todo;
