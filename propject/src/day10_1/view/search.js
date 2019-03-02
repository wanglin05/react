import React, { Component } from 'react'
import axios from 'axios'
import '../mock/mock_1'
import '../scss/search.scss'

export default class Search extends Component {
    constructor (props) {
        super(props)
        this.state = {
            hotData: []
        }
    }
    componentDidMount() {
        axios.get('/search').then(res => {
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
                        return <div id='box'>
                                <img src={v.pic} />
                                <span>{v.title}</span>               
                        </div>
                    })
                }
            </div>
        )
    }
}
