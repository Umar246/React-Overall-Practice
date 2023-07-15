import React, { useState, useEffect, useContext } from 'react';
import Button from '../../components/Button/Button';
import { NameContext } from '../../context/NameContext';
import { countContext } from '../../context/CountContext';
import { inputNameContext } from '../../context/InputNameContext';

export default function Hero() {
    const { userName } = useContext(NameContext)
    const { counter, increment, decrement } = useContext(countContext)
    const { person } = useContext(inputNameContext)
    // Array Methods in React
    const cities = ["FSD", "LHR", "MTN", "RWP"];
    // Ternary Operator
    const userName1 = "Umar Hayaat";
    // Destructuring
    const car = {
        brand: 'Toyata',
        color: 'Black',
        model: '2016',
        seats: '6',
        type: 'manual',
    }

    const { brand, color, model, seats, type } = car;
    // Props in react
    const btnColor = 'info';
    // Events in React
    const alertMsg = msgText => alert(msgText)
    // Responsive Table With Map Method
    const users = [
        { firstName: "Umar", lastName: "Hayaat", email: "uj2849@gmail.com" },
        { firstName: "Hassan", lastName: "Nasir", email: "hassan123@gmail.com" },
        { firstName: "Talha", lastName: "Qurban", email: "talha456@gmail.com" },
        { firstName: "Hanan", lastName: "Ayub", email: "hanan789@gmail.com" },
        { firstName: "Hammad", lastName: "Ayub", email: "hammad90@gmail.com" },
    ]
    // React Hooks
    // useState Hook
    const [buttonColor, setButtonColor] = useState('primary')

    // useEffect Hook
    useEffect(() => {
        console.log('working')
    }, [buttonColor])





    return (
        <>
            <div className="container text-center">
                <div className="row">
                    <div className="col">

                        <ol className='text-center mt-4'>
                            {/* Array Method in React */}
                            <h3 className='text-center'>Array Method in React</h3>
                            {cities.map((city, i) => {
                                return <li key={i}>{city}</li>
                            })}
                        </ol>
                        {/* Ternary Operator */}
                        <h3>Ternary Operator</h3>
                        <h4 className='text-center'>{userName1 === "Umar Hayaat" ? "correct" : "wrong"}</h4>
                        {/* Destructuring */}
                        <h3>Destructuring in React</h3>
                        <ul>
                            <li>Car Brand is : <b>{brand}</b></li>
                            <li>Car Color is : <b>{color}</b></li>
                            <li>Car Model is :  <b>{model}</b></li>
                            <li>Seats in Car are : <b>{seats}</b></li>
                            <li>Car Type is : <b>{type}</b></li>
                        </ul>
                        {/* React Props & Events */}
                        <h3>React Props & Events</h3>

                        <p>These are  Buttons whose styling in due to props. And onclicking event  button an alert fires.  </p>

                        <Button bgColor={btnColor} textColor='dark' text='Event Button' func={() => alertMsg("I'm an alert message")} btnShadow="1px 1px 15px black" />

                        {/* CSS Inline Styling with Props and without Props */}

                        <Button bgColor='warning' textColor='white' text='Warning Button' btnShadow="1px 1px 15px black" />

                        <button className='btn btn-success px-4 mx-3' style={{ color: "yellow", boxShadow: "1px 1px 15px black" }}>Inline Styling Button</button>
                        <br />
                        <br />
                        <br />
                        <br />
                        {/* Responsive Table with Map Method */}
                        <h3>Responsive Table with Map Method</h3>

                        <div className="contanier">
                            <div className="row">
                                <div className="col">
                                    <div class="table-responsive">
                                        <table class="table table-striped table-hover">
                                            <thead>
                                                <tr>
                                                    <th scope="col">#</th>
                                                    <th scope="col">Firstname</th>
                                                    <th scope="col">Lastname</th>
                                                    <th scope="col">Email</th>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    users.map((person, i) => {
                                                        return (
                                                            <>
                                                                <tr>
                                                                    <th scope="row">{i + 1}</th>
                                                                    <td>{person.firstName}</td>
                                                                    <td>{person.lastName}</td>
                                                                    <td>{person.email}</td>

                                                                </tr>
                                                            </>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <h3>Here Important Topice of React Done (Hooks say phly waly) </h3>
                        <br />
                        {/* React Hooks */}
                        <h3>React Hooks</h3>
                        <h4>useState Hook</h4>
                        <button onClick={() => { setButtonColor('success') }} className='btn btn-success mx-1 px-3'>Success</button>
                        <button onClick={() => { setButtonColor('warning') }} className='btn btn-warning mx-1 px-3'>Warning</button>
                        <button onClick={() => { setButtonColor('danger') }} className='btn btn-danger mx-1 px-3'>Danger</button>
                        <br />
                        <br />
                        <h4>My Favrt Color is {buttonColor}</h4>
                        <button className={`btn btn-${buttonColor} m-3 px-3`}>Color Change By Above Buttons</button>
                        <h4>useEffect Hook</h4>
                        <p>See console on clicking above 3 buttons (for useEffect)</p>
                        <h4>useContext Hook</h4>
                        <p>Example 1</p>
                        <h5>My name is {userName}</h5>

                        <p>Example 2</p>

                        <h3><button onClick={increment} className='btn btn-success mx-2'>+</button>Counter is {counter}<button onClick={decrement} className='btn btn-danger mx-2'>-</button></h3>

                        <p>This counter comes from CountContext due to useContext Method if you increase or decrease counter if this file counter value also change in UseContext file (see in dropdown) and if you change value in UseContext file also change in this file due to useContext because in both file there in same data which comes from CountContext file.</p>
                        <p>Example 3 (Name from input)</p>
                        <h3>
                            The name comes from input field of UseContext file is <h3 className='d-inline text-primary fw-bold '> ' {person} '
                            </h3>
                        </h3>
<p>Code of useState and useEffext is in this file remaining hooks are seprate seprate see in dropdown menu</p>
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
