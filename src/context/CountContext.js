import React, { createContext, useState } from 'react';

export const countContext = createContext();
const initialState = 0;

export default function CountContextProvider(props) {

    const [counter, setCounter] = useState(initialState)

    const increment = () => setCounter(counter + 1)
    const decrement = () => counter > 0 ? setCounter(counter - 1) : setCounter(initialState)
    const reset = () => setCounter(initialState)


    return (
        <>
        <countContext.Provider value={{counter,increment,decrement,reset}}>
            {props.children}
        </countContext.Provider>
        </>
    )
}
