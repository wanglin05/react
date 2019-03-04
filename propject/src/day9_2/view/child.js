import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Child extends Component {
    render() {
        console.log(this.props, 'child')
        return (
            <div>
                list子组件
            </div>
        )
    }
}
export default withRouter(Child)