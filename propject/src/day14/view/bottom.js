import React, { Component } from 'react'
import Store from '../store/index'

export default class Bottom extends Component {
    constructor (props) {
        super(props)
        this.state = {
            inpVal: ''
        }
    }
    addData = () => {
        let {
            inpVal
        } = this.state;
        let {
            logList
        } = Store.getState();
        let obj = {
            name: inpVal,
            rank: '新晋妈妈',
            type: '现在要是干点儿和大家不一样的事儿，还是挺难，挺无语的',
            babyM: 3,
            babyD: 5,
            time: 1,
            isCore: false,
            reply: 12,
            praise: 211,
            isPraise: false
        };
        logList.push(obj);
        Store.dispatch({
            type: 'LOG_LIST',
            data: logList
        })
        this.setState({
            inpVal: ''
        })
    }

    changeVal = (e) => {
        this.setState({
            inpVal:e.target.value
        })
    }

    render() {
        let {
            logList
        } = Store.getState();
        let {
            inpVal
        } = this.state;
        return (
            <div>
                <input value={inpVal} onChange={this.changeVal} />
                总{logList.length}条
                <button onClick={
                    () => {
                        this.addData()
                    }
                }>发送</button>
            </div>
        )
    }
}
