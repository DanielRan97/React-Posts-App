import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import AppRouter from '../../App-Router/App-Router';
import './Blog.css';


class Blog extends Component {

    state = {
        auth: true
    }

render () {
return (
    <div>
        <div className="Nav">
            <header>
                <nav>
                    <ul>
                        <li><NavLink  
                             to="/posts"
                             activeStyle={{
                                 color: '#fa923f',
                                 textDecoration: 'underLine'
                             }}>Home</NavLink></li>
                      
                        <li><NavLink to={{
                            pathname: '/new-post',
                            hash: '#submit',
                            search: '?quick-submit=true'
                        }}>New Post</NavLink></li>

                    </ul>
                </nav>
            </header>
        </div>
            
            <main>
                <AppRouter auth={this.state.auth}/>
            </main>
    </div>
);
}
}

export default Blog;