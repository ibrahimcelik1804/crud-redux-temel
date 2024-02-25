import React from "react";
import { useDispatch } from "react-redux";
import { ActionTypes } from "../redux/actionType";

const Modal = ({ close, todo }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    //
    const newText = e.target[1].value;
    const updated = { ...todo, text: newText };
    dispatch({
      type: ActionTypes.UPDATE_TODO,
      payload: updated,
    });
    close();
  };

  return (
    <div className="modal d-block text-dark bg-dark bg-opacity-50">
      <div className="modal-dialog modal-dialog-centered">
        <form onSubmit={handleSubmit} className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Todoyu Düzenle</h5>
            <button
              type="button"
              className="btn-close"
              onClick={close}
            ></button>
          </div>
          <div className="modal-body">
            <label htmlFor="">Yeni Başlık</label>
            <input
              defaultValue={todo.text}
              className="form-control shodow mt-2"
              type="text"
            />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" onClick={close}>
              Vazgeç
            </button>
            <button type="submit" className="btn btn-primary">
              Kaydet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
