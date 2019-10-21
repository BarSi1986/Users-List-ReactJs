import React from 'react'
import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import About from './components/About/About'
import User from './components/User/User'
import NotFound from './components/NotFound/NotFound'
import Loading from './components/Loading/Loading'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import UsersState from './context/UsersState'
import './App.scss'



const App = () => {

    return (
        <UsersState>
            <Router>
                <Nav />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/user' component={User} />
                    <Route component={NotFound} />
                </Switch>
                <Loading />
            </Router>
        </UsersState >

    )
}

export default App
