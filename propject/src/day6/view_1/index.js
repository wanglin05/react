import React, { Component } from 'react'
import List from './list'
import Context from './utils/context'

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'tom'
        }
    }

    changeName = () => {
        this.setState({
            name: 'jerry'
        })
    }
    render() {
        let {
            name
        } = this.state;
        return (
            <div>
                {/* <Context.Provider value={{name, changeName: this.changeName}}>
                    <List />
                </Context.Provider> */}
                <List />
            </div>
        )
    }
}
