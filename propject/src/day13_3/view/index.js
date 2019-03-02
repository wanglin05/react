import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import Store from '../store/store'
import '../mock/mock'
import '../scss/index.scss'

export default class Index extends Component {
    constructor (props) {
        super(props)
        this.state = {
            NewData: []
        }
    }
    componentDidMount() {
        axios.get('/index').then(res => {
            console.log(res)
            this.setState({
                NewData: res.data.data
            })
        })
    }
    render() {
        let {
            NewData
        } = this.state;
        console.log(Store.getState())
        return (
            <div>
                {
                    NewData.length > 0 && NewData.map((v,i) => {
                        return <div>
                            <h4>{v.name}</h4>
                            <span>{v.attention}</span>
                            <p>{v.span}</p>
                            <b>{v.praise}</b>
                            
                        </div>
                    })
                }
                <Link to='/list'>list</Link>
            </div>
        )
    }
}
