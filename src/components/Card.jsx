import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { deleteTodo } from "../redux/actions/TodoActions";
const Card = ({ item,setOpen }) => {
  const dispatch = useDispatch();
  const navigate=useNavigate()

  const handleClick = ({ item, name }) => {
    if (name === "delete") {
      dispatch(deleteTodo(item.id));
    } else if(name === "update") {
      setOpen({...open,modal:true,update:true,id:item.id})
    }
  };
  return (
    <div className="card">
      <div className="card1" >
        <p>This is heading</p>
        <p className="small">{item.title}</p>
        <button
          name="delete"
          onClick={() => handleClick({ item, name: "delete" })} 
          className="card_btn"
        >
          SİL
        </button>
        <button
          name="update"
          onClick={() => handleClick({ item, name: "update" })} 
          className="card_btn"
        >
          DÜZENLE
        </button>

        <div className="go-corner" href="#">
          <div className="go-arrow">→</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
