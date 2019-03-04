import React, { Component } from 'react'

export default class Detail extends Component {
    render() {
        let {
            data
        } = this.props;
        return (
            <div>
                {
                    data && data.map((v, i) => {
                        return <p key={i}>{v}</p>
                    })
                }
            </div>
        )
    }
}
