import React, { createContext, useState } from 'react'

const initialState = 'Umar Hayaat'

export const NameContext = createContext()

export default function NameContextProvider(props) {
    const [userName, setUserName] = useState(initialState)
    return ( 
        <>
            <NameContext.Provider value={{userName,setUserName}}>
                {props.children}
            </NameContext.Provider>
        </>
    )
}
