import { ActionButtonProps } from './types'
import './styles.scss'


const ActionButton = ({
  icon,
  text,
  color,
  ...props
}: ActionButtonProps ) => (
  <button 
    className={`action-button ${color || 'primary'}`}
    {...props}
  >
    {icon}
    {text}
  </button>
)

export default ActionButton
