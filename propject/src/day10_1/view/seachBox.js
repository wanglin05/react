import React,{Component,Fragment} from 'react'
import '../scss/seachBox.scss'
 
export default class TodoList extends Component {
    constructor(props){
        super(props);
        this.state = {
            list:[
                '蜜芽甄选',
                '纸尿裤'
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
            <span onClick={this.handleBtnCilck.bind(this)} className="add">√</span>
                <ul>
                   {
                       this.state.list.map((item,index)=>{
                           return <li key={index}>{item}
                           <span onClick={this.handleItemClick.bind(this,index)}
                                 className="delete"
                           >x</span>
                           </li>
                       })
                   }
                </ul>
            </Fragment>
        )
    }
}