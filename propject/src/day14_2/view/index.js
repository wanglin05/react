import React, { Component } from 'react'
import axios from 'axios'
import Store from '../store/index'
import '../mock/mock'
import '../scss/index.scss'


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

    changeCount = (type) => {
        let {
            count
        } = Store.getState();
        Store.dispatch({
            type: type === 'add' ? 'ADD' : 'DEL',
            data:count
        })
    }

    render() {
        let{
            logList, 
            count
        } = Store.getState()
        return (
            <div>
                <div>
                    {
                        logList.length > 0 && logList.map((v, i) => {
                            return <dl key={i}>
                                <dt>
                                   <img src={v.pic}/> 
                                </dt>
                                <dd>
                                    <h3>{v.name}</h3>
                                    <span>{v.type}</span>
                                    <span>{v.price}</span>
                                    <div>
                                        <button onClick={() => {
                                            this.changeCount('del')
                                        }}>-</button>
                                        {
                                            count
                                        }
                                        <button onClick={() => {
                                            this.changeCount('add')
                                        }}>+</button>
                                    </div>
                                </dd>
                                
                            </dl>
                       })
                    }
                </div>
            </div>
        )
  }
}
