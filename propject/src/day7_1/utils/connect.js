import React from 'react'
import Context from './context'

export const connect = (cbk) => {
    return (Component) => {
        return class extends React.Component{
            render() {
                console.log('connect', this.props.age)
                return <Context.Consumer>
                    {
                        (props) => {
                            let res = cbk(props)
                            console.log('props', props)
                            return <Component {...res} {...this.props}/>
                        }
                    }
                </Context.Consumer>
            }
        }
    }
}
