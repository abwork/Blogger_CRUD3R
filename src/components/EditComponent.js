import React, { Component } from 'react';
import { connect } from 'react-redux';

class EditComponent extends Component {

    handleEdit = (e) => {
        e.preventDefault();
        const newTitle = this.getTitle.value;
        const newCategory = this.getCategory.value;
        const newContent = this.getContent.value;
        const data = {
            newTitle,
            newCategory,
            newContent
        }
        this.props.dispatch({type:'UPDATE', id:this.props.post.id, data:data})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleEdit}>
                    <input required type="text" className="post_title" ref={(input)=>this.getTitle = input} defaultValue={this.props.post.title} placeholder="Title" />
                    <br /> <br />
                    <input required type="text" className="post_category" ref={(input)=>this.getCategory = input} defaultValue={this.props.post.category} placeholder="Category" />
                    <br /> <br />
                    <textarea required className="post_content" rows="13" ref={(input)=>this.getContent = input} defaultValue={this.props.post.content} cols="75" placeholder="Write New Post"/>
                    <br /> <br />
                    <button className="update_button">Update</button>
                </form>
            </div>

        );
    }
}

export default connect()(EditComponent);