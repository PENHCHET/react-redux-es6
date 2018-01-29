/* eslint-disable no-console */
import { render } from 'react-dom'
import React from 'react'
import Users from './containers/users'
import { Provider } from 'react-redux'
import UserStore from './store'
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
  } from 'react-router-dom'

import Navigation from './components/common/Navigation';
import Home from './components/home/Home';
import Popular from './components/Popular';
import PaginationApp from './components/PaginationApp'
import Footer from './components/footer/Footer'
import Search from './components/search/Search'
import Header from './components/header/Header';
import About from './components/about/About'
import Help from './components/help/Help'

render(
    <Provider store={UserStore}>
        <Router>
            <div className='container'>
                <Header />
                <Search />
                <Navigation />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/users' component={Users} />
                    <Route path='/popular' component={Popular} />
                    <Route path='/paginationApp' component={PaginationApp} />
                    <Route path='/about' component={About} />
                    <Route path='/help' component={Help} />
                    <Route render={function() {
                        return `Not Found`
                    }} />
                </Switch>
                <Footer />
            </div>
        </Router>
    </Provider>,    
    document.getElementById('app')
)