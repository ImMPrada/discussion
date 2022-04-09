import { ActionButton } from '../../atoms'
import { PenIcon, TrashIcon, BackArrowIcon } from '../../../icons'
import { PostActionsProp } from './types'
import './styles.scss'

const PostActions = ({
  isYou
}:PostActionsProp) => {

  return (
    <div className='post-actions'>
      {
        isYou ? (
          <>
            <ActionButton 
              icon={<TrashIcon/>}
              text='Delete'
              color='danger'
            />
            <ActionButton 
              icon={<PenIcon/>}
              text='Edit'
              color='primary'
              />
          </>
        ) : (
          <ActionButton
            icon={<BackArrowIcon/>}
            text='Reply'
            color='primary'
          />
        )
      }
    </div>
  )
}

export default PostActions
