import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import Toolbar from './Toolbar/Toolbar';

import Home from './Home/Home';
import CreatePage from './CreatePage/CreatePage';
import EditPage from './EditPage/EditPage';
import SearchPage from './SearchPage/SearchPage';

class App extends Component {

  render() {
    return (
      <Router>
        <Toolbar />
        <Route path='/' exact component={Home}/>
        <Route path='/create' component={CreatePage}/>
        <Route path='/edit/:id' component={EditPage}/>
        <Route path='/search/:query' component={SearchPage}/>
      </Router>
    )
  }
}

export default App;
