import { profileData } from '../../../../mocks'

import './styles.scss'
import { TextArea, Avatar, Button } from '../../atoms'

const MessageTextBox = () => {

  return(
    <div className="message-textbox">
      <div className="message-textbox-profile-avatar">
        <Avatar profileImg={profileData.userAvatar}/>
      </div>
      <div className="message-textbox-text">
        <TextArea 
          initialValue = ' Add a comment...'
        />
      </div>
      <div className="message-textbox-button">
        <Button 
          label = 'Send'
        />
      </div>
    </div>
  )
}

export default MessageTextBox;
