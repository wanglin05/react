import React,{Component,Fragment} from 'react'
 
export default class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            list:[
                'one',
                'two'
            ],
            inputValue:''
        }
    }
    handleBtnCilck(){
        this.setState({
            list:[...this.state.list, this.state.inputValue],
            inputValue:''
        })
    }
    handleInputChange(e){
        this.setState({
            inputValue:e.target.value,
        })
    }
    handleItemClick(index){
        //console.log(index);
        const list = [...this.state.list];
        list.splice(index,1);
        this.setState({
            list:list
        })
    }
    render(){
        return(
            <Fragment>
            <input onChange={this.handleInputChange.bind(this)}
            value={this.state.inputValue}
            />
            <button onClick={this.handleBtnCilck.bind(this)} className="add">添加</button>
                <ul>
                   {
                       this.state.list.map((item,index)=>{
                           return <li className="list" key={index}>{item}
                           <span style={{marginLeft:"20px"}}
                                 onClick={this.handleItemClick.bind(this,index)}
                                 className="delete"
                           >删除</span>
                           </li>
                       })
                   }
                </ul>
            </Fragment>
        )
    }
}