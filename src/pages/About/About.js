import React, { useContext } from 'react';
import { NameContext } from '../../context/NameContext';
import { countContext } from '../../context/CountContext';

export default function About() {
  const { userName } = useContext(NameContext)
  const {counter}=useContext(countContext)

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col text-center mt-4 text-success">

            <h4>Example 1</h4>
            <h2>My name is {userName}</h2>
            <p>This userName comes from NameContext Component due to context process</p>

            <h4>Example 2</h4>
            <h5>The counter is {counter}</h5>
            <p>This counter comes from CountContext due to useContext Method</p>
          </div>
        </div>
      </div>
    </>
  )
}
