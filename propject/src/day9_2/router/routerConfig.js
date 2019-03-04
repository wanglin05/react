import React, { Component } from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import List from '../view/list'
import Index from '../view/index'


export default class RouterConfig extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path="/" render={() => <Redirect to='/index' />} exact />
                    <Route path='/index' component={Index} />
                    <Route path='./list/:id' component={List} />
                </div>
            </BrowserRouter>
        )
    }
}

