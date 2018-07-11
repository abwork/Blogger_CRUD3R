import React, { Component } from 'react';
import { BrowserRouter, NavLink, Redirect, Prompt } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import PostForm from './PostForm';
import Posts from './Posts';

class NavComponent extends Component {
    render() {
      return (
        <div>
          <Posts />
          <PostForm />
        </div>
      )
    }
  }
  
  export default NavComponent;
  