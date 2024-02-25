import React, { useState } from "react";
import { v4 } from "uuid";
import { useDispatch } from "react-redux";
import { ActionTypes } from "../redux/actionType";

const AddFrom = () => {
  // dispatch kurulumu
  const dispatch = useDispatch();
  // form gönderilince
  const handleSubmit = (e) => {
    e.preventDefault();
    //inputdaki veriye erişme
    const text = e.target[0].value;
    // console.log(text)
    // todo objesi oluştur
    const newTodo = {
      id: v4(),
      text: e.target[0].value,
      is_done: false,
      created_at: new Date().toLocaleDateString(),
    };
    // oluşturulan todo'yu store ekleme
    // console.log(newTodo);
    dispatch({
      type: ActionTypes.ADD_TODO,
      payload: newTodo,
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="d-flex gap-2 my-5">
        <input
          className="form-control bg-light"
          type="text"
          placeholder="Ör: typescript projesi yap"
        />
        <button className="btn btn-warning">Ekle</button>
      </form>
    </>
  );
};

export default AddFrom;
