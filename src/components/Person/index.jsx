import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createAddPersonAction} from '../../redux/actions/person'
import {nanoid} from 'nanoid'
class Person extends Component {
    add = () => {
        const {nameNode,ageNode} = this
        this.props.addOnePerson({id:nanoid(),name:nameNode.value,age:ageNode.value})
    }

    render() {
        return (
            <div>
                <h3>This is the Person Component. The sum of Count Component is {this.props.sum}</h3>
                <input ref={c => this.nameNode = c} type="text" placeholder='name'/>
                <input ref={c => this.ageNode = c} type="text" placeholder='age'/>
                <button onClick={this.add}>add</button>
                <ul>
                    {this.props.persons.map((personObj) => {
                        return <li key={personObj.id}>{personObj.name}----{personObj.age}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default connect(
    state=>{
       return {
        persons:state.persons,
        sum:state.sum}
    },
    {
        addOnePerson:createAddPersonAction
    } 
    )(Person)