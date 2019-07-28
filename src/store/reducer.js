import * as actionTypes from '../actions/types';

const initialState = {
    todos: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.CREATE: {
            console.log("reducer: create: " + action.payload._id);
            const newTodo = {
                _id: action.payload._id,
                title: action.payload.title,
                date: action.payload.date
            }
            console.log(newTodo);
            return {
                todos: [...state.todos, newTodo]
            }
        }
        case actionTypes.EDIT: {
            const updatedArray = state.todos.map((todo)=>{
                if (todo._id === action.payload.id) {
                    return { 
                        _id: action.payload.id, 
                        title: action.payload.title,
                        date: action.payload.date
                    }
                } else {
                    return todo
                }
            })

            return {
                todos: updatedArray
            } 
        }
        case actionTypes.DELETE: {
            console.log('DELETE ' + action.payload.id);
            const updatedArray = state.todos.filter((todo)=>todo._id !== action.payload.id);
            console.log(updatedArray);
            return {
                todos: updatedArray
            }
        }
        case actionTypes.FETCH: {
            return {
                todos: action.events
            }
        } 
        default: 
            return state;

    }
};

export default reducer;