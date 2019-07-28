import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 

import './QueryBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

class QueryBar extends Component {

    state = {
        queryLink: '/search/'
    }

    onChangeHandler = (event) => {
        const qString = event.target.value;
        this.setState({queryLink: '/search/'+qString});
    }

    handleEmptyClick = (event) => {
        /* if the input query string is empty do nothing */
        if (this.state.queryLink === '/search/') {
            event.preventDefault();
        }
    }

    render () {
        return (
            <div className='queryBar'>
                <input 
                    type="text" 
                    onChange={this.onChangeHandler} 
                    defaultValue={this.props.qValue}/>
                <Link 
                    to={this.state.queryLink} 
                    onClick={this.handleEmptyClick}>
                    <FontAwesomeIcon icon={faSearch} className='iconButton'/>
                </Link>
            </div>
        ); 
    }
}

export default QueryBar;