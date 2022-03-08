import React from 'react';
import './styles.css'
import { ButtonProps } from './types'


const Button = ({
  label
}: ButtonProps) => {

  return (
    <div className="button">
      <button>
          {label}
      </button>
    </div>
  )
}

export default Button