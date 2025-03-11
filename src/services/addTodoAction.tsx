import { GET_TODO_FAILURE,GET_TODO_SUCCESS, TodoActionTypes } from './actionTypes';
import { apiCall } from './callApi';
import { Dispatch } from 'redux';

export const addTodo = () => async (dispatch: Dispatch<TodoActionTypes>) => {
  try {
    const response = await apiCall('GET', '/accounts');
    console.log("action",response);

    dispatch({
      type: GET_TODO_SUCCESS,
      payload: response,
    });

   
  } catch (error: any) {
    dispatch({
      type: GET_TODO_FAILURE,
      payload: error.message,
    });
  }
};
