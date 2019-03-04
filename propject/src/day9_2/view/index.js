import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Latiao from './latiao'
import Yinliao from './yinliao'

export default class Index extends Component {
    goList = () => {
        let {
            history: {
                push
            }
        } = this.props;
        push({
            pathname: '/list/2',
            state: {
                name: 'renyl'
            }
        })
    }
    changeTab = (type) => {
        this.props.history.pash('/index/' + type)
    }

    render() {
        return (
            <div> 
                <div>
                    <span onClick={() => this.changeTab('latiao')}>辣条</span>
                    <span onClick={() => this.changeTab('yinliao')}>饮料</span>
                </div>
                {/* index
                <button onClick={this.goList}>去list页</button> */}
                <Route path='/index/latiao' component={Latiao} />
                <Route path='/index/yinliao' component={Yinliao}/>
            
            </div>
        )
    }
}
