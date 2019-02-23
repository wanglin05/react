import React, { Component } from 'react'
import axios from 'axios'
import '../mock/mock'

export default class Hot extends Component {
    constructor (props) {
        super(props)
        this.state = {
            hotData: []
        }
    }
    componentDidMount() {
        axios.get('/movie/hot').then(res => {
            console.log('res', res)
            this.setState({
                hotData: res.data.data
            })
        })
    }
    render() {
        let {
            hotData
        } = this.state;
        return (
            <div>
                {
                    hotData.length > 0 && hotData.map((v,i) => {
                        return <div key={i} onClick={
                            () => {
                                this.props.history.push(`/detail/${v.id}`)
                            }
                        }>
                            {v.name}
                        </div>
                    })
                }
            </div>
        )
    }
}
