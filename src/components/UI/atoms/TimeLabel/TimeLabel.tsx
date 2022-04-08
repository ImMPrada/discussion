import { TimeLabelProps } from './types'
import './styles.scss'


const TimeLabel = ({label}: TimeLabelProps) => (
  <span className="time-label">
    {label}
  </span>
)

export default TimeLabel
