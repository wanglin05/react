import React, { Component } from 'react'
import {Link, Route, Redirect} from 'react-router-dom'
import Movie from './movie'
import Cinema from './cinema'
import My from './my'

export default class Home extends Component {
    render() {
        return (
            <div>
                <div>
                    <Route path='/home' render={() => <Redirect to='/home/movie' />} exact />
                    <Route path='/home/movie' component={Movie} />
                    <Route path='/home/cinema' component={Cinema} />
                    <Route path='/home/my' component={My} />
                </div>
                <Link to='/home/movie'>电影</Link>
                <Link to='/home/cinema'>影院</Link>
                <Link to='/home/my'>我的</Link>
            </div>
        )
    }
}
