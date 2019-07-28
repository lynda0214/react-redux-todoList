import React, { Component } from 'react';
import { connect } from 'react-redux';

import TodoItem from './TodoItem/TodoItem';
import { deleteEvent } from '../../actions';

class TodoItemList extends Component { 

    render () {
        return (
            <div>
                {this.props.todos
                .filter(todo => { 
                    if (this.props.query) { // if there's a query
                        const regex = new RegExp(this.props.query, 'gi');
                        return todo.title.match(regex);
                    } 
                    return todo;
                })
                .map((todo, index)=>(
                    <TodoItem 
                        key={index} 
                        index={todo._id}  
                        title={todo.title} 
                        date={todo.date} 
                        query={this.props.query}
                        delete={() => this.props.onDeleteTodo(todo._id)}/>
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onDeleteTodo: (id) => dispatch(deleteEvent(id))
    };
}
    
export default connect(mapStateToProps, mapDispatchToProps)(TodoItemList);