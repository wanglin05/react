import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Store from '../store/store'

export default class Index extends Component {
    componentDidMount() {
        axios.get('/').then(res => {
            dispatchEvent({
                type: 'NEW',
                data: res.data
            })
        })
    }
    render() {
        console.log(Store.getState())
        return (
            <div>
                index
                <Link to='/list'>list</Link>
            </div>
        )
    }
}
