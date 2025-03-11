import React, { Dispatch } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from './services/addTodoAction';
// import { RootState } from './store'; // Ensure you have a RootState type that represents your store's state
import { TodoActionTypes } from './services/actionTypes';

const App = () => {
  const todos = useSelector((state: any) => state);
  const dispatch = useDispatch<any>();

  console.warn('check api data', todos);

  return (
    <div>
      <button onClick={() => dispatch(addTodo())}>Click</button>
    </div>
  );
};

export default App;
