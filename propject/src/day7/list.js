import React, { Component } from 'react'

export default class List extends Component {
    render() {
        let {
            data
        } = this.props;
        return (
            <div>
                {
                    data && data.map((v, i) => {
                        return <span key={i}>{v}</span>
                    })
                }
            </div>
        )
    }
}
