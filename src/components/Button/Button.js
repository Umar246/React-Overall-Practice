import React from 'react'

export default function Button(props) {
    const {bgColor,textColor,text,func,btnShadow}=props
  return (
    <>
    <button className={`btn btn-${bgColor} px-4 text-${textColor} mx-3`} onClick={func} style={{boxShadow:`${btnShadow}`,}} >{text}</button>
    </>
  )
}
