import React, { Component } from 'react';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {

    state={
        loadedPost:null,
    }

    componentDidMount(){
    
        this.loadData();

    }

    componentDidUpdate(){
       
        this.loadData();

    }

    loadData(){
        if(this.props.match.params.postId){
            if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== + this.props.match.params.postId)){
                axios.get(`/posts/${this.props.match.params.postId}`)
                .then(response => {
                    this.setState({loadedPost: response.data})
                })
            }
        }
    }

    deletePostHandeler = () => {
        axios.delete(`/posts/${this.props.match.params.postId}`)
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.error(error);
        })
    }

    render () {

        let post = 
        <p style={{textAlign:'center'}}>
            Please select a Post!
        </p>;
       if(this.props.match.params.postId){
           post = <div style={{textAlign:'center'}}>
                   <Spinner />
                </div>;
       }
       if(this.state.loadedPost){
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandeler} className="Delete">Delete</button>
                    </div>
                </div>
    
            );
        }
        return post;
    }
}

export default FullPost;