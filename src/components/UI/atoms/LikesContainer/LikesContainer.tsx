import React from 'react';
import { PlusIcon, MinusIcon } from '../../../icons';
import './styles.scss'


const LikesContainer = () => {
  const [value, setValue] = React.useState(0)

  const increaseValue = () => {
    setValue(value + 1)
  }
  const decreaseValue = () => {
    setValue(Math.max(0, value-1))
  }

  return (
    <div className="likes-container">
      <button className="likes-container-action" onClick={increaseValue}>
        <PlusIcon />
      </button>
      <div className="likes-container-counter">
        <span>{value}</span>
      </div>
      <button className="likes-container-action" onClick={decreaseValue}>
        <MinusIcon />
      </button>
    </div>
  )
}

export default LikesContainer
