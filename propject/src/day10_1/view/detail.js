import React, { Component } from 'react'
import axios from 'axios'
import '../mock/mock'

export default class Detail extends Component {
    componentDidMount() {
        axios.get('/detail/homePage', {
            data: {id: this.props.match.params.PageId}
        }).then(res => {
            console.log('res', res)
        })
    }
    render() {
        return (
            <div>
                {this.props.match.params.PageId}
            </div>
        )
    }
}
