export const GET_TODO_SUCCESS = 'GET_TODO_SUCCESS';
export const GET_TODO_FAILURE = 'GET_TODO_FAILURE';

export interface getTodoAction {
  type: typeof GET_TODO_SUCCESS;
  payload: any;
}

export interface getTodoFailureAction {
  type: typeof GET_TODO_FAILURE;
  payload: any;
}



export type TodoActionTypes = getTodoAction | getTodoFailureAction ;
