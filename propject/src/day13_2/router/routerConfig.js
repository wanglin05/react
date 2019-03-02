import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Index from '../view/index'
import List from '../view/list'

export default class RouterConfig extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path='/' component={Index}  exact/>
                    <Route path='/list' component={List}  exact/>
                </div>
            </BrowserRouter>
        )
    }
}
