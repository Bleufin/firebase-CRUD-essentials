import React, { useEffect, useState } from "react";
import firebase from "../util/firebase";
import Todo from "./Todo";

// **** READ ****
function TodoList() {
  const [todoList, setToDoList] = useState();

  useEffect(() => {
    const todoRef = firebase.database().ref("Todo").orderByChild("title");

    // database'den veri okuma
    todoRef.on("value", snapshot => {
      const todoList = [];

      // verileri objelerden oluşan bir array haline getiriyoruz. orderBy metodlarına güvenilemeyeceği için, istediğimiz sırayı elde edebilmek için forEach kullanıyoruz https://firebase.google.com/docs/reference/js/firebase.database.DataSnapshot#forEach
      snapshot.forEach(childSnapshot => {
        const todos = childSnapshot.val();

        // id'ye buradan erişebildim. bunla ilgili kaynak bulamadım, yerini console'dan kendim buldum
        let id = childSnapshot.ref_.path.pieces_[1];

        // array'e id'yi de ekleyebilmek için spread operator (...) ile todos'u tek tek elemanlarına açıyoruz ve id ile birlikte bir JS objesi halinde todoList arrayine push ediyoruz
        todoList.push({ id, ...todos });
      });

      setToDoList(todoList);
    });
  }, []);

  // buraya ternary operator koymazsak hata alırız. Çünkü useState ile todoList'in initial değerini boş yapmıştık ve bu noktada henüz array haline getirmedik. Bu yüzden "map fonksiyonu yok" şeklinde bir hata alırız
  return <div>{todoList ? todoList.map((todo, index) => <Todo todo={todo} key={index} />) : ""}</div>;
}

export default TodoList;
