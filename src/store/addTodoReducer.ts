import { GET_TODO_SUCCESS, GET_TODO_FAILURE, TodoActionTypes } from '../services/actionTypes';

const initialState = {
  id: '',
  todo:[],
  error:''
};

const todosReducer = (state = initialState, action: TodoActionTypes) => {
  switch (action.type) {
    case GET_TODO_SUCCESS:
      return {
        ...state,
        todo: action.payload,
      };
    case GET_TODO_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    
    default:
      return state;
  }
};

export default todosReducer;
