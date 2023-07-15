import React,{createContext,useState} from 'react'



export const inputNameContext = createContext()
export default function InputNameContextProvider(props) {
    
    const [person ,setPerson]=useState('')
    const nameSet =(e)=> setPerson(e.target.value)
  
    return (
    <>
<inputNameContext.Provider value={{nameSet,person}}>
{props.children}
</inputNameContext.Provider>
    </>
  )
}
