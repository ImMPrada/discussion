import { useContext } from 'react'
import { ActionButton } from '../../atoms'
import { PenIcon, TrashIcon, BackArrowIcon } from '../../../icons'
import { PostActionsProp } from './types'
import { PostsContext } from '../../../../contexts/PostsContext'
import { PostsContextTypes } from '../../../../contexts/PostsContext/types'
import './styles.scss'

const PostActions = ({
  isYou,
  postId,
  isReceiver,
}:PostActionsProp) => {
  const { deletePost, responsePost } = useContext(PostsContext) as PostsContextTypes;
  const actionDelete = () => {
    deletePost(postId)
  }

  const actionResponse = () => {
    responsePost(postId)
  }

  return (
    <div className='post-actions'>
      {
        isYou ? (
          <>
            <ActionButton 
              icon={<TrashIcon/>}
              text='Delete'
              color='danger'
              action={actionDelete}
            />
            <ActionButton 
              icon={<PenIcon/>}
              text='Edit'
              color='primary'
              action={actionDelete}
              />
          </>
        ) : (
          isReceiver && (
            <ActionButton
              icon={<BackArrowIcon/>}
              text='Reply'
              color='primary'
              action={actionResponse}
            />
          )
        )
      }
    </div>
  )
}

export default PostActions
