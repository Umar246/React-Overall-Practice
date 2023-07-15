import React, { useRef, useEffect,useState } from 'react';
import ringtone from './../assets/audios/ringtone.mp3'

export default function UseRef() {
    const focusInput = useRef()
    const notification = useRef(null)
    const [count ,setCount]=useState(0)


    const inputFocus = () => focusInput.current.focus()
    const inputBlur = () => focusInput.current.blur()

    useEffect(()=>{
       count>0 ? notification.current.play() : notification.current.pause()

    },[count])
    
const pauseNotification =()=>notification.current.pause()
    


    return (
        <>

            <div className="container">
                <div className="row">
                    <div className="col m-4">
                        <h6>Example 1 (Focus/Blur input by using useRef Hook)</h6>

                        <p>UseRef hook is used for direct DOM manipulation</p>


                        <input type="text" className='form-control w-50 mt-3' ref={focusInput} placeholder='The input get focused on clicking button' />
                        <button className='btn btn-primary mt-3' onClick={inputFocus}>Focus Input</button>
                        <button className='btn btn-secondary mt-3 mx-2' onClick={inputBlur}>Blur Input</button>

<br />
<br />
<br />
                        <h6>Example 2 (Here Ringtone on Clicking add product)</h6>
                        <audio ref={notification} src={ringtone} ></audio>
                       
                       <h4>Product are {count}</h4>
                        <button onClick={()=>setCount(count+1)} className='btn btn-warning'>Add Product </button>
                       
                        <button onClick={()=>setCount(count-1)} className='btn btn-danger ms-3'>Remove Product </button>
                        
                        <button onClick={pauseNotification} className='btn btn-primary mx-3'>Pause Notification</button>
                        <p>When you click add product button you hear a sound due to useRef hook if products are 2 than you here notification 2 times this method is used when you work on an app where you want to here a sound when a new user add or a user add a product in e-commerce website
                        </p>

                    </div>
                </div>
            </div>

        </>
    )
}
