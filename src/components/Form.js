import React, { useState } from "react";
import firebase from "../util/firebase";

// **** CREATE ****
function Form() {
  const [title, setTitle] = useState("");
  const handleOnChange = e => {
    setTitle(e.target.value);
  };

  const createTodo = () => {
    // Database'e referans. "Todo" opsiyonel. Boş bırakılırsa database'in rootuna referans döner.
    const todoRef = firebase.database().ref("Todo");

    //Database'e yazacağımız objeyi oluşturuyoruz
    const todo = {
      title,
      complete: false
    };

    // objeyi database'e yazıyoruz
    todoRef.push(todo);
  };

  return (
    <div>
      <input type="text" onChange={handleOnChange} value={title} />
      <button onClick={createTodo}>Add Todo</button>
    </div>
  );
}

export default Form;
