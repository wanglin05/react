import React, {Component} from 'react';
import List from './list'
import Detail from './detail'



export default class Index extends Component {
    constructor (props){
        super(props)
        this.state = {
            list: {
                'one': [
                    'one-one',
                    'one-two',
                    'one-three'
                ],
                'two': [
                    'two-one',
                    'two-two',
                    'two-three'
                ],
                'three': [
                    'three-one',
                    'three-two',
                    'three-three'
                ]
            },
            detailData: [
                'one-one',
                'one-two',
                'one-three'
            ]
        }
    }

    render() {
        let {
            list,
            detailData
        } = this.state;
        return (
            <div>
                <List data={Object.keys(list)}/>
                <Detail data={detailData}/>
            </div>
        )
    }
}
