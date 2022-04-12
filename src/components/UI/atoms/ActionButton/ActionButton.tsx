import { ActionButtonProps } from './types'
import './styles.scss'


const ActionButton = ({
  icon,
  text,
  color,
  action,
  ...props
}: ActionButtonProps ) => (
  <button 
    className={`action-button ${color || 'primary'}`}
    onClick={() => action()}
    {...props}
  >
    {icon}
    {text}
  </button>
)

export default ActionButton
