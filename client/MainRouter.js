import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './core/Home'
import HomeAdmin from './core/HomeAdmin'
import Users from './user/Users'
import Signup from './user/Signup'
import Signin from './auth/Signin'
import PrivateRoute from './auth/PrivateRoute'
import Profile from './user/Profile'
import EditProfile from './user/EditProfile'
import Menu from './core/Menu'
import UserAdmin from './user/UsersAdmin'
import Comments from './comment/CommentsMain'
import CommentsAdmin from './comment/CommentsAdmin'

const MainRouter = () => {
    return (<div>
        <Menu />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/admin/" component={HomeAdmin} />
            <Route path="/comments" component={Comments} />
            <Route path="/commentsadmin/" component={CommentsAdmin} />
            <Route path="/users" component={Users} />
            <Route path="/signup" component={Signup} />
            <Route path="/signin" component={Signin} />
            <PrivateRoute path="/user/edit/:userId" component={EditProfile} />
            <Route path="/user/:userId" component={Profile} />
            <Route path="/useradmin/:userId" component={UserAdmin} />
        </Switch>
    </div>)
}

export default MainRouter