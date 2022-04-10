import { useContext } from 'react'
import { AuthContext } from '../../../../contexts/AuthContext'
import usePost from '../../../../hooks/usePost'
import './styles.scss'
import { Avatar } from '../../atoms'

const MessageTextBox = () => {
  const { formik } = usePost()
  const { currentUser }: any = useContext(AuthContext);


  return(
    <form onSubmit={formik.handleSubmit}>
      <div className="message-textbox">
        <div className="message-textbox-avatar">
          <Avatar profileImg={currentUser.userAvatar} />
        </div>
        <div className="message-textbox-text-area">
          <textarea 
            id='postToSend'
            placeholder='Add a new post...'
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
            value={formik.values.postToSend}
          > 
          </textarea>        
        </div>
        <button type='submit'>SEND</button>
      </div>
    </form>
  )
}

export default MessageTextBox;
