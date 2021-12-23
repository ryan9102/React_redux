import React, { Component } from 'react'
import store from '../../redux/store'

export default class Count extends Component {

    increment = () =>{
        const {value} = this.checkNumbers
        store.dispatch({type:'increment',data:value*1})
    }

    dncrement = () =>{
        const {value} = this.checkNumbers
        store.dispatch({type:'decrement',data:value*1})
    }

    incrementIfOdd = () =>{
        const {value} = this.checkNumbers
        if (store.getState()%2 !== 0) {
           store.dispatch({type:'increment',data:value*1}) 
        }
    }

    incrementAsync = () =>{
        const {value} = this.checkNumbers
        setTimeout(() => {
            store.dispatch({type:'increment',data:value*1})
        }, 500);
    }

    render() {
        return (
            <div>
                <h2>当前求和为:{store.getState()}</h2>
                <select ref={c => this.checkNumbers = c}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.increment}>+</button>
                <button onClick={this.dncrement}>-</button>
                <button onClick={this.incrementIfOdd}>奇数再加</button>
                <button onClick={this.incrementAsync}>异步加</button>
            </div>
        )
    }
}
