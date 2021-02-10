import React, { Component } from 'react';
import axios from '../../axios/axios';
import Post from '../../components/Post/Post';
import { Route } from 'react-router-dom';
import FullPost from '../FullPost/FullPost';
import './Posts.css';


class Posts extends Component {

    state = {
        posts: []
      };

      componentDidMount(){
        axios.get('/posts').then(response => {
            const posts = response.data.slice(0,4);
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: ''
                }
            })
          this.setState({posts: updatedPosts});
        })
        .catch(error => {
            console.error(error);
            this.setState({error: true})
        })
    
      };

      postSelectedHandeler = ( postId ) => {
        this.props.history.push({pathname: '/posts/' + postId});
      };

    render(){
        let posts = <p style={{textAlign: 'center',color: 'red'}}>Somthing went wrong!</p>
        if(!this.state.error){
            posts = this.state.posts.map(post => {
                return (
                        <Post 
                         key={post.id} 
                         title={post.title}
                         author={post.author}
                         clicked={() => this.postSelectedHandeler(post.id)}/>
            )
        })
        }
    
    
        return(
         <div>
        <section className="Posts">
            {posts}
        </section>
        <Route  path={this.props.match.url + '/:postId'} exact component={FullPost}  />
        </div>
        )
    };
    }

export default Posts;