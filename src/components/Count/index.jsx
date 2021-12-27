import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createIncrementAction,
        createDecrementAction,
        } from '../../redux/actions/count'

class Count extends Component {

    increment = () =>{
        const {value} = this.checkNumbers
        this.props.jia(value*1)
    }

    dncrement = () =>{
        const {value} = this.checkNumbers
        this.props.jian(value*1)

    }

    incrementIfOdd = () =>{
        const {value} = this.checkNumbers
        if (this.props.he%2 !==0) {
            this.props.jia(value*1)
        }
    }

    incrementAsync = () =>{
        const {value} = this.checkNumbers
        setTimeout(() => {
            this.props.jia(value*1)
        }, 500);
    }

    render() {
        
        return (
            <div>
                <h3>This is the Count Component. 
                    The total number of people in Person Component is {this.props.personCount}</h3>
                <h4>Current sum is:{this.props.he} </h4>
                <select ref={c => this.checkNumbers = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.increment}>+</button>
                <button onClick={this.dncrement}>-</button>
                <button onClick={this.incrementIfOdd}>{'+ ( if Odd )'}</button>
                <button onClick={this.incrementAsync}>{'+Async'}</button>
            </div>
        )
    }
}

export default connect(
    state=>{
       return {
        he:state.sum,
        personCount:state.persons.length}
    },
    {
        jia:createIncrementAction,
        jian:createDecrementAction, 
    } 
    )(Count)