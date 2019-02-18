import React, { Component } from 'react'

export default class Detail extends Component {
    changeContent = () => {
        let {
            changeContent
        } = this.props;
        changeContent('子组件传递的东西')
    }
    render() {
        let {
            content,
            changeContent,
            sendDetailData
        } = this.props;
        return (
            <div>
                detail页面
                {
                    sendDetailData
                } 
                <button onClick = {this.changeContent}>改变content</button>
            </div> 
        )
   }
}
