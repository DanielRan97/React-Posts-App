import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import Posts from '../containers/Posts/Posts';
import asyncComponent from '../hoc/asyncComponent/asyncComponent';
const AsyncNewPost = asyncComponent(() => import('../containers/NewPost/NewPost'));

class AppRouter extends Component {

    render () {
      
        return(
        <div>
            <Switch>
            {this.props.auth === true ? <Route path="/new-post" component={AsyncNewPost}  />
             : null}
            <Route path="/posts" component={Posts}  />
            <Redirect from="/" to="/posts" /> 
            <Route render={() => <h1>Not Found</h1>} />
            </Switch>
        </div>
        )

    }
}

export default AppRouter;