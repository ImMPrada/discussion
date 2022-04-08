import React from 'react';
import './styles.scss'
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