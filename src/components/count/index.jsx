import React, { Component } from 'react'


export default class Count extends Component {

    increment = () =>{
        const {value} = this.checkNumbers
    }

    dncrement = () =>{
        const {value} = this.checkNumbers
    }

    incrementIfOdd = () =>{
        const {value} = this.checkNumbers
       
    }

    incrementAsync = () =>{
        const {value} = this.checkNumbers
      
    }

    render() {
        return (
            <div>
                <h2>当前求和为:</h2>
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
