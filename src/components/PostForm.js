import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostForm extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        const title = this.getTitle.value;
        const category = this.getCategory.value;
        const content = this.getContent.value;
        const data = {
            id: new Date(),
            title,
            category,
            content,
            editing:false
        }
        this.props.dispatch({
            type: 'ADD_POST',
            data});
        this.getTitle.value = '';
        this.getCategory.value = '';
        this.getContent.value = '';
        //console.log(data)
    }

    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.handleSubmit}>
                    <input required type="text" className="post_title" ref={(input)=>this.getTitle = input} placeholder="Title"/>
                    <br /> <br />
                    <input required type="text" className="post_category" ref={(input)=>this.getCategory = input}  placeholder="Category"/>
                    <br /> <br />
                    <textarea required type="text" className="post_content" rows="13" ref={(input)=>this.getContent = input} cols="75" placeholder="Write New Post"/>
                    <br /> <br />
                    <button className="save_button">Save</button>
                    <button className="cancel_button" onClick={()=>this.props.dispatch({type:'CANCEL_POST', id:this.props.post.id})}>Cancel</button>
                </form>
            </div>
        );
    }
}

export default connect()(PostForm);