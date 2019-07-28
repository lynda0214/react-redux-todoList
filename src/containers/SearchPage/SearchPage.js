import React from 'react';

import TodoItemList from '../../components/TodoItemList/TodoItemList';

const searchPage = ({match}) => {
    return (
        <div className="home">
            <TodoItemList query={match.params.query}/>
        </div>
    );
}

export default searchPage;