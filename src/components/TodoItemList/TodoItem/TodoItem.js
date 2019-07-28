import React from 'react';
import './TodoItem.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faPen } from '@fortawesome/free-solid-svg-icons'
import ReactHtmlParser from 'react-html-parser';

import { Link } from 'react-router-dom'; 
import moment from 'moment';

const todoItem = (props) => {

    let editLink = '/edit/';
    editLink = editLink + props.index;

    const momentObj = moment(props.date, moment.ISO_8601);
    const dateDisplay = momentObj.format('D MMM YYYY');

    let titleHighlighted = props.title;

    if (props.query) {
        const regex = new RegExp(props.query, 'gi');
        titleHighlighted = props.title.replace(regex, `<span class='highlight'>${props.query}</span>`);
    }

    return (
        <div className='card-container'>
            <div className='card-content'>
                <h4 className='card-title'>{ReactHtmlParser(titleHighlighted)}</h4> 
                <p className='card-date'>{dateDisplay}</p>
            </div>
            <Link to={editLink}>
                <FontAwesomeIcon icon={faPen} className='iconButton'/>
            </Link>
            <FontAwesomeIcon icon={faTrashAlt} className='iconButton' onClick={props.delete}/>
        </div>
    );
} 

export default todoItem;