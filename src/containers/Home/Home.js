import React from 'react';

import TodoItemList from '../../components/TodoItemList/TodoItemList';

import './Home.css';

const home = () => {
    return (
        <div className="home">
          <TodoItemList /> 
        </div>
    );
}


export default home;