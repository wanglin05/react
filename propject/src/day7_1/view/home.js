import React, { Component } from 'react'
import Index from './index'
import Context from '../utils/context'
class Home extends Component {
    render () {
        let {
            data
        } = this.props;
        return (
            <div>
                <Context.Provider value={data}>
                    <Index age={18}/>
                </Context.Provider>
                
            </div>
        )
    }
}

export default Home