import React, { Component } from 'react'
import Child from './child'

export default class List extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                list
                <Child />
            </div>
        )
    }
}
