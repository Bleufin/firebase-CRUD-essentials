import React, { useEffect, useState } from "react";
import firebase from "../util/firebase";
import Todo from "./Todo";

// **** READ ****
function TodoList() {
  const [todoList, setToDoList] = useState();

  useEffect(() => {
    const todoRef = firebase.database().ref("Todo");

    // database'den veri okuma
    todoRef.on("value", snapshot => {
      // bütün verileri konsola yaz
      console.log(snapshot.val());

      const todos = snapshot.val();
      const todoList = [];

      // verileri objelerden oluşan bir array haline getir
      for (let id in todos) {
        // array'e id'yi de ekleyebilmek için spread operator (...) ile todos[id]'yi tek tek elemanlarına açıyoruz ve id ile birlikte bir JS objesi halinde todoList arrayine push ediyoruz
        todoList.push({ id, ...todos[id] });
      }
      console.log(todoList);
      setToDoList(todoList);
    });
  }, []);

  // buraya ternary operator koymazsak hata alırız. Çünkü useState ile todoList'in initial değerini boş yapmıştık ve bu noktada henüz array haline getirmedik. Bu yüzden "map fonksiyonu yok" şeklinde bir hata alırız
  return <div>{todoList ? todoList.map((todo, index) => <Todo todo={todo} key={index} />) : ""}</div>;
}

export default TodoList;
