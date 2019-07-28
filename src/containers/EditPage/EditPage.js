import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import moment from 'moment'; 

import {updateEvent} from '../../actions';
import "react-datepicker/dist/react-datepicker.css";


class EditPage extends Component {

    id = this.props.match.params.id; 
    oldTodo; 
    oldTitle; 
    oldDate;

    state = {
        startDate: new Date()
    }

    handleChange = (date) => {
        this.setState({
            startDate: date
        });
    }

    handelEmptyClick = (event) => {
        
        /* Both field are non-empty */
        if (this.refs.newTitle.value !== "" && this.state.startDate !== null) {
            
            const momentObj = moment(this.state.startDate);
            const dateString = momentObj.format();

            console.log("in submission: " + this.id);
            this.props.onEditTodo(
                this.id, 
                this.refs.newTitle.value, 
                dateString
            );
            
        } else {
            event.preventDefault(); // do nothing
            alert('標題與時間不能是空白');
        }

    }

    render () {

        this.oldTodo = this.props.todos.filter((todo)=>todo._id === this.id);
        console.log("in render: " + this.id);
        console.log(this.oldTodo);

        return (
            <div className='home'>
                <h3>編輯事件</h3>
                <input 
                    type='text'
                    className='textInput' 
                    ref='newTitle'  
                    defaultValue={this.oldTodo.title}/>
                
                <DatePicker
                    className='textInput'
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                />
                
                <Link to='/'>
                    <input 
                        type='submit' 
                        className='saveBtn'
                        onClick={this.handelEmptyClick}
                        value='儲存'/>
                </Link>
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
        onEditTodo: (id, title, date) => dispatch(updateEvent(id, title, date))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPage);