import axios from "axios";

import { ActionTypes } from "../actionTypes";

const option = {
  headers: {
    "x-hasura-admin-secret": import.meta.env.VITE_HASURA_ADMIN_SECRET,
    "content-type": "application/json",
  },
};

export const setTodo = (payload) => {
  return {
    type: ActionTypes.SET_TODOS,
    payload,
  };
};

export const addTodo = (payload) => {
  return {
    type: ActionTypes.ADD_TODO,
    payload,
  };
};

export const delTodo = (payload) => {
  return {
    type: ActionTypes.DELETE_TODO,
    payload,
  };
};

export const upTodo = (payload) => {
  return {
    type: ActionTypes.UPDATE_TODO,
    payload,
  };
};

export const getData = () => async (dispatch) => {
  await axios
    .get("https://todocreate.hasura.app/api/rest/get", option)
    .then((res) => dispatch(setTodo(res.data)));
};

export const postTodo = (newTodo) => async (dispatch) => {
  try {
    const requestBody = {
      title: newTodo.title.toString(),
      completed: false,
    };

    const res = await axios.post(
      "https://todocreate.hasura.app/api/rest/addtodo",
      requestBody,
      option
    );
    dispatch(addTodo(res.data.insert_todos_one));
  } catch (error) {
    console.error("Todo eklenirken hata oluştu:", error);
  }
};

export const deleteTodo = (id) => async (dispatch) => {
  await axios
    .delete(`https://todocreate.hasura.app/api/rest/deletetodo/${id}`, option)
    .then(() => dispatch(delTodo(id)))
    .catch((err) => console.log(err.message));
};

export const updateTodo = (id, title) => async (dispatch) => {
  const titles = { title: title.toString() };

  const resp = await axios
    .put(
      `https://todocreate.hasura.app/api/rest/updatetodo/${id}`,
      titles,
      option
    )
    .then((res) => dispatch(upTodo(res.data.update_todos_by_pk)))
    .catch((err) => console.log(err.message));
};

// export const updateTodo = (id, title) => async (dispatch) => {
//   try {
//     // Güncellenmiş todo'yu içeren request body
//     const requestBody = {
//       title, // Dinamik olarak title'ı güncelliyoruz
//       completed: false, // Bu kısmı ihtiyaca göre güncelleyebilirsiniz
//     };

//     // Dinamik olarak ID kullanılarak API'ye PUT isteği gönderiliyor
//     const resp = await axios.put(
//       `https://todocreate.hasura.app/api/rest/updatetodo/${id}`, // ID dinamik olarak kullanılacak
//       requestBody, // Güncellenen title
//       option
//     );

//     // API yanıtını logluyoruz (resp.response.data yerine direkt resp.data)
//     console.log(resp.data);

//     // Redux'a dispatch ederek store'u güncelliyoruz
//     dispatch(upTodo(resp.data)); // Güncellenmiş todo ile action dispatch ediliyor

//   } catch (err) {
//     console.log("Hata: ", err.message); // Hata mesajını yazdırıyoruz
//   }
// };
