import React, { Component } from 'react'
import {Route, Redirect} from 'react-router-dom'
import Hot from './hot'
import Will from './will'

export default class Movie extends Component {
    render() {
        let {
            match:{
                url
            },
            history: {
                push
            }
        } = this.props;
        return (
            <div>
                <div>
                    <span onClick={
                        () => {
                            push(`${url}/hot`)
                        }
                    }>
                        正在热映
                    </span>
                    < span onClick = {
                        () => {
                            push(`${url}/will`)
                        }
                    } >
                        即将上映
                    </span>
                </div>
                <div>
                    <Route path='/home/movie' render={() => <Redirect to={`${url}/hot`} />} exact />
                    <Route path={`${url}/hot`} component={Hot} />
                    <Route path={`${url}/will`} component={Will}/>
                </div>
            </div>
        )
    }
}
