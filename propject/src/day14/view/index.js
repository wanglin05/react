import React, { Component } from 'react'
import Bottom from './bottom'
import axios from 'axios'
import Store from '../store/index'
import '../mock/mock'


export default class Index extends Component {
    constructor(props) {
        super(props);
        Store.subscribe(() => {
            this.forceUpdate()
        })
    }

    componentDidMount() {
        axios.get('/data').then(res => {
            console.log('res', res)
            Store.dispatch({
                type: 'LOG_LIST',
                data: res.data
            })
        })
    }

    delData = (ind) => {
        let {
            logList
        } = Store.getState();
        logList.splice(ind, 1)
        Store.dispatch({
            type: 'LOG_LIST',
            data:logList
        })
    }

    changeCare = (ind) => {
        let {
            logList
        } = Store.getState();
        logList[ind].isCare = !logList[ind].isCare
        Store.dispatch({
            type: 'LOG_LIST',
            data: logList
        })
    }

    changePraise = (ind) => {
        let {
            logList
        } = Store.getState();
        if (logList[ind].ispraise) {
            logList[ind].ispraise = false
            logList[ind].praise--
        }else{
            logList[ind].ispraise = true
            logList[ind].praise++
        }
        Store.dispatch({
            type: 'LOG_LIST',
            data:logList
        })
    }

    render() {
        let{
            logList
        } = Store.getState()
        return (
            <div>
                <div>
                    {
                        logList.length > 0 && logList.map((v, i) => {
                            return <div key={i}>
                                <h3>{v.name}</h3>
                                <span onClick={
                                    () => {
                                        this.changeCare(i)
                                    }
                                }>{v.isCare ? '已关注' : '+关注'}</span>
                                <span onClick={
                                    () => {
                                        this.changePraise(i)
                                    }
                                }>{v.praise}</span>
                                <div onClick={
                                    () => {
                                        this.delData(i)
                                    }
                                }>删除</div>
                            </div>
                        })
                    }
                </div>
                <Bottom />
            </div>
        )
  }
}
