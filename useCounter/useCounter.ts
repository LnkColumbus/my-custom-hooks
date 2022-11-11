import { useState } from 'react'

export const useCounter = ( initialValue: number = 10 ) => {
    const [counter, setCounter] = useState(initialValue);

    const increment = ( value: number = 1 ) => {
        setCounter((curr) => curr + value);
    }

    const decrement = ( value: number = 1 ) => {
        setCounter((curr) => curr - value);
    }

    const reset = () => {
        setCounter(initialValue);
    }

    return {
        counter,
        decrement,
        increment,
        reset
    }
}