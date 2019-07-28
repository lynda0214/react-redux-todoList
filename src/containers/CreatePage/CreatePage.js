import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; 
import DatePicker from 'react-datepicker';
import moment from 'moment';

import './CreatePage.css';
import "react-datepicker/dist/react-datepicker.css";
import { createEvent } from '../../actions';


class CreatePage extends Component {
    
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
        if (this.refs.newTitle.value !== "" && this.state.startDate != null) {
            
            const momentObj = moment(this.state.startDate);
            const dateString = momentObj.format();

            this.props.onCreateTodo(
                this.refs.newTitle.value, 
                dateString
            );
            
        } else {
            event.preventDefault(); // do nothing
            alert('標題與時間不能是空白');
        }

    }
    
    render () {
        return (
            <div className='home'>
                <h3>建立新的事件</h3>
                
                <input 
                    type='text'
                    className='textInput' 
                    ref='newTitle' 
                    placeholder='請輸入標題'/>
                
                <DatePicker
                    className='textInput'
                    minDate={new Date()}
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
        onCreateTodo: (title, date) => dispatch(createEvent({title, date}))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePage);