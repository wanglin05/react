import React, { Component } from 'react'
import {BrowserRouter, Route, Redirect} from 'react-router-dom'
import Home from '../view/home'
import Detail from '../view/detail'

export default class routerConfig extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path='/' render={() => <Redirect to='/home' />} exact />
                    <Route path='/home' component={Home} />
                    <Route path='/detail/:movieId' component={Detail} />
                </div>
            </BrowserRouter>
        )
    }
}
