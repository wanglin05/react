import React, { Component } from 'react'
import {Link, Route, Redirect} from 'react-router-dom'
import HomePage from './homePage'
import Search from './search'
import My from './my'
import SeachBox from './seachBox'
import '../scss/home.scss'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h3>蜜芽妈妈甄选</h3>
                <div>
                    <Route path='/home/seachBox' component={SeachBox} />
                    <Link to = '/home/seachBox'> <input placeholder='搜索你要的商品' /> </Link>
                </div>
                <div id='list'>
                    <Route path='/home' render={() => <Redirect to='/home/homePage' />} exact />
                    <Route path='/home/homePage' component={HomePage} />
                    <Route path='/home/search' component={Search} />
                    <Route path='/home/my' component={My} />
                </div>
                <div id='bottom'>
                    <Link to='/home/homePage'>首页</Link>
                    <Link to='/home/search'>搜索</Link>
                    <Link to='/home/my'>个人中心</Link>
                </div>
            </div>
        )
    }
}
