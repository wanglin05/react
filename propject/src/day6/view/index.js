import React, {Component} from 'react'
import Detail from './detail'
import Task from './task'

export default class Index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            content: '给子组件传递一些东西',
            sendDetailData: ''
        }
    }
    changeContent = (content) => {
        this.setState({
            content
        })
    }
    getTaskData = (data) => {
        this.setState({
            sendDetailData:data
        })
    }
    render() {
        let {
            content,
            sendDetailData
        } = this.state;
        return (
        <div>
            index页面
            <Detail sendDetailData={sendDetailData} content={content} changeContent={this.changeContent}/>
            <Task getTaskData={this.getTaskData} />
        </div>
        )
    }
}
