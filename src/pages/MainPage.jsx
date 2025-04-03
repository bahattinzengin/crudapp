import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/actions/TodoActions";
import Card from "../components/Card";
import AddButton from "../components/AddButton";
import AddModal from "../components/AddModal";

const MainPage = () => {
  const [open, setOpen] = useState({ modal: false, update: false ,id:null});
  const state = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);



  return (
    <div className="mainpage_container">
      {open.modal && (
        <div className="mainpage_container_addTodo">
          <AddModal setOpen={setOpen} open={open} />
        </div>
      )}

      <div className="mainpage_container_added">
        <AddButton setOpen={setOpen} open={open} />
      </div>

      <div className="mainpage_map">
        {state?.todos?.map((item) => (
          <div key={item.id}>
            <Card setOpen={setOpen} item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
