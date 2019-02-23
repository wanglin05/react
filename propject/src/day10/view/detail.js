import React, { Component } from 'react'
import axios from 'axios'
import '../mock/mock'

export default class Detail extends Component {
    componentDidMount() {
        axios.get('/detail.movie', {
            data: {id: this.props.match.params.movieId}
        }).then(res => {
            console.log('res', res)
        })
    }
    render() {
        return (
            <div>
                当前电影的ID为{this.props.match.params.movieId}
            </div>
        )
    }
}
