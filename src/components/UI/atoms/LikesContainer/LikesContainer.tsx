import React from 'react';
import './styles.css'


const LikesContainer = () => {
  const [value, setValue] = React.useState(0)
  const increaseValue = () => {
    let tempValue = value+1
    setValue(tempValue)
  }
  const decreaseValue = () => {
    let tempValue = Math.max(0, value-1)
    setValue(tempValue)
  }

  return (
    <div className="button-container">
      <div className="button-container-action" onClick={increaseValue}>
        <button>+</button>
      </div>
      <div className="button-container-counter">
        <p>{value}</p>
      </div>
      <div className="button-container-action" onClick={decreaseValue}>
      <button>-</button>
      </div>
    </div>
  )
}

export default LikesContainer
