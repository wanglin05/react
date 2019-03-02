import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as IndexActions from '../store/index/index.action'


class Item extends Component {

    changeChecked = (e) => {
        let {
            listData,
            ind,
            getData,
            changeAllChecked,
            allPrice,
            allCont,
            val,
            changeAllCont,
            changeAllPrice
        } = this.props;
        listData[ind].checked = e.target.checked;
        let isAllChecked = listData.every((v, i) => {
            return v.checked
        })
        if (e.target.checked) {
            allPrice += (val.num * val.pic);
            allCont += val.num
        } else {
            allPrice -= (val.num * val.pic);
            allCont -= val.num
        }
        changeAllChecked(isAllChecked);
        getData(listData);
        changeAllPrice(allPrice)
        changeAllCont(allCont)
    }

    isAdd = (type) => {
        let {
            listData,
            ind,
            getData,
            allPrice,
            allCont,
            val,
            changeAllCont,
            changeAllPrice
        } = this.props;
        if (type === 'add') {
            listData[ind].num++;
            if (val.checked) {
                allPrice += val.pic
                allCont++
            }
        }else {
            listData[ind].num--;
            if (val.checked) {
                allPrice -= val.pic
                allCont--
            }
        }
        changeAllPrice(allPrice)
        changeAllCont(allCont)
        getData(listData)
    }

    render () {
        let {
            val
        } = this.props;
        return (
            <div>
                <div><input type='checkbox' checked={val.checked} onChange={this.changeChecked} />{val.name}</div>
                <h3>{val.pic}</h3>
                <div>
                    <button disabled={val.num === 1} onClick={() => {
                        this.isAdd('del')
                    }}>-</button>
                    <span>{val.num}</span>
                    <button onClick={() => {
                        this.isAdd('add')
                    }}>+</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => state.IndexStore
const mapDispatchToProps = dispatch => bindActionCreators(IndexActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Item)