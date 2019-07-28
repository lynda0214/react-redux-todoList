import React from 'react';
import './CreateButton.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'; 

const createButton = () => {
    return (
        <Link to='/create'>
            <FontAwesomeIcon icon={faPlus} className='createButton'/>
        </Link>
    )
}

export default createButton;