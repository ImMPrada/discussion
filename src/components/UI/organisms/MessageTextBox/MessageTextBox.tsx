import { useContext } from 'react'
import { AuthContext } from '../../../../contexts/AuthContext'
import { AuthContextTypes } from '../../../../contexts/AuthContext/types'
import usePost from '../../../../hooks/usePost'
import './styles.scss'
import { Avatar } from '../../atoms'

const MessageTextBox = () => {
  const { formik } = usePost();
  const { currentUser } = useContext(AuthContext) as AuthContextTypes;
  if (!currentUser) return null;

  return(
    <form onSubmit={formik.handleSubmit}>
      <div className="message-textbox">
        <div className="message-textbox-avatar">
          <Avatar profileImg={currentUser.avatar} />
        </div>
        <div className="message-textbox-text-area">
          <textarea 
            id='content'
            placeholder='Add a new post...'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.content}
          > 
          </textarea>        
        </div>
        <button type='submit'>SEND</button>
      </div>
    </form>
  )
}

export default MessageTextBox;
