import React from 'react';
import { Link } from 'react-router-dom'; 

import QueryBar from '../../components/QueryBar/QueryBar';
import CreateButton from '../../components/CreateButton/CreateButton';

import './Toolbar.css';


const toolbar = () => {
    return (
        <header className='toolbar'>
            <Link to="/" className='toolbar__logo fontRobotoCondensed'>
                Upcoming Events
            </Link>
            <div className='spacer'/>
            <QueryBar />
            <CreateButton />
        </header>
    )
}

export default toolbar;