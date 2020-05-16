import React from 'react'
import {Switch, Route, Redirect} from 'react-router'

// importando a rota home
import Home from '../components/home/Home'
// importando as rotas users
import UserView from '../components/users/UsersView'
import UserPost from '../components/users/post/UserPost'
import UserPut from '../components/users/put/UserPut'
import UserDelete from '../components/users/delete/UserDelete'

export default props => 

    <Switch>
        <Route exact path='/' component={Home}/>
        <Route  path='/users' component={UserView}/>
        <Route  path='/UserPost' component={UserPost}/>
        <Route  path='/UserPut' component={UserPut}/>
        <Route  path='/UserDelete' component={UserDelete}/>
        <Redirect from='*' to='/'/>
    </Switch>