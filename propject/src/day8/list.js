import React, { Component } from 'react'
import propTypes from 'prop-types'

export default class List extends Component {
    static defaultProps = {
        data: [1, 2, 3]
    }
    static propTypes = {
        data: propTypes.isRequired,
        name: propTypes.oneOf(['News', 'Photos'])
    }
    render() {
        let {
            data
        } = this.props;
        return (
            <div>
                {
                    data && data.length && data.map((v, i) => {
                        return <div key={i}>{v}</div>
                    })
                }
            </div>
        )
    }
}



