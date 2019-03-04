import React, { Component } from 'react'
import List from './list'

export default class Index extends Component {
    render() {
        return (
            <div>
                Index
                <List data={[1, 2]} name={'News'}/>
            </div>
        )
    }
}
