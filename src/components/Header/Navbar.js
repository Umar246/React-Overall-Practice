import React,{useContext} from 'react'
import { Link } from 'react-router-dom'
import { inputNameContext } from '../../context/InputNameContext'

export default function Navbar() {

  const {person}=useContext(inputNameContext)
  return (
    <header>
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
  <div className="container">
    <Link to={'/'} className="nav-link active text-white">Home </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <button className="nav-link " aria-current="page" >Contact</button>
        </li>
        <li className="nav-item">
          <Link to={'/about'} className="nav-link">About</Link>
        </li>
        <li className="nav-item dropdown">
          <button className="nav-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </button>
          <ul className="dropdown-menu">
            <li><Link to={'/useContext/hook'}  className="dropdown-item" >useContext Hook</Link></li>
            <li><Link to={'/useRef/hook'}  className="dropdown-item" >useRef Hook</Link></li>
           
          </ul>
        </li>
        
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success"   type="submit">Search</button>
      </form> */}
<span className='text-white'>Assalam o Alaikum {person}!</span>



    </div>                 
      </div>
</nav>
    </header>
  )
}
