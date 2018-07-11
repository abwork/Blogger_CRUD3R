import React, { Component} from 'react';
import { connect } from 'react-redux';

class Post extends Component {
    render() {
        return (
            <div className="post">
                <h2 className="blog_title">{this.props.post.title}</h2>
                <h3 className="blog_category">{this.props.post.category}</h3>  
                <p className="blog_content">{this.props.post.content}</p>
                <button className="edit_button" onClick={()=>this.props.dispatch({type:'EDIT_POST', id:this.props.post.id})}>
                    Edit
                </button>
                <button className="delete_button" onClick={()=>this.props.dispatch({type:'DELETE_POST', id:this.props.post.id})}>
                    Delete
                </button>
            </div>
        );
    }
}

export default connect()(Post);