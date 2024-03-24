import React from 'react'
import './Button.css'

const Button = ({text}) => {
  return (
    <div className='buttn'>
      <a href='https://api.whatsapp.com/send?phone=5215586666977&text=hola' target='_blank'>
        <button>{text}</button>
      </a>
    </div>
  )
}

export default Button