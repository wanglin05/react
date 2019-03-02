import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as IndexActions from '../store/index/index.action'
import Item from './item'
import '../mock/mock'


class Index extends Component {
    componentDidMount() {
        let {
            getData
        } = this.props;
        axios.get('/data').then(res => {
            getData(res.data)
        })
    }

    changeAllChecked = (e) => {
        let {
            listData,
            getData,
            changeAllPrice,
            changeAllCont,
            defaultPrice = 0,
            defaultCont = 0,
            changeAllChecked
        } = this.props;
        listData = listData.map((v, i) => {
            v.checked = e.target.checked
            if (e.target.checked) {
                defaultPrice += (v.num * v.pic)
                defaultCont += v.num
            }
            return v
        })
        getData(listData);
        changeAllPrice(e.target.checked ? defaultPrice : 0)
        changeAllCont(e.target.checked ? defaultCont : 0)
        changeAllChecked(e.target.checked)
    }

    render () {
        let {
            listData,
            allPrice,
            allCont,
            allChecked
        } = this.props;
        return (
            <div>
                {
                    listData.length > 0 && listData.map((v, i) => {
                        return <Item key={i} val={v} ind={i} />
                    })
                }
                <div>
                    <input type='checkbox' checked={allChecked} onChange={this.changeAllChecked} />全选
                    <span>总价为{allPrice}</span>
                    <span>总数为{allCont}</span>
                </div>
            </div>
        )
    }
}



const mapStateToProps = state => state.IndexStore
const mapDispatchToProps = dispatch => bindActionCreators(IndexActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Index)