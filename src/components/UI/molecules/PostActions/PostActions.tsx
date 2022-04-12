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
}:PostActionsProp) => {
  const { deletePost, responsePost } = useContext(PostsContext) as PostsContextTypes;
  const actionDelete = () => {
    console.log(postId)
    deletePost(postId)
  }

  const actionResponse = () => {
    console.log(postId)
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
          <ActionButton
            icon={<BackArrowIcon/>}
            text='Reply'
            color='primary'
            action={actionResponse}
          />
        )
      }
    </div>
  )
}

export default PostActions
