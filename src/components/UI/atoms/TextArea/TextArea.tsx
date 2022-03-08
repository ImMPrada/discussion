import React from 'react';
import './styles.css'
import { TextAreaProps } from './types'


const TextArea = ({
  initialValue
}: TextAreaProps) => {

  return (
    <div className="textarea">
      <textarea name="" id="">
        {initialValue}
      </textarea>
    </div>
  )
}

export default TextArea