import React, { useContext } from 'react'
import { countContext } from '../context/CountContext'
import { NameContext } from '../context/NameContext'
import { inputNameContext } from '../context/InputNameContext'

export default function UseContext() {
    const { counter, increment, decrement, reset } = useContext(countContext)
    const { userName } = useContext(NameContext)
    const { nameSet, person } = useContext(inputNameContext)


    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h6 className='mt-4'>Example 1 (My Name)</h6>
                        <h3>My name is {userName}</h3>
                        <h6>Example 2 (Counter)</h6>
                        <button onClick={increment} className='btn btn-success my-4'>Increment</button>
                        <h3 >{counter}</h3>
                        <button onClick={decrement} className='btn btn-danger my-4'>Decrement</button>
                        <hr />
                        <button onClick={reset} className='btn btn-warning my-4'>Reset Counter</button>
                        <p>This counter comes from CountContext due to useContext Method if you increase or decrease counter if this file counter value also change in UseContext file (see in dropdown) and if you change value in UseContext file also change in this file due to useContext because in both file there in same data which comes from CountContext file.</p>


                        <h6>Example 3 (Pick Name from input and show where you want)</h6>

                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <h5 className='text-start'>Enter Your Name</h5>
                                    <p className='text-start'>The username is {person}</p>
                                    <input type="text" className='form-control w-50' placeholder='Username'
                                        onChange={nameSet} />
                                        <p>After typing name check navbar and Home page</p>
                

                                </div>
                            </div>
                        </div>




                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />


                    </div>
                </div>
            </div>
        </>
    )
}
