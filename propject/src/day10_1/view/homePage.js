import React, { Component } from 'react'
import axios from 'axios'
import '../mock/mock'
import '../scss/homePage.scss'

export default class HomePage extends Component {
    constructor (props) {
        super(props)
        this.state = {
            NewData: []
        }
    }
    componentDidMount() {
        axios.get('/homePage').then(res => {
            console.log('res', res)
            this.setState({
                NewData: res.data.data
            })
        })
    } 
    render() {
        let {
            NewData
        } = this.state;
        return (
            <div id='main'>
                {
                    NewData.length > 0 && NewData.map((v,i) => {
                        return <dl key={i} onClick={
                            () => {
                                this.props.history.push(`/detail/${v.id}`)
                            }
                        }>
                            <dt>
                                <img src={v.pic} />
                            </dt>
                            <dd>
                                <h4>{v.title}</h4>
                                <span>{v.span}</span>
                                <p>{v.bought}</p>
                                <b>￥{v.price}</b> 
                            </dd>
                            
                        </dl>
                    })
                }
            </div>
        )
    }
}
