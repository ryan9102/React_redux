import React, { Component } from 'react'

export default class Count extends Component {


    state = {count:0}

    increment = () =>{
        const {value} = this.checkNumbers
        const {count} = this.state
        this.setState({count:count + value*1})
    }

    dncrement = () =>{
        const {value} = this.checkNumbers
        const {count} = this.state
        this.setState({count:count - value*1})
    }

    incrementIfOdd = () =>{
        const {value} = this.checkNumbers
        const {count} = this.state
        if(count%2){
            this.setState({count:count + value*1})
        }
        
    }

    incrementAsync = () =>{
        const {value} = this.checkNumbers
        const {count} = this.state
        setTimeout(() => {
            this.setState({count:count + value*1})
        }, 500);
       
    }

    render() {
        return (
            <div>
                <h2>当前求和为:{this.state.count}</h2>
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
