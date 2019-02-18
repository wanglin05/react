import React, { Component } from 'react'

export default class Task extends Component {
    childChange = () => {
        let {
            getTaskData
        } = this.props;
        getTaskData('task组件传递出来的')
    }
  render() {
    return (
      <div>
          <button onClick={
              this.childChange
          }>给detail传递数据</button>
      </div>
    )
  }
}
