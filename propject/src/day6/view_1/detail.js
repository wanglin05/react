import React, { Component } from 'react'
import Context from './utils/context'

export default class Detail extends Component {
    render() {
        return (
            <div>
                <Context.Consumer>
                    {
                        (obj) => {
                            return <div>
                                {obj.name}
                                <button onClick={obj.changeName}>修改我的name属性</button>
                            </div>
                        }
                    }
                </Context.Consumer>
            </div>
        )
    }
}
