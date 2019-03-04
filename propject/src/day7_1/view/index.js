import React, { Component } from 'react'
import {connect} from '../utils/connect'
class Index extends Component {
    render () {
        console.log(this.props.data) // index对应的数据
        return (
            <div>
                
            </div>
        )
    }
}

export default connect(
    (data) => {
        console.log('data',data)
        return data.indexData
    }
)(Index)