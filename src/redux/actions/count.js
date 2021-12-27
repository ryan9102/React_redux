import {DECREMENT,INCREMENT} from '../constant'

export function createIncrementAction(number) {
    return {type:INCREMENT, data:number}
}

export function createDecrementAction(number) {
    return {type:DECREMENT, data:number}
}


