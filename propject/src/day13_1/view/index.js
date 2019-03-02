import React, { Component } from 'react'
import Store from '../store/store'



export default class Index extends Component {
    constructor(props) {
        super(props);
        Store.subscribe(() => {
            this.forceUpdate()
        })
    }

    changeCount = (type) => {
        Store.dispatch({
            type: type === 'add' ? 'ADD' : 'DEL'
        })
    }
    render() {
        let {
            count
        } = Store.getState();
        return (
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
        )
    }
}
