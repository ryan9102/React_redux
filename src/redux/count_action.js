export function createIncrementAction(number) {
    return {type:'increment', data:number}
}

export function createDecrementAction(number) {
    return {type:'decrement', data:number}
}


