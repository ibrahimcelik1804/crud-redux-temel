import React from "react";
import { useSelector } from "react-redux";
import TodoCard from "./TodoCard";
// useSelector store'daki reducer'lara abone olmaya yani
// reducer'larda tutulan verilere erişmeye yarar
// store çok büyük olabileceğinden sadece genelde ihtiyacımız olan reducerlara abone oluruz
// bunu için  => store.reducerIsimi yazmamız gerekiyor.

const ListTodos = () => {
  const store = useSelector((store) => store.todoReducer);

  return (
    <div>
      {store.todos.map((todo) => (
        <TodoCard todo={todo} key={todo.id}  />
      ))}
    </div>
  );
};

export default ListTodos;
