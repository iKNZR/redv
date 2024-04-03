import React from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

const Button = ({text}) => {
  return (
    <div className='buttn'>
      <Link to='https://api.whatsapp.com/send?phone=5215639534196&text=hola' target='_blank'>
        <button>{text}</button>
      </Link>
    </div>
  )
}

export default Button