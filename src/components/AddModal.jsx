import React from "react";
import { postTodo, updateTodo } from "../redux/actions/TodoActions";

import { useDispatch } from "react-redux";

const AddModal = ({ setOpen, open }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const dataInput = new FormData(e.target);
    const formData = Object.fromEntries(dataInput.entries());
    if (open.update === false) {
      dispatch(postTodo({ title: formData.title }));
      setOpen({ ...open, modal: false, update: false });
    } else if (open.update === true) {
     
      dispatch(updateTodo(open.id, formData.title));
      setOpen({ ...open, modal: false, update: false });
    }
  };

  return (
    <div className="addtodo_container">
      <button
        onClick={() => setOpen({ ...open, modal: false, update: false })}
        className="addtodo_close"
      >
        X
      </button>

      <form onSubmit={handleSubmit} className="addtodo_btndiv">
        <input name="title" type="text" />
        <button type="submit" className="addtodo_btn">
          Ekle
        </button>
      </form>
    </div>
  );
};

export default AddModal;
