import { ActionTypes } from "../actionTypes";

const initialState = {
  todos: [],
  loading: false,
  error: null,
};
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOADING:
      return { ...state, loading: true };

    case ActionTypes.SET_TODOS:
      return {
        ...state,
        todos: action.payload.todos,
        loading: false,
      };

    case ActionTypes.ADD_TODO:
      // const newtodos = state.todos.concat(action.payload);
      return {
        ...state,
        //  todos:newtodos
        todos: [...state.todos, action.payload],
      };

    case ActionTypes.DELETE_TODO:
      const delItem = state.todos.filter((item) => item.id !== action.payload);
      return { ...state, todos: delItem };
      case ActionTypes.UPDATE_TODO:
        return {
          ...state,
          todos: state.todos.map((item) =>
            item.id === action.payload.id
              ? { ...item, title: action.payload.title } 
              : item 
          ),
        };
      
    default:
      return state;
  }
};

export default todoReducer;
